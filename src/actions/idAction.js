import { GET_ID } from './types';

export const getId = currentId => {
  return {
    type: GET_ID,
    payload: currentId,
  };
};
