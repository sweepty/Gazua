import { FETCH_NEWS, EXCHANGE } from '../actions';

export default function(state = {
  loading: false,
  error: '',
  data: [],
  exchange: [],
},action) {
    
  switch(action.type){
  case `${FETCH_NEWS}_PENDING`:
    return {
      loading: true,
      error: '',
      data: [...state.data]
    };
  case `${FETCH_NEWS}_FULFILLED`:
    return {
      loading: false,
      error: '',
      data: action.payload.data.Data
    };
  case `${EXCHANGE}_FULFILLED`:
    return {
      loading: false,
      error: '',
      exchange: action.payload.data.quotes.USDKRW,
    };
  case `${FETCH_NEWS}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: [...state.data]
    };
  default :
    return state;
  }
}