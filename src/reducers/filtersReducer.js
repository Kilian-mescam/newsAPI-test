import {
  UPDATE_SEARCH_VALUE,
  UPDATE_DATED_FROM,
  UPDATE_DATED_TO,
  UPDATE_LANGUAGE,
  UPDATE_SORT_BY,
} from 'src/actions/filters';

// ici sont placés mes initial state dont je vais me servir lors de la recherche et du tri

const initialState = {
  searchInput: '',
  startDate: '',
  endDate: '',
  languageValue: '',
  sortByValue: '',
};

function filtersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchInput: action.value,
      };
    case UPDATE_SORT_BY:
      return {
        ...state,
        sortByValue: action.sortByValue,
      };
    case UPDATE_DATED_FROM:
      return {
        ...state,
        startDate: action.datedFromValue,
      };
    case UPDATE_DATED_TO:
      return {
        ...state,
        endDate: action.datedToValue,
      };
    case UPDATE_LANGUAGE:
      return {
        ...state,
        languageValue: action.languageValue,
      };

    default:
      return state;
  }
}

export default filtersReducer;
