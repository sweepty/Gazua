import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinList from './containers/coin_list';
import SearchBar from './containers/searchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gazua!</h1>
        </header>
        <div>
          <SearchBar/>
          <CoinList/>
        </div>
      </div>
    );
  }
}

export default App;
