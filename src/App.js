import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import NavBar from './containers/navbar';
import CoinList from './containers/coin_list';
import CoinDetail from './containers/coin_detail';
import SearchBar from './containers/searchBar';
import CoinNews from './containers/coin_news';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <SearchBar/>
        <Switch>
          <Route exact path="/" component={CoinList}/>
          <Route path="/news" component={CoinNews}/>
          <Route path="/:symbol" component={CoinDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
