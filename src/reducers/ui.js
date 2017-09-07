import { handleActions } from 'redux-actions';
import * as actions from 'consts/action-types';

const COLORS = ['#e30d40', '#0d75e3', '#e35f0d', '#3fe30d'];

const initialState = {
  theme: 0
};

export default handleActions({
  [actions.SWITCH_THEME]: (ui) =>
    Object.assign({}, ui, { theme: (ui.theme + 1) % COLORS.length })
}, initialState);

export const getColor = (state) => COLORS[state.ui.theme];