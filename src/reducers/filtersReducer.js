import { UPDATE_SEARCH_VALUE } from 'src/actions/filters';

const initialState = {
  searchInput: '',
  textInput: null,
};

function filtersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchInput: action.value,
      };

    default:
      return state;
  }
}

export default filtersReducer;
