import { DL_CLICK, DL_EXIT } from './types';

export const dlClick = dlUrl => {
  return {
    type: DL_CLICK,
    payload: dlUrl,
  };
};

export const dlExit = () => {
  return {
    type: DL_EXIT,
  };
};
