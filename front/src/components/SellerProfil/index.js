// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useParams, Redirect, Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

// == Import
import ProductCard from 'src/components/Cards/ProductCard';
import Map from 'src/components/Map';
import Contact from './Contact';

import './sellerprofil.scss';

// == Composant
const SellerProfil = ({
  cityName,
  HandleShopIdUrl,
  shopIdUrl,
  loadShop,
  shopLoaded,
  shop,
  loadProductsByShop,
  productsByShopLoaded,
  productsByShop,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      <Redirect to={`/${cityName}/home`} />;
    }
    else {
      HandleShopIdUrl(id);
    }

    loadShop();
    loadProductsByShop();
  }, [shopIdUrl]);

  return (
    <>
      <Helmet>
        <title>{shop.company_name}</title>
        <meta name="description" content={shop.company_name} />
      </Helmet>

      {shopLoaded && productsByShopLoaded
        ? (
          <div className="sellerprofil">

            <div className="sellerprofil-container">
              <div className="sellerprofil-head">
                <Contact {...shop} />

                <div className="sellerprofil-description">
                  <h2 className="description-title">{shop.company_name}</h2>
                  <p className="description-summary">{shop.description}</p>
                </div>

                <div className="sellerprofil-map">
                  <Map {...shop} />
                </div>
              </div>

              <div className="sellerprofil-content">
                {productsByShop.map((product) => (
                  <Link
                    key={product.id}
                    to={`/${cityName}/product/${product.id}`}
                  >
                    <ProductCard key={product.id} {...product} />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        ) : (<Loader />)}
    </>
  );
};

SellerProfil.propTypes = {
  cityName: PropTypes.string.isRequired,
  HandleShopIdUrl: PropTypes.func.isRequired,
  shopIdUrl: PropTypes.string.isRequired,
  loadShop: PropTypes.func.isRequired,
  shopLoaded: PropTypes.bool.isRequired,
  shop: PropTypes.object.isRequired,
  loadProductsByShop: PropTypes.func.isRequired,
  productsByShopLoaded: PropTypes.bool.isRequired,
  productsByShop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default SellerProfil;
