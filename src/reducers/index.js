import { combineReducers } from 'redux';
import CoinReducer from './coin_reducer';
import DetailReducer from './detail_reducer';
import NewsReducer from './news_reducer';
import SelectedReducer from './selected_reducer';

const rootReducer = combineReducers ({
  coin: CoinReducer,
  details: DetailReducer,
  news: NewsReducer,
  selected: SelectedReducer
});

export default rootReducer;