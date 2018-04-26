import React, { Component } from 'react';
import { connect } from 'react-redux';

class coinList extends Component {
  renderCoin({CoinName,list}){
    return(
      <tr key ={data.id}>
        <td>{CoinName}</td>
        <td>{list[0].BTC}</td>
        <td>{list[0].USD}</td>
        <td>{list[0].EUR}</td>
      </tr>
    );
  };
  render(){
    return(
      <div className="weather-list mt-3">
        {this.handleError()}
        <table className="table table-hover">
          <thead>
            <tr>
              <th>CoinName</th>
              <th>BTC</th>
              <th>USD</th>
              <th>EUR</th>
            </tr>
          </thead>
          <tbody>
            {this.props.coin.map(this.renderCoin)}
          </tbody>
        </table>
      </div>
    );
  }
}