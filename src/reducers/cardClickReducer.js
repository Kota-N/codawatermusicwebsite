import { TOGGLE_CARD_CLICK } from '../actions/types';

const cardClickReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CARD_CLICK:
      return !state;
    default:
      return state;
  }
};

export default cardClickReducer;
