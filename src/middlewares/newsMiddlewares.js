import axios from 'axios';
import { FETCH_NEWS, saveNews } from '../actions/news';
import { BASE_URL } from '../utils';

const newsMiddlewares = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_NEWS:

      const { searchInput } = store.getState().filters;
      const { endDate } = store.getState().filters;
      const { startDate } = store.getState().filters;
      const { languageValue } = store.getState().filters;
      const { sortByValue } = store.getState().filters;

      console.log(searchInput);
      let url = `${BASE_URL}?q=${searchInput}`;
      const apiKeyURL  = '&apiKey=77963126be9b4ebb83e8ed8a6aeb5481';
      const startDateURL = `&from=${startDate}`;
      const endDateURL = `&to=${endDate}`;
      const langURL = `&language=${languageValue}`;
      const sortByURL = `&sortBy=${sortByValue}`;

      console.log(endDate);
      url += startDateURL;
      url += endDateURL;
      url += langURL;
      url += sortByURL;
      url += apiKeyURL;

      console.log(url);
      axios.get(url)

        .then((response) => {
          console.log(response.data.articles);

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
