import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class CoinList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      error: null,
    };
    
  }
  componentDidMount(){
    this.props.fetchCoin();
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
      <div className="table-responsive coin-list mt-3">
        { this.handleError() }
        <h2 className="coin-list-header mt-3 mb-3">USD Market</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>logo</th>
              <th>coin</th>
              <th>USD price</th>
              <th>1 hour</th>
              <th>day</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
          {_.map(this.props.coin, (item,index) => (
            <tr key={index}>
              <td>{index}</td>
              <td><img className="coin-logo" src={`https://chasing-coins.com/api/v1/std/logo/${item.symbol}`}/></td>
              <td>{item.symbol}</td>
              <td>${item.price}</td>
              <td>{item.change.hour}%</td>
              <td>{item.change.day}%</td>
              <td><Link to={`/${item.symbol}`}><button type="button" className="btn btn-info">Info</button></Link></td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
//container component -> presentation component 
function mapStateToProps(state) {
  return {
    coin: state.coin.data,
    error: state.coin.error
  };
}
//presentation component -> container component
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCoin }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CoinList);