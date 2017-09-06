import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import * as actions from 'consts/action-types';

const COLORS = ['#e30d40', '#0d75e3', '#e35f0d', '#3fe30d'];

const initialState = Immutable({
  requests: {},
  theme: 0
});

export default handleActions({
  [actions.SWITCH_THEME]: (ui) => ui.update('theme', curr => (curr + 1) % COLORS.length),
  [actions.START_NETWORK]: (ui, { payload = 'global' }) => ui.updateIn(['requests', payload], counter => (counter || 0) + 1),
  [actions.END_NETWORK]: (ui, { payload = 'global' }) => ui.updateIn(['requests', payload], counter => (counter || 0) - 1)
}, initialState);

export const getRequests = (state, label = 'global') => state.ui.getIn(['requests', label]) || 0;
export const getColor = (state) => COLORS[state.ui.theme];