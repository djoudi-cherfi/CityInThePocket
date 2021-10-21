import slugify from 'slugify';

// JSDoc : https://jsdoc.app/
/**
 * Compute the slug for a given category name
 * @param {string} categoryName The categoryName to compute slug
 * @returns the string for the categoryName
 */

export const slugifyCategoryName = (categoryName) => {
  const slug = slugify(categoryName, {
    // On remplace les majuscules par des minuscules
    lower: true,
  });

  return slug;
};

// trouver le categorie qui a le slug indiqué
export const getCategoryBySlug = (categories, slug) => {
  // find
  const found = categories.find(
    (category) => slugifyCategoryName(category.label) === slug,
  );

  return found;
};
