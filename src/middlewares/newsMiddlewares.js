import axios from 'axios';
import { FETCH_NEWS, saveNews } from '../actions/news';

const newsMiddlewares = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_NEWS:

      const { searchInput } = store.getState().filters;
      const apiKey  = '77963126be9b4ebb83e8ed8a6aeb5481';

      axios.get(`https://newsapi.org/v2/everything?q=apple&apiKey=${apiKey}`)
        .then((response) => {
          // console.log(response);

          // aller placer response.data dans le state
          // => on dispatch une action qui sera traitée par le reducer
          const newAction = saveNews(response.data.articles);
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default newsMiddlewares;
