import * as actions from 'consts/action-types';

export const switchTheme = () => ({
  type: actions.SWITCH_THEME,
  meta: {
    throttle: 1000,
    analytics: 'Theme Change'
  }
});

export const startNetwork = (payload = 'global') => ({
  type: actions.START_NETWORK,
  payload
});

export const endNetwork = (payload = 'global') => ({
  type: actions.END_NETWORK,
  payload
});