import { FETCH_INDEX } from '../actions/types';

const initState = {
  allData: [],
};

const fetchIndex = (state = initState, action) => {
  switch (action.type) {
    case FETCH_INDEX:
      return {
        ...state,
        allData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchIndex;
