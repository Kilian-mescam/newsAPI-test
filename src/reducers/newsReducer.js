import { SAVE_NEWS } from 'src/actions/news';

const initialState = {
  newsList: [],
};

function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_NEWS:
      return {
        ...state,
        newsList: action.news,
      };

    default:
      return state;
  }
}

export default newsReducer;
