import { FETCH_ITEMS } from '../actions/types';

const initState = {
  items: [],
};

const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
