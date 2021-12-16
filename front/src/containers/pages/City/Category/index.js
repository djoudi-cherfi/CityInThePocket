import { connect } from 'react-redux';

import { categoryNameIdUrlSave, shopsByCategoryGet } from 'src/lib/actions/shopActions';

// on importe le composant de présentation
import Category from 'src/components/pages/City/Category';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  categoryNames: state.shops.categoryNames,
  shopsByCategoryLoaded: state.shops.shopsByCategoryLoaded,
  shopsByCategory: state.shops.shopsByCategory,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  HandleCategoryId: (categoryNameIdUrl) => {
    const action = categoryNameIdUrlSave(categoryNameIdUrl);
    dispatch(action);
  },

  loadShopsByCategory: () => {
    dispatch(shopsByCategoryGet());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Category);
