import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class CoinList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      counter:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
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
      <div className="coin-list mt-3">
        { this.handleError() }
        <h2 className="coin-list-header mt-3 mb-3">USD Market</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>logo</th>
              <th>coin</th>
              <th>USD price</th>
              <th>시간당 변동률</th>
              <th>하루 변동률</th>
              <th>상세</th>
            </tr>
          </thead>
          <tbody>
            {this.props.coin.map((item) => {
              return(
                this.state.counter.map((i) => { //고치기
                  return(
                    <tr key={i}>
                      <td><img className="coin-logo" src={`https://chasing-coins.com/api/v1/std/logo/${item[i].symbol}`}/></td>
                      <td>{item[i].symbol}</td>
                      <td>$ {item[i].price}</td>
                      <td>{item[i].change.hour}%</td>
                      <td>{item[i].change.day}%</td>
                      <td><Link to={`/${item[i].symbol}`}><button type="button" className="btn btn-info">Info</button></Link></td>
                    </tr>
                  );
                })
              );
            })}
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