import { connect } from 'react-redux';

import { cityNameSave } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import City from 'src/components/City';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cities: state.main.cities,
  cityName: state.main.cityName,
  cityNameLoaded: state.main.cityNameLoaded,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  HandleCityNameUrl: (value) => {
    const action = cityNameSave(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(City);
