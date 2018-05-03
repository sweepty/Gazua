import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CoinList from './containers/coin_list';
import CoinDetail from './containers/coin_detail';
import SearchBar from './containers/searchBar';
import CoinNews from './containers/coin_news';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gazua!</h1>
        </header>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <button className="btn btn-outline-success" type="button">Main button</button>
            <button className="btn btn-sm btn-outline-secondary" type="button"><Link to='/news'>NEWS</Link></button>
          </form>
        </nav>
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
