import { connect } from 'react-redux';
// on importe le composant de présentation
import Filters from 'src/components/Filters';

import {
  updateSearchValue,
  updateDatedFrom,
  updateDatedTo,
  updateLanguage,
  updateSortBy,
  manageSubmit,
} from '../../actions/filters';

import { fetchNews } from '../../actions/news';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  search: state.filters.searchInput,
  endDate: state.filters.endDate,
  startDate: state.filters.startDate,
  languageValue: state.filters.languageValue,
  sortByValue: state.filters.sortByValue,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateSearchValue: (value) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateSearchValue(value);
    dispatch(action);
  },
  updateDatedFrom: (datedFromValue) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateDatedFrom(datedFromValue);
    dispatch(action);
  },
  updateDatedTo: (datedToValue) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateDatedTo(datedToValue);
    dispatch(action);
  },
  updateLanguage: (languageValue) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateLanguage(languageValue);
    dispatch(action);
  },
  updateSortBy: (sortByValue) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateSortBy(sortByValue);
    dispatch(action);
  },
  manageSubmit: () => {
    dispatch(manageSubmit());
  },
  loadNews: () => {
    dispatch(fetchNews());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
