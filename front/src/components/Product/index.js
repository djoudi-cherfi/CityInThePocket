// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useParams, Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

// == Import
import Slider from 'src/containers/Product/Slider';

import './product.scss';

// == Composant
const ProductDetail = ({
  cityName,
  HandleProductIdUrl,
  productIdUrl,
  loadProduct,
  productLoaded,
  product,
  slidesData,
  currentSlide,
  openSlide,
  toggleSlideOpen,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      <Redirect to={`/${cityName}/home`} />;
    }
    else {
      HandleProductIdUrl(id);
    }

    loadProduct();
  }, [productIdUrl]);

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.name} />
      </Helmet>

      {productLoaded
        ? (
          <>
            {toggleSlideOpen && (
              <div className="product">
                <div className="thumbnail">
                  {slidesData.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={index === currentSlide ? 'thumbnail-giant active' : 'thumbnail-giant'}
                      onClick={() => {
                        openSlide(index);
                      }}
                    >
                      {index === currentSlide && (
                        <img
                          className="thumbnail-giant-fullscreen"
                          src={`${URL_PUBLIC}${slide.image}`}
                          width="100%"
                          alt="identité visuelle du produit"
                        />
                      )}
                    </div>
                  ))}

                  {slidesData.filter((_, index) => index > 0).map((slide, index) => (
                    <img
                      key={slide.id}
                      className={index === currentSlide ? 'thumbnail-small active' : 'thumbnail-small'}
                      src={`${URL_PUBLIC}${slide.image}`}
                      width="100%"
                      alt="identité visuelle du produit"
                      onClick={() => {
                        openSlide(index + 1);
                      }}
                    />
                  ))}
                </div>
                <div className="product-info">
                  <div className="product-info-wrap">
                    <h2 className="product-title-produit">{product.name}</h2>
                    <h3 className="product-title-vendeur">company_name</h3>
                  </div>

                  <h4 className="product-price">
                    {product.price}
                    €
                  </h4>
                </div>
                <p className="product-description">{product.description}</p>
              </div>
            )}
            {!toggleSlideOpen && (
              <Slider {...product} />
            )}
          </>
        ) : (<Loader />)}
    </>
  );
};

ProductDetail.propTypes = {
  cityName: PropTypes.string.isRequired,
  HandleProductIdUrl: PropTypes.func.isRequired,
  productIdUrl: PropTypes.string.isRequired,
  loadProduct: PropTypes.func.isRequired,
  productLoaded: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  slidesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentSlide: PropTypes.number.isRequired,
  openSlide: PropTypes.func.isRequired,
  toggleSlideOpen: PropTypes.bool.isRequired,
};

// == Export
export default ProductDetail;
