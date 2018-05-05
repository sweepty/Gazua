import { FETCH_DETAIL } from '../actions';

export default function(state = {
  loading: false,
  error: '',
  data: [] },action) {
  
  switch(action.type){
  case `${FETCH_DETAIL}_PENDING`:
    return {
      loading: true,
      error: '',
      data: [...state.data]
    };
  case `${FETCH_DETAIL}_FULFILLED`:
    
    return {
      loading: false,
      error: '',
      data: action.payload.data.Data
    };

  case `${FETCH_DETAIL}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: [...state.data]
    };
  default :
    return state;
  }
}