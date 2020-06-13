import { FETCH_ITEMS, FETCH_INDEX } from './types';
import axios from 'axios';

export const fetchItems = pageNumber => dispatch => {
  axios.get(`/api/items/music?page=${pageNumber}`).then(res =>
    dispatch({
      type: FETCH_ITEMS,
      payload: res.data,
    })
  );
};

export const fetchIndex = () => dispatch => {
  axios.get('/api/items/music/all').then(res =>
    dispatch({
      type: FETCH_INDEX,
      payload: res.data.reverse(),
    })
  );
};
