// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useParams, Navigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

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
  toggleSlideProductOpen,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      <Navigate to={`/${cityName.slug}/home`} />;
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
            {toggleSlideProductOpen === false && (
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
                          className="thumbnail-giant-img"
                          src={`${URL_PUBLIC}${slide.image}`}
                          width="100%"
                          alt="identité visuelle du produit"
                        />
                      )}
                    </div>
                  ))}

                  {slidesData.filter((_, index) => index > 0).map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`thumbnail-small${slide.id}`}
                      onClick={() => {
                        openSlide(index + 1);
                      }}
                    >
                      <img
                        className="thumbnail-small-img"
                        src={`${URL_PUBLIC}${slide.image}`}
                        width="100%"
                        alt="identité visuelle du produit"
                      />
                    </div>
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
          </>
        ) : (<Loader />)}
    </>
  );
};

ProductDetail.propTypes = {
  cityName: PropTypes.object.isRequired,
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
  toggleSlideProductOpen: PropTypes.bool.isRequired,
};

// == Export
export default ProductDetail;
