import { PRIOD_SELECTED } from '../actions';

export default function(
  state = {selected: '' },action) {
  
  switch(action.type){
  case `${PRIOD_SELECTED}_FULFILLED`:
    return action.payload;

  default :
    return state;
  }
}