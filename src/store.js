import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'reducers/root';
import ReduxThunk from 'redux-thunk'
import multi from 'middleware/multi';
import throttle from 'middleware/throttle';
import log from 'middleware/log';
import api from 'middleware/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(
  ReduxThunk,
  multi,
  throttle,
  log,
  api
)));

window.store = store;

export default store;