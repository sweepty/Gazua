import React from 'react';
import _ from 'lodash';
import { fetchDetail, selectedPriod } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chart from './chart';

class CoinDetail extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      priod: 'day',
      limit: 30,
      market: 'USD'
    };
  }
  componentDidMount(){
    this.timer = setInterval(()=> 
      this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit), 1000)
  }
  setPriod = (e) => {
    this.setState({ priod: e.target.id },() => {
      // console.log(this.state.priod);
      this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit);
    });
  }
  setLimit = (e) => {
    this.setState({ limit: e.target.id },() => {
      this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit);
    });
  }
  setMarket= (e) => {
    this.setState({ market: e.target.id },() => {
      this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit);
    });
  }
  
  render() {
    const symbol = this.props.match.params.symbol;
    const dd = [];
    _.map(this.props.detail, pp => {
      dd.push({
        x: pp.time*1000,
        y: (pp.open + pp.close) / 2,
        // yHigh: pp.high,
        // yOpen: pp.open,
        // yClose: pp.close,
        // Low: pp.low,
      });
      return dd;
    });

    return (
      <div className="coin-detail">
        <div className="coin-name-and-logo">
          <img className="coin-detail-logo" src={`https://chasing-coins.com/api/v1/std/logo/${symbol}`}/>
          <h1>{symbol}</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <h3>Set Priod</h3>
              <div className="btn-group period" role="group" aria-label="Choice priod">
                <button type="button" id="minute" className="btn btn-secondary" onClick={this.setPriod}>MINUTE</button>
                <button type="button" id ="hour"className="btn btn-secondary" onClick={this.setPriod} >HOUR</button>
                <button type="button" id ="day" className="btn btn-secondary" onClick={this.setPriod}>DAY</button>
              </div>
            </div>
            <div className="col-4">
              <h3>Set Limit</h3>
                <div className="btn-group limit" role="group" aria-label="Choice limit">
                  <button type="button" id ="30" className="btn btn-secondary" onClick={this.setLimit}>30</button>
                  <button type="button" id ="100"className="btn btn-secondary" onClick={this.setLimit} >100</button>
                  <button type="button" id="200" className="btn btn-secondary" onClick={this.setLimit}>200</button>
                </div>
            </div>
            <div className="col-4">
              <h3>Set Market</h3>
                <div className="btn-group market" role="group" aria-label="Choice market">
                  <button type="button" id ="USD" className="btn btn-secondary" onClick={this.setMarket}>USD</button>
                  <button type="button" id ="EUR"className="btn btn-secondary" onClick={this.setMarket} >EUR</button>
                  <button type="button" id="KRW" className="btn btn-secondary" onClick={this.setMarket}>KRW</button>
                </div>
            </div>
          </div>
        </div>

        <h2>Latest {this.state.limit} {this.state.priod}s chart - {this.state.market}</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="chart">
                <Chart value={dd}/>
              </div>
            </div>
            <div className="col-8 coin-info">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">두번째</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">세번째</div>
              </div>
            </div>
          </div>
        </div>
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

