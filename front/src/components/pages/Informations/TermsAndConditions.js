// Import
import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

// == Loader animation
import Loader from 'src/components/templates/Loader/LoaderCircle';

// == Composant
const TermsAndConditions = ({
  termsAndConditionsDataLoaded,
  termsAndConditionsData,
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
        <title>Conditions generales</title>
        <meta name="description" content="Page des conditions generales" />
      </Helmet>
      {termsAndConditionsDataLoaded ? (
        <>
          <h1
            id={termsAndConditionsData[0].id}
            ref={addRefs}
          >
            {termsAndConditionsData[0].h1}
          </h1>

          <section className="informations-societe">
            <p>{termsAndConditionsData[0].p_1[0].text}</p>
            <p>{termsAndConditionsData[0].p_1[1].text}</p>
          </section>

          <section className="informations-preambule">
            <h2
              id={termsAndConditionsData[1].id}
              ref={addRefs}
            >
              {termsAndConditionsData[1].h2_1}
            </h2>

            <p>{termsAndConditionsData[0].p_1[0].text}</p>
          </section>

          <section className={termsAndConditionsDataLoaded === true ? 'informations-article-terms-and-conditions' : 'informations-article'}>
            {Object.keys(termsAndConditionsData[2].articles).map((key) => (
              <div key={termsAndConditionsData[2].articles[key].id}>
                <h3
                  key={termsAndConditionsData[2].articles[key].id}
                  id={termsAndConditionsData[2].articles[key].id + 2}
                  ref={addRefs}
                >
                  {termsAndConditionsData[2].articles[key].h3_1}
                </h3>

                {Object.keys(termsAndConditionsData[2].articles[key].p_1).map((text) => (
                  <p key={termsAndConditionsData[2].articles[key].p_1[text].id}>
                    {termsAndConditionsData[2].articles[key].p_1[text].text}
                  </p>
                ))}

                <ul>
                  {Object.keys(termsAndConditionsData[2].articles[key].ul_1).map((text) => (
                    <li key={termsAndConditionsData[2].articles[key].ul_1[text].id}>
                      {termsAndConditionsData[2].articles[key].ul_1[text].text}
                    </li>
                  ))}
                </ul>
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

TermsAndConditions.propTypes = {
  termsAndConditionsData: PropTypes.array.isRequired,
  termsAndConditionsDataLoaded: PropTypes.bool.isRequired,
  handleInfosRefs: PropTypes.func.isRequired,
};

// == Export
export default TermsAndConditions;
