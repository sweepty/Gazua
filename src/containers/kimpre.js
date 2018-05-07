import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNow, exchanger } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class KimP extends Component {
  componentDidMount(){
    this.props.getNow();
    this.props.exchanger();

  }
  render(){
    return(
      <div className="kimchi">
        <h1>코인 프리미엄</h1>
        <p>한국 거래소와 외국 거래소의 가격 차이 조회.</p>
        <br/>
        <h2>현재 환율: {this.props.exchange}</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="table-responsive coin-list mt-3">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>코인명</th>
                      <th>USD </th>
                      <th>KRW</th>
                      <th>코프 (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(this.props.now, (item,index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>${item.USD}</td>
                        <td>₩{item.KRW}</td>
                        <td>{((item.KRW - (item.USD*1080))/ parseInt(item.USD*1080)*100)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//container component -> presentation component 
function mapStateToProps(state) {
  return {
    now: state.details.now,
    exchange: state.news.exchange,
  };
}
//presentation component -> container component
function mapDispatchToProps(dispatch){
  return bindActionCreators({ getNow, exchanger }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(KimP);