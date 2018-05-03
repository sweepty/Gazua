import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Chart from './candle_chart';
   
class CoinDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      error: '',
      priod: '',
    };
  }
  componentDidMount(){
    this.props.fetchDetail(this.props.match.params.symbol);
    // this.renderDetail = this.renderDetail.bind(this);
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
    const { detail } = this.props;
    if (this.state.loading){
      return <div>loading....</div>
    }
    if (!detail){
      return <div>null임</div>
    }
    const coin_symbol = this.props.match.params.symbol;

    return(
      <div className="container-fluid">
        
        <div className="col-6"><img className='coin-detail-logo' src={`https://chasing-coins.com/api/v1/std/logo/${coin_symbol}`}/></div>
        <div className="col-6 mt-3"><h2>{coin_symbol}</h2></div>
        {/* <div className="col-12 mt-5 mb-3">{this.props.coin.price}</div> */}
        
        {/* <Chart/> */}
        {_.map(this.props.detail, item => (
          <div>{item.volumefrom}</div>
   
        ))}


      </div>

    );
  }
}

function mapStateToProps(state){
  return{
    detail: state.details.data,
    error: state.details.error,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchDetail }, dispatch);
}
export default connect( mapStateToProps, mapDispatchToProps )(CoinDetail);



