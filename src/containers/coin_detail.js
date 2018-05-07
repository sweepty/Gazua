import React from 'react';
import _ from 'lodash';
import { fetchDetail, getInfo } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chart from './chart';
import moment from 'moment';
class CoinDetail extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      priod: 'minute',
      limit: 30,
      market: 'USD',
      mark: '$',
    };
  }
  componentDidMount(){
    this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit);
    this.props.getInfo(this.props.match.params.symbol);
    this.timer = setInterval(()=> 
      this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit), 60000)
      
  }
  setPriod = (e) => {
    this.setState({ priod: e.target.id },() => {
      this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit);
    });
  }
  setLimit = (e) => {
    this.setState({ limit: e.target.id },() => {
      this.props.fetchDetail(this.props.match.params.symbol, this.state.market, this.state.priod, this.state.limit);
    });
  }
  setMarket = (e) => {
    this.setState({ market: e.target.id },() => {
      
      switch(this.state.market){
        case 'USD':
          this.setState({mark: '$'});
          break;
        case 'EUR':
          this.setState({mark: '€'});
          break;
        case 'KRW':
          this.setState({mark: '₩'});
          break;
      }
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
        // yLow: pp.low,
      });
      return dd;
    });
    if(!this.props.detail || !this.props.info){
      return null;
    }

    return (

      <div className="coin-detail">
        <div className="coin-name-and-logo">
          <img className="coin-detail-logo" src={`https://chasing-coins.com/api/v1/std/logo/${symbol}`}/>
          <h1>{symbol} - {this.props.info.FullName} </h1>
        </div>
        <div className="container-fluid CustomBtn">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-md-12">
              <h3>Set Priod</h3>
              <h2 className="setview">{this.state.priod}</h2>
              <div className="btn-group period" role="group" aria-label="Choice priod">
                <button type="button" id="minute" className="btn btn-secondary" onClick={this.setPriod}>MINUTE</button>
                <button type="button" id ="hour"className="btn btn-secondary" onClick={this.setPriod} >HOUR</button>
                <button type="button" id ="day" className="btn btn-secondary" onClick={this.setPriod}>DAY</button>
              </div>
              
            </div>
            <div className="col-lg-4 col-sm-4 col-md-12">
              <h3>Set Limit</h3>
              <h2 className="setview">{this.state.limit}</h2>
              <div className="btn-group limit" role="group" aria-label="Choice limit">
                <button type="button" id ="7" className="btn btn-secondary" onClick={this.setLimit}>7</button>
                <button type="button" id ="24" className="btn btn-secondary" onClick={this.setLimit}>24</button>
                <button type="button" id ="30" className="btn btn-secondary" onClick={this.setLimit}>30</button>
                <button type="button" id ="60" className="btn btn-secondary" onClick={this.setLimit}>60</button>
                <button type="button" id ="100"className="btn btn-secondary" onClick={this.setLimit} >100</button>
                <button type="button" id ="150"className="btn btn-secondary" onClick={this.setLimit} >150</button>
                <button type="button" id="200" className="btn btn-secondary" onClick={this.setLimit}>200</button>
              </div>
              
            </div>
            <div className="col-lg-4 col-sm-4 col-md-12">
              <h3>Set Market</h3>
              <h2 className="setview">{this.state.market}</h2>
              <div className="btn-group market" role="group" aria-label="Choice market">
                <button type="button" id ="USD" className="btn btn-secondary" onClick={this.setMarket}>USD</button>
                <button type="button" id ="EUR"className="btn btn-secondary" onClick={this.setMarket} >EUR</button>
                <button type="button" id="KRW" className="btn btn-secondary" onClick={this.setMarket}>KRW</button>
              </div>
              
            </div>
          </div>
        </div>

        <h1 id="clicked-result">Latest {this.state.limit} {this.state.priod}s chart - {this.state.market} {this.state.mark}</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="chart">
                <Chart value={dd} market={this.state.market}/>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 col-md-12" id="coin-info">
              <h2>{this.props.info.FullName} Info</h2>
              <table className="table coin-detail-info-table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Symbol</th>
                    <th>Algorithm</th>
                    <th>ProofType</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.info.Id}</td>
                    <td>{this.props.info.FullName}</td>
                    <td>{this.props.info.Internal}</td>
                    <td>{this.props.info.Algorithm}</td>
                    <td>{this.props.info.ProofType}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12" id="coin-info2">
              <h2>{this.props.info.FullName} Block Info</h2>
              <table className="table coin-detail-info-table">
                <thead className="thead-dark">
                  <tr>
                    <th>BlockNumber</th>
                    <th>BlockTime</th>
                    <th>BlockReward</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.info.BlockNumber}</td>
                    <td>{this.props.info.BlockTime}</td>
                    <td>{this.props.info.BlockReward}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-9 coin-info">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>time</th>
                    <th>open</th>
                    <th>close</th>
                    <th>high</th>
                    <th>low</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(this.props.detail, (item,index) => (
                    <tr key={index+1}>
                      <td>{index+1}</td>
                      <td>{moment.unix(item.time).format("YYYY/MM/DD hh:mm")}</td>
                      <td>{this.state.mark}{item.open}</td>
                      <td>{this.state.mark}{item.close}</td>
                      <td>{this.state.mark}{item.high}</td>
                      <td>{this.state.mark}{item.low}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    detail: state.details.detail,
    error: state.coin.error,
    info: state.coin.info,
    now: state.details.now,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchDetail, getInfo }, dispatch);
}
export default connect( mapStateToProps, mapDispatchToProps )(CoinDetail);

