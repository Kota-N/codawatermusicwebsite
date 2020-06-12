import { FETCH_ITEMS, FETCH_INDEX } from './types';

export const fetchItems = pageNumber => dispatch => {
  fetch(`/api/items/music?page=${pageNumber}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_ITEMS,
        payload: data,
      })
    );
};

export const fetchIndex = () => dispatch => {
  fetch('/api/items/music/all')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_INDEX,
        payload: data.reverse(),
      })
    );
};
