import axios from 'axios';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/';
export const FETCH_COIN = 'FETCH_COIN';

export function fetchCoin(coinName){//coinName
  // const url = `${ROOT_URL}price?fsym=${coinName}&tsyms=BTC,USD,EUR`; //원래것
  // const url = `${ROOT_URL}top/volumes?tsym=USD&limit=10`;
  const url = `${ROOT_URL}pricemultifull?fsyms=${coinName}&tsyms=USD`;
  const request = axios.get(url);

  return {
    type: FETCH_COIN,
    payload: request
  };
}
