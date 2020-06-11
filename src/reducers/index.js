import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import pageReducer from './pageReducer';
import fetchIndex from './fetchIndex';
import urlReducer from './urlReducer';
import idReducer from './idReducer';
import isPlayingReducer from './isPlayingReducer';
import cardClickReducer from './cardClickReducer';
import cardDataReducer from './cardDataReducer';
import dlClickReducer from './dlClickReducer';
import searchResultReducer from './searchResultReducer';

const rootReducer = combineReducers({
  data: itemsReducer,
  page: pageReducer,
  index: fetchIndex,
  url: urlReducer,
  id: idReducer,
  isPlaying: isPlayingReducer,
  cardClick: cardClickReducer,
  cardData: cardDataReducer,
  dlClick: dlClickReducer,
  searchResult: searchResultReducer,
});

export default rootReducer;
