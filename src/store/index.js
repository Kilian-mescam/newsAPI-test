import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import newsMiddlewares from '../middlewares/newsMiddlewares';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    newsMiddlewares,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
