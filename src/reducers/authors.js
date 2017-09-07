import { handleActions } from 'redux-actions';
import * as actions from 'consts/action-types';

const initialState = [];

export default handleActions({
  [actions.SET_AUTHORS]: (authors, { payload }) => payload
}, initialState);