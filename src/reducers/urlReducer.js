import { CURRENT_MUSIC } from '../actions/types';

const urlReducer = (state = '', action) => {
  switch (action.type) {
    case CURRENT_MUSIC:
      return action.payload;
    default:
      return state;
  }
};

export default urlReducer;
