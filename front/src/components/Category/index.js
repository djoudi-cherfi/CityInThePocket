// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import {
  Route,
  Redirect,
  Link,
  useParams,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { getCategoryBySlug } from 'src/utils';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

// == Import
import ShopCard from 'src/components/Cards/ShopCard';

import './category.scss';

// == Composant
const Category = ({
  cityName,
  HandleCategoryId,
  categoryNames,
  loadShopsByCategory,
  shopsByCategoryLoaded,
  shopsByCategory,
}) => {
  const { slug, city } = useParams();

  const category = getCategoryBySlug(categoryNames, slug);

  let redirect = false;

  if (category === undefined) {
    redirect = true;
  }
  else {
    HandleCategoryId(category.id);
  }

  useEffect(() => {
    loadShopsByCategory();
  }, [slug]);

  return (
    <>
      {redirect && (<Redirect to={`/${cityName}/category/`} />)}
      {city !== cityName && (<Redirect to={`/${cityName}/category/`} />)}
      {shopsByCategoryLoaded ? (
        <div className="category">
          <Helmet>
            <title>{slug}</title>
            <meta name="description" content={`Page ${slug}`} />
          </Helmet>

          <div className="category-container">
            <Route exact path={`/${cityName}/category/:slug`}>
              <div className="category-shop">
                {shopsByCategory.map((shop) => (
                  <Link
                    key={shop.id}
                    className="category-shop-link"
                    to={`/${cityName}/sellerprofil/${shop.id}`}
                  >
                    <ShopCard key={shop.id} {...shop} />
                  </Link>
                ))}
              </div>
            </Route>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

Category.propTypes = {
  cityName: PropTypes.string.isRequired,
  HandleCategoryId: PropTypes.func.isRequired,
  categoryNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loadShopsByCategory: PropTypes.func.isRequired,
  shopsByCategoryLoaded: PropTypes.bool.isRequired,
  shopsByCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Category;
