import { FETCH_DETAIL, GET_NOW  } from '../actions';

export default function(state = {
  loading: false,
  error: '',
  detail:[],
  now:[],
},action) {
  
  switch(action.type){
  // case `${FETCH_DETAIL}_PENDING`:
  //   return {
  //     loading: true,
  //     error: '',
  //     detail: [...state.detail]
  //   };
  case `${FETCH_DETAIL}_FULFILLED`:
    return {
      loading: false,
      error: '',
      detail: action.payload.data.Data,
    };
  case `${GET_NOW}_FULFILLED`:
    return {
      loading: false,
      error: '',
      now: action.payload.data,
    };
  // case `${FETCH_DETAIL}_REJECTED`:
  //   return {
  //     loading: false,
  //     error: action.payload,
  //     detail: [...state.detail]
  //   };
    
  default:
    return state;
  }
}