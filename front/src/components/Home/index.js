// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// == Head html informations
import { Helmet } from 'react-helmet';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

// == Import
import ProductCard from 'src/components/Cards/ProductCard';
import ShopCard from 'src/components/Cards/ShopCard';

import './home.scss';

// == Composant
const Home = ({
  cityName,
  loadproductsLastAdd,
  productsLastAddLoaded,
  productsLastAdd,
  loadShopsLastAdd,
  shopsLastAddLoaded,
  shopsLastAdd,
}) => {
  useEffect(() => {
    loadproductsLastAdd();
    loadShopsLastAdd();
  }, []);

  return (
    <>
      {productsLastAddLoaded && shopsLastAddLoaded
        ? (
          <div className="home">
              <Helmet>
                <title>Home</title>
                <meta name="description" content="Page home" />
              </Helmet>
            <div className="home-list">
              <h2 className="list-title-product">Nouveaux produits</h2>
              <div className="list-product">
                {productsLastAdd.map((product) => (
                  <Link
                    key={product.id}
                    to={`/${cityName}/product/${product.id}`}
                  >
                    <ProductCard key={product.id} {...product} />
                  </Link>
                ))}
              </div>

              <h2 className="list-title-shop">Nouveaux shop</h2>
              <div className="list-shop">
                {shopsLastAdd.map((shop) => (
                  <Link
                    key={shop.id}
                    to={`/${cityName}/sellerprofil/${shop.id}`}
                  >
                    <ShopCard key={shop.id} {...shop} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (<Loader />)}
    </>
  );
};

Home.propTypes = {
  cityName: PropTypes.string.isRequired,
  loadproductsLastAdd: PropTypes.func.isRequired,
  productsLastAddLoaded: PropTypes.bool.isRequired,
  productsLastAdd: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  loadShopsLastAdd: PropTypes.func.isRequired,
  shopsLastAddLoaded: PropTypes.bool.isRequired,
  shopsLastAdd: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Home;
