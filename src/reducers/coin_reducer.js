import { FETCH_COIN, GET_INFO} from '../actions';

export default function(state = {
  loading: false,
  error: '',
  data: [],
  info: [],
  krw: [],
  price: [],
  
},action) {
    
  switch(action.type){
  case `${FETCH_COIN}_PENDING`:
    return {
      loading: true,
      error: '',
      data: [...state.data],
    };
  case `${FETCH_COIN}_FULFILLED`: {
    return {
      loading: false,
      error: '',
      data: action.payload.data,
    };
  }
  case `${GET_INFO}_FULFILLED`:
    return{
      loading: false,
      error: '',
      info: action.payload.data.Data[0].CoinInfo,
    };
  case `${FETCH_COIN}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: [...state.data]
    };
  default :
    return state;
  }
}