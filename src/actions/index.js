import axios from 'axios';
import { ROOT_URL, SECOND_URL, EXCHANGE_RATE_URL } from '../API/base-URL';

export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_DETAIL = 'FETCH_DETAIL';
export const GET_INFO = 'GET_INFO';
export const FETCH_NEWS = 'FETCH_NEWS';
export const GET_NOW = 'GET_NOW';
export const EXCHANGE = 'EXCHANGE';

export function fetchCoin(){
  const url = `${SECOND_URL}top-coins/20`;
  const request = axios.get(url);

  return {
    type: FETCH_COIN,
    payload: request
  };
}

export function fetchDetail(coinName, market, priod, limit){
  const url_detail = `${ROOT_URL}histo${priod}?fsym=${coinName}&tsym=${market}&limit=${limit}`;
  const request = axios.get(url_detail);
  return {
    type: FETCH_DETAIL,
    payload: request
  };
}
export function getInfo(coinName) {
  const url_info = `${ROOT_URL}coin/generalinfo?fsyms=${coinName}&tsym=USD`;
  const request = axios.get(url_info);
  return {
    type: GET_INFO,
    payload: request
  };
  
}
export function getNow(){
  const url = `${ROOT_URL}pricemulti?fsyms=BTC,ETH,XRP,BCH,EOS,LTC,ADA,XLM,MIOTA,TRX,NEO,DASH,XMR,XEM,VEN,ETC,USDT,QTUM,OMG,ICX&tsyms=USD,KRW`;
  const request = axios.get(url);
  return {
    type: GET_NOW,
    payload: request
  };
}
export function fetchNews(){
  const url_news = `${ROOT_URL}v2/news/?lang=EN&`;
  const request = axios.get(url_news);

  return {
    type: FETCH_NEWS,
    payload: request
  };
}

export function exchanger(){
  const url = EXCHANGE_RATE_URL;
  const request = axios.get(url);
  return {
    type: EXCHANGE,
    payload: request
  };
}

