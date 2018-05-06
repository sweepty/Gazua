# Gazua

암호화폐 시세 확인 웹페이지

<br/>

### 구성

####  기본 요구 사항

- [x] 코인 리스트 페이지: 코인들의 간단한 정보와 현재 가격
- [ ] 코인 상세 페이지: 코인의 상세 정보와 가격에 대한 상세 정보

<br/>

####  추가

- [x] 코인 뉴스 페이지

<br/>

<br/>

### Language & Framework

- React
- Redux
- Bootstrap
- React-vis

<br/>

<br/>

### API

Cryptocompare API : <https://www.cryptocompare.com/api/> 

Chasing-coins API: https://chasing-coins.com/api

<br/><br/>

### Error?

```
Failed to load https://chasing-coins.com/api/v1/top-coins/20: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access.
```

위와 같은 에러 발생 시 Chrome 확장자 도구  **Allow-Control-Allow-Origin: * 를 설치하여 해결**

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

<br/>

<br/>