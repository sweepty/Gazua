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

export function fetchDetail(coinName, priod){//coinName
  const url_detail = `${ROOT_URL}histo${priod}?fsym=${coinName}&tsym=USD&limit=30`;
  // const url_detail = `${ROOT_URL}histoday?fsym=BTC&tsym=USD&limit=30`;
  const request = axios.get(url_detail);
  // console.log("In FetchDetail", request);
  return {
    type: FETCH_DETAIL,
    payload: request
  };
}

export function selectedPriod(ddhhmm){
  return{
    type: 'PRIOD_SELECTED',
    payload: ddhhmm
  };
  console.log(ddhhmm, "period 확인");
}

export function fetchNews(){
  const url_news = `${ROOT_URL}v2/news/?lang=EN`;//latest news articles
  const request = axios.get(url_news);

  return {
    type: FETCH_NEWS,
    payload: request
  };
}
