import { combineReducers } from 'redux';

// on importe tous les reducers
import newsReducer from './newsReducer';
import filtersReducer from './filtersReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  // on crée un tiroir qui s'appelle recipes, et c'est recipesReducer qui
  // va gérer les données dans ce tiroir
  news: newsReducer,
  filters: filtersReducer,
});

export default rootReducer;
