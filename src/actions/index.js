import axios from 'axios';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/';
export const FETCH_COIN = 'FETCH_COIN';

export function fetchCoin(coinName){//coinName
  const url = `${ROOT_URL}pricemultifull?fsyms=${coinName}&tsyms=USD`;
  const request = axios.get(url);

  return {
    type: FETCH_COIN,
    payload: request
  };
}
