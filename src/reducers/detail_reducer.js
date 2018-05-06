import { FETCH_DETAIL } from '../actions';

export default function(state = {
  loading: false,
  error: '',
  detail: [],
},action) {
  
  switch(action.type){
  case `${FETCH_DETAIL}_PENDING`:
    return {
      loading: true,
      error: '',
      detail: [...state.detail]
    };
  case `${FETCH_DETAIL}_FULFILLED`:
    return {
      loading: false,
      error: '',
      detail: action.payload.data.Data,
    };

  case `${FETCH_DETAIL}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      detail: [...state.detail]
    };
    
  default :
    return state;
  }
}