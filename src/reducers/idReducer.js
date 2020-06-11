import { GET_ID } from '../actions/types';

const initState = ['', ''];

const idReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ID:
      return state.filter((x, i) => i === 1).concat(action.payload);
    default:
      return state;
  }
};

export default idReducer;
