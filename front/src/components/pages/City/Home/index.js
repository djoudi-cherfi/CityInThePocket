// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// == Head html informations
import { Helmet } from 'react-helmet';

// == Loader animation
import Loader from 'src/components/templates/Loader/LoaderCircle';

// == Import
import ProductCard from 'src/components/templates/Cards/ProductCard';
import ShopCard from 'src/components/templates/Cards/ShopCard';

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
    // TODO!: faire un reset
    // TODO!: async 2 fetch
    loadproductsLastAdd();
    loadShopsLastAdd();
  }, [cityName]);

  return (
    <div className="home">
      {productsLastAddLoaded && shopsLastAddLoaded
        ? (
          <>
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
                    to={`/${cityName.slug}/product/${product.id}`}
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
                    to={`/${cityName.slug}/sellerprofil/${shop.id}`}
                  >
                    <ShopCard key={shop.id} {...shop} />
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (<Loader />)}
    </div>
  );
};

Home.propTypes = {
  cityName: PropTypes.object.isRequired,
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
