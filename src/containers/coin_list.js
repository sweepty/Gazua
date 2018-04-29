import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions/index';
import { bindActionCreators } from 'redux';
class coinList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      currencies: ['BTC','ETH','LTC','XRP','XMR','QTUM','IOT','DASH'],
      error: null,
    };
  }

  renderCoin({DISPLAY,RAW}){
    return(
      <tr key = {DISPLAY.ETH.USD.LASTMARKET}>
        <td>{RAW.ETH.USD.FROMSYMBOL}</td>
        <td>{DISPLAY.ETH.USD.TOTALVOLUME24H}</td>
        <td>{DISPLAY.ETH.USD.PRICE}</td>
        <td>{DISPLAY.ETH.USD.CHANGEPCTDAY}</td>
        <td>{DISPLAY.ETH.USD.HIGHDAY}</td>
        <td>{DISPLAY.ETH.USD.LOWDAY}</td>
      </tr>

    );
  }

  componentDidMount(){
    this.props.fetchCoin(this.state.currencies);
  }

  handleError(){
    if (this.props.error){
      return(
        <div className="alert alert-danger" role="alert">
          {this.props.error.message}
        </div>
      );
    }
  }
  render(){
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return(
      <div className="coin-list mt-3">
        { this.handleError() }
        <table className="table table-hover">
          <thead>
            <tr>
              <th>코인 이름</th>
              <th>시가총액</th>
              <th>USD 시세</th>
              <th>변동률</th>
              <th>최고가</th>
              <th>최저가</th>
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
function mapStateToProps(state) {
  return {
    coin: state.coin.data,
    error: state.coin.error
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCoin }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(coinList);