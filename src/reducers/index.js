import { combineReducers } from 'redux';
import CoinReducer from './coin_reducer';
import DetailReducer from './detail_reducer';

const rootReducer = combineReducers ({
  coin: CoinReducer,
  details: DetailReducer,
});

export default rootReducer;