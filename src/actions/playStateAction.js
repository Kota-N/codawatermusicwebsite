import { TOGGLE_PLAY_STATE, PLAYED, PAUSED } from './types';

export const togglePlayState = () => {
  return {
    type: TOGGLE_PLAY_STATE,
  };
};

export const played = () => {
  return {
    type: PLAYED,
  };
};

export const paused = () => {
  return {
    type: PAUSED,
  };
};
