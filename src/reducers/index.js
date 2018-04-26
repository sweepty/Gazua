import { CombineReducers, combineReducers } from 'redux';
import CoinReducer from './coin_reducer';

const rootReducer = combineReducers ({
  coin: CoinReducer,
});

export default rootReducer;