// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { VscArrowLeft, VscArrowRight, VscClose } from 'react-icons/vsc';

import './slider.scss';

// == Composant
const Slider = ({
  slidesData,
  currentSlide,
  handleSlide,
  closeSlide,
}) => {
  useEffect(() => {
  }, []);

  const lengthSlide = slidesData.length;

  if (!Array.isArray(slidesData) || slidesData.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {slidesData.map((slide, index) => (
        <div key={slide.id} className={index === currentSlide ? 'slide active' : 'slide'}>
          {index === currentSlide && (
            <img
              className="slider-fullscreen-image"
              src={`${URL_PUBLIC}${slide.image}`}
              width="100%"
              alt="identité visuelle du produit"
            />
          )}
          <div className="slider-close">
            <VscClose
              onClick={() => {
                closeSlide(0);
              }}
            />
          </div>
        </div>
      ))}

      <div className="slider-arrow-back">
        <VscArrowLeft
          onClick={() => {
            handleSlide(
              currentSlide === 0 ? lengthSlide - 1 : currentSlide - 1,
            );
          }}
        />
      </div>

      <div className="slider-arrow-forward">
        <VscArrowRight
          onClick={() => {
            handleSlide(
              currentSlide === lengthSlide - 1 ? 0 : currentSlide + 1,
            );
          }}
        />
      </div>

      <div className="indicator-dots">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => handleSlide(index)}
            className={index === currentSlide ? 'dot active' : 'dot'}
          >
            {' '}
          </div>
        ))}
      </div>

      <div className="slider-bg"> </div>

    </div>
  );
};

Slider.propTypes = {
  slidesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentSlide: PropTypes.number.isRequired,
  handleSlide: PropTypes.func.isRequired,
  closeSlide: PropTypes.func.isRequired,
};

// == Export
export default Slider;
