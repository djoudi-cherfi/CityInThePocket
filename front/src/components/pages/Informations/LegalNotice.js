// Import
import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

// == Loader animation
import Loader from 'src/components/templates/Loader/LoaderCircle';

// == Composant
const LegalNotice = ({
  legalNoticeData,
  legalNoticeDataLoaded,
  handleInfosRefs,
}) => {
  const refs = useRef([]);
  refs.current = [];

  const addRefs = ((refsValue) => {
    if (refs && !refs.current.includes(refs)) {
      refs.current.push(refsValue);
    }
  });

  const arrayCleanRefs = [];

  useEffect(() => {
    const cleanRefs = ((refsValue) => {
      refsValue.map((ref) => arrayCleanRefs.push(ref.outerText));
      handleInfosRefs(arrayCleanRefs);
    });
    cleanRefs(refs.current);
  }, []);

  return (
    <div className="informations-content">
      <Helmet>
        <title>Mentions legales</title>
        <meta name="description" content="Page des mentions legales" />
      </Helmet>
      {legalNoticeDataLoaded ? (
        <>
          <h1
            id={legalNoticeData[0].id}
            ref={addRefs}
          >
            {legalNoticeData[0].h1}
          </h1>

          <section className="informations-societe">
            <p>{legalNoticeData[0].p_1[0].text}</p>
          </section>

          <section className="informations-preambule">
            <h2
              id={legalNoticeData[1].id}
              ref={addRefs}
            >
              {legalNoticeData[1].h2_1}
            </h2>

            <p>{legalNoticeData[0].p_1[0].text}</p>
          </section>

          <section className={legalNoticeDataLoaded === true ? 'informations-article-legal-notice' : 'informations-article'}>
            {Object.keys(legalNoticeData[2].articles).map((key) => (
              <div key={legalNoticeData[2].articles[key].id}>
                <h3
                  key={legalNoticeData[2].articles[key].id}
                  id={legalNoticeData[2].articles[key].id + 2}
                  ref={addRefs}
                >
                  {legalNoticeData[2].articles[key].h3_1}
                </h3>

                {Object.keys(legalNoticeData[2].articles[key].p_1).map((text) => (
                  <p key={legalNoticeData[2].articles[key].p_1[text].id}>
                    {legalNoticeData[2].articles[key].p_1[text].text}
                  </p>
                ))}

                <ul>
                  {Object.keys(legalNoticeData[2].articles[key].ul_1).map((text) => (
                    <li key={legalNoticeData[2].articles[key].ul_1[text].id}>
                      {legalNoticeData[2].articles[key].ul_1[text].text}
                    </li>
                  ))}
                </ul>

                {Object.keys(legalNoticeData[2].articles[key].p_2).map((text) => (
                  <p key={legalNoticeData[2].articles[key].p_2[text].id}>
                    {legalNoticeData[2].articles[key].p_2[text].text}
                  </p>
                ))}
              </div>
            ))}
          </section>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

LegalNotice.propTypes = {
  legalNoticeData: PropTypes.array.isRequired,
  legalNoticeDataLoaded: PropTypes.bool.isRequired,
  handleInfosRefs: PropTypes.func.isRequired,
};

// == Export
export default LegalNotice;
