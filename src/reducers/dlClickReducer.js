import { DL_CLICK, DL_EXIT } from '../actions/types';

const initState = { dlPopup: false, dlUrl: '' };

const dlClickReducer = (state = initState, action) => {
  switch (action.type) {
    case DL_CLICK:
      return { dlPopup: true, dlUrl: action.payload };
    case DL_EXIT:
      return { dlPopup: false, dlUrl: '' };
    default:
      return state;
  }
};

export default dlClickReducer;
