// Import
import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

// == Composant
const TermsAndConditions = ({
  data,
  termsAndConditionsDataLoaded,
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
      {termsAndConditionsDataLoaded ? (
        <>
          <h1
            id={data[0].id}
            ref={addRefs}
          >
            {data[0].h1}
          </h1>

          <section className="informations-societe">
            <p>{data[0].p_1[0].text}</p>
            <p>{data[0].p_1[1].text}</p>
          </section>

          <section className="informations-preambule">
            <h2
              id={data[1].id}
              ref={addRefs}
            >
              {data[1].h2_1}
            </h2>

            <p>{data[0].p_1[0].text}</p>
          </section>

          <section className={termsAndConditionsDataLoaded === true ? 'informations-article-terms-and-conditions' : 'informations-article'}>
            <>
              {Object.keys(data[2].articles).map((key) => (
                <div key={data[2].articles[key].id}>
                  <h3
                    key={data[2].articles[key].id}
                    id={data[2].articles[key].id + 2}
                    ref={addRefs}
                  >
                    {data[2].articles[key].h3_1}
                  </h3>

                  {Object.keys(data[2].articles[key].p_1).map((text) => (
                    <p key={data[2].articles[key].p_1[text].id}>
                      {data[2].articles[key].p_1[text].text}
                    </p>
                  ))}

                  <ul>
                    {Object.keys(data[2].articles[key].ul_1).map((text) => (
                      <li key={data[2].articles[key].ul_1[text].id}>
                        {data[2].articles[key].ul_1[text].text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

TermsAndConditions.propTypes = {
  data: PropTypes.array.isRequired,
  termsAndConditionsDataLoaded: PropTypes.bool.isRequired,
  handleInfosRefs: PropTypes.func.isRequired,
};

// == Export
export default TermsAndConditions;
