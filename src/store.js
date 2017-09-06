import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'reducers/root';
import ReduxThunk from 'redux-thunk'
import multi from 'middleware/multi';
import throttle from 'middleware/throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(
  ReduxThunk,
  multi,
  throttle
)));

window.store = store;

export default store;