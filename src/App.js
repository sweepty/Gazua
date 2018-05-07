import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/navbar';
import CoinList from './containers/coin_list';
import CoinDetail from './containers/coin_detail';
import CoinNews from './containers/coin_news';
import KimP from './containers/kimpre';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={CoinList}/>
          <Route path="/news" component={CoinNews}/>
          <Route path="/kimp" component={KimP}/>
          <Route path="/:symbol" component={CoinDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
