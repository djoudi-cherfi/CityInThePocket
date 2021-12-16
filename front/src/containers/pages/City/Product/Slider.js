import { connect } from 'react-redux';

import { currentSlideCount, toggleSlideProductClosed } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import Slider from 'src/components/pages/City/Product/Slider';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  slidesData: state.products.slidesData,
  currentSlide: state.main.currentSlide,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleSlide: (value) => {
    const action = currentSlideCount(value);
    dispatch(action);
  },

  closeSlide: () => {
    dispatch(toggleSlideProductClosed());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Slider);
