import { connect } from 'react-redux';
// on importe le composant de présentation
import Filters from 'src/components/Filters';

import { updateSearchValue, manageSubmit } from '../../actions/filters';

import { fetchNews } from '../../actions/news';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  search: state.filters.searchInput,
  endDate: state.filters.endDate,
  startDate: state.filters.startDate,
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
  updateDatedFrom: (value) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateDatedFrom(value);
    dispatch(action);
  },
  updateDatedTo: (value) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateDatedTo(value);
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
