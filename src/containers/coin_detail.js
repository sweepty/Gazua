import React from 'react';
import {XAxis,YAxis,LineSeries} from 'react-vis';
// import Candlestick from './candlestick';
import _ from 'lodash';
import { fetchDetail, selectedPriod } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {XYPlot, HorizontalGridLines} from 'react-vis';
class CoinDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      priod: 'minute'
    };

  }
  componentDidMount(){
    this.interval = setInterval(this.props.fetchDetail(this.props.match.params.symbol, this.state.priod), 60000);
  }
  render() {
    const coin_name = this.props.match.params.symbol;

    const dd = [];
    _.map(this.props.detail, (pp,ii) => {
      dd.push({
        x: ii,
        y: (pp.open + pp.close) / 2,
        yHigh: pp.high,
        yOpen: pp.open,
        yClose: pp.close,
        Low: pp.low,
        color: ((pp.open + pp.close) / 2) < 9600 ? '#EF5D28' : '#12939A',
        opacity: ((pp.open + pp.close) / 2)> 9500 ? 0.7 : 1
      });
      return dd;
    });
    
    return (
      
      <div className="candlestick-example">
        <div><img className="coin-detail-logo" src={`https://chasing-coins.com/api/v1/std/logo/${coin_name}`}/></div>
        <h1>{coin_name} Chart</h1>
        <div className="btn-group" role="group" aria-label="Choice priod">
          <button type="button" className="btn btn-secondary" onClick={() => this.props.selectedPriod('day')}>DAY</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.props.selectedPriod('hour')} >HOUR</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.props.selectedPriod('minute')}>MINUTE</button>
        </div>
        <h2>Latest 30 {this.state.priod} chart</h2>
        <div className="chart">
          <XYPlot width={700}height={700}>
            <HorizontalGridLines />
            <LineSeries
              data={dd}/>
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>

        <h3>{this.state.priod}</h3>
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
                <td>{item.time}</td>
                <td>${item.open}</td>
                <td>${item.close}</td>
                <td>${item.high}</td>
                <td>${item.low}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  return bindActionCreators({ fetchDetail, selectedPriod }, dispatch);
}
export default connect( mapStateToProps, mapDispatchToProps )(CoinDetail);

