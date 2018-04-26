import axios from 'axios';

const ROOT_URL = `https://www.cryptocompare.com/api/`;

export const FETCH_COIN = "FETCH_COIN";

export function fetchCoin(CoinName){
  const url = `${ROOT_URL}price?fsym=USD&tsyms=BTC,ADA,EUR`; //ETH
  
  const request = axios.get(url);

  return {
    type: FETCH_COIN,
    payload: request
  };
}