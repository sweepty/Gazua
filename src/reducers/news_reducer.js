import { FETCH_NEWS } from '../actions';

export default function(state = {
  loading: false,
  error: '',
  data: [] },action) {
    
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
      data: [action.payload.data,...state.data]
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