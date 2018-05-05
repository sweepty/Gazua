import axios from 'axios';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/';

export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_DETAIL = 'FETCH_DETAIL';
export const PRIOD_SELECTED = 'PRIOD_SELECTED';
export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchCoin(){
  const url = 'https://chasing-coins.com/api/v1/top-coins/20';
  const request = axios.get(url);

  return {
    type: FETCH_COIN,
    payload: request
  };
}

export function fetchDetail(coinName, market, priod, limit){//coinName
  const url_detail = `${ROOT_URL}histo${priod}?fsym=${coinName}&tsym=${market}&limit=${limit}`;
  const request = axios.get(url_detail);
  return {
    type: FETCH_DETAIL,
    payload: request
  };
}

export function fetchNews(){
  const url_news = `${ROOT_URL}v2/news/?lang=EN`;//latest news articles
  const request = axios.get(url_news);

  return {
    type: FETCH_NEWS,
    payload: request
  };
}
