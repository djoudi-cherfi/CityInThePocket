# Redux

# Installation

`yarn add redux react-redux redux-devtools-extension`

## Mise en place du store

- créer un reducer : `src/reducers/nameForTheReducer.js`
  
``` js 
const initialState = {
  // ici le state initial
};

function nameForTheReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default nameForTheReducer;

```

- créer le store : `src/store/index.js`

```js
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from 'src/reducers/reducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;

```

- utilisation du composant Provider pour que nos composants puissent accéder au store. Par exemple dans _src/index.js_ :

```js
import { Provider } from 'react-redux';
import store from 'src/store';

[...]

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

[...]
```

- on peut visualiser le store avec Redux dev tool

# Avoir plusieurs reducers (combineReducers)

Avoir plusieurs reducers permet de ranger les données dans des "tiroirs", de découper le state en plusieurs morceaux, par exemple un reducer pour les données des recettes de cuisine, un reducer pour les données de l'utilisateur.

- Créer un reducer principal qui va combiner les autres reducers => src/reducers/index.js

``` javascript
import { combineReducers } from 'redux';

// on importe tous les reducers
import nomReducer1 from './reducer1';
import nomReducer2 from './reducer2';
// etc

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  nomDuTiroir1: nomReducer1,
  nomDuTiroir2: nomReducer2,
  // etc
});

export default rootReducer;

```

- l'utiliser dans le store : on importe le reducer qui combine les autres `import reducer from 'src/reducers';` et c'est celui-ci qu'on utilise dans _createStore_

- adapter les containers si besoin : par exemple si on utilisait `state.info`, il faut corriger pour utiliser `state.nomDuTiroir.info`

# Connexion d'un composant au store

## Mise en place d'un composant container

- créer un fichier dans `src/containers` (utiliser la même structure de dossiers que dans `src/components`) : assistant pour le composant, qui gérera les interactions avec le store

``` js
import { connect } from 'react-redux';

// on importe le composant de présentation
import LeComposant from 'src/components/........../LeComposant';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LeComposant);


```

- utiliser le container à la place du composant de présentation (par exemple remplacer _components_ par _containers_ dans le chemin de l'import). Si on fournissait au composant de présentation des props qui sont désormais gérées par le container, les supprimer en remplaçant par le container.

- pour chaque prop ou info nécessaire du composant de présentation, se poser la question "est-ce que cette prop/info est liée au state ?"
  - oui, lecture d'une information => _mapStateToProps_
  - oui, modification d'une information => _mapDispatchToProps_
  - non => on ne gère pas cette prop/info dans le container
  
et ajouter si pas encore fait les props nécessaires au composant de présentation pour que le container puisse lui injecter les infos ou les callbacks.

## mapStateToProps : les props qui lisent une valeur du state

- dans _mapStateToProps_, indiquer le nom de la prop à remplir et la propriété du state qui correspond, par exemple :

``` js
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  direction: state.direction,
});
```

=> le container injecte la valeur de `state.direction` dans la prop `direction` du composant de présentation

## mapDispatchToProps : les props qui doivent envoyer une action au store (traitée par un reducer ou par un middleware)

- si on n'a pas encore de fichier pour les actions : créer un fichier `src/lib/actions/nameForTheActions.js`

- si l'action dont on a besoin (intention) n'existe pas encore : définir le _action type_ et le _action creator_ pour cette action :

 ```javascript
 // === action types
 export const DO_SOMETHING = 'DO_SOMETHING';
 // === action creators
 export const doSomething = (/* newValue */) => ({
   type: DO_SOMETHING,
   /* value: newValue, */
 });
```

- ajouter le traitement de cette action dans un reducer (= quel est l'impact de cette action sur le state) et/ou dans un middleware

```javascript
import { DO_SOMETHING } from 'src/lib/actions/nameForTheActions';
[...]
switch (action.type) {
  case DO_SOMETHING:
    // on retourne un nouveau state
    return {
      // en déversant les informations du state actuel
      ...state,
      // et en appliquant des modifications
      propriété_à_modifier_1: 'valeur',
      propriété_à_modifier_2: action.newValue,
    };
  [...]
}
```

- dans _mapDispatchToProps_, indiquer le nom de la prop à remplir et la fonction correspondante qui utilise `dispatch` pour envoyer une action au store

```javascript
import { doSomething } from 'src/lib/actions/nameForTheActions';
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValue: (/* param1 */) => {
    dispatch(doSomething(/* param 1 */));
  },
});
```

# Middleware

## Mise en place d'un middleware

- créer un fichier `src/middlewares/nomDuMiddleware.js`

``` js
const leMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default leMiddleware;
```



- utiliser le middleware dans le store (créer ou modifier le fichier _src/store/index.js_) :

``` js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import leMiddleware from 'src/middlewares/leMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    leMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  leReducer,
  // enhancers
  enhancers,
);

export default store;
```

## Réagir à une action dans le middleware

Je veux par exemple envoyer une requête vers une API quand l'action est LOGIN.

```js
import { LOGIN } from 'src/lib/actions/chat';

[...]

switch (action.type) {
  case LOGIN:
    console.log('on va faire l\'appel Axios');
    break;

  [...]

}
```

## Prendre en compte le résultat d'une requête asynchrone dans le middleware

Par exemple, j'ai envoyé une requête vers une API avec Axios, dans 'then' je voudrais fournir une information au store.

- créer une action
- traiter cette action dans le reducer (ajouter l'élément au state initial si ce n'était pas encore fait)
- envoyer cette action au store (dispatch)

```js
  .then((response) => {
    console.log('on a reçu la réponse : ', response);
    store.dispatch(nomActionCreator(response.xxxxxxx.yyyyyy));
  })
```
