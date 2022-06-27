import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from '../thunk/thunk';

 const configureStore = (preloadedState = {}) => createStore(rootReducer,preloadedState,applyMiddleware(thunk,logger))
  // composeWithDevTools(applyMiddleware(thunk, logger))  // );
  export default configureStore;