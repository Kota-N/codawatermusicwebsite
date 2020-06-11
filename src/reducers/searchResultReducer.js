import { SET_SEARCH_RESULT } from '../actions/types';

const searchResultReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      return action.payload;
    default:
      return state;
  }
};

export default searchResultReducer;
