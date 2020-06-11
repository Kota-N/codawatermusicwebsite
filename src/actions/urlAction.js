import { CURRENT_MUSIC } from './types';

export const currentMusic = (url) => {
  return {
    type: CURRENT_MUSIC,
    payload: url,
  };
};
