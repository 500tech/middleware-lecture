import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import * as actions from 'consts/action-types';

const initialState = Immutable({});

export default handleActions({
  [actions.SET_BOOKS]: (books, { payload }) => books.merge(Immutable(payload))
}, initialState);