import { TOGGLE_PLAY_STATE, PLAYED, PAUSED } from '../actions/types';

const isPlayingReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_PLAY_STATE:
      return !state;
    case PLAYED:
      return true;
    case PAUSED:
      return false;
    default:
      return state;
  }
};

export default isPlayingReducer;
