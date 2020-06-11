import { NEXT_PAGE, PREV_PAGE } from '../actions/types';

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case PREV_PAGE:
      return state - 1;
    default:
      return state;
  }
};

export default pageReducer;
