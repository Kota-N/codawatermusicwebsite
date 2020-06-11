import { SET_CARD_DATA } from '../actions/types';

const cardDataReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CARD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default cardDataReducer;
