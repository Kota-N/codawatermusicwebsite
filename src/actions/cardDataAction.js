import { SET_CARD_DATA } from './types';

export const setCardData = item => {
  return {
    type: SET_CARD_DATA,
    payload: item,
  };
};
