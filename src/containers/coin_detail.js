import React from 'react';
import {XAxis,YAxis,LineSeries,FlexibleWidthXYPlot} from 'react-vis';
import Candlestick from './candlestick';
import _ from 'lodash';
export default class CandlestickExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount(){
    this.props.fetchDetail(this.props.match.params.symbol);
  }
  componentWillMount(){
    const a = this.renderData();
    this.setState({data: a});
  }
  
  renderData(){
    const formatted = [];
    _.map(this.props.detail, (item, i) =>
      formatted.push.apply({
        x: i,
        y: (item.open + item.close) / 2,
        yHigh: item.high,
        yOpen: item.open,
        yClose: item.close,
        yLow: item.low,
        color: ((item.open + item.close) / 2) < 9600 ? '#EF5D28' : '#12939A',
        opacity: ((item.open + item.close) / 2)> 9500 ? 0.7 : 1
      })
    );
    return formatted;
  }

  render() {
    const coin_name = this.props.match.params.symbol;
    // const a = this.renderData();
    // this.setState({data: a});
    console.log(this.state.data,"state데이타 찍어보기");
    const {data} = this.state;
    return (
      <div className="candlestick-example">
        <div>{coin_name} 차트차트</div>
        <div className="chart">
          <FlexibleWidthXYPlot
            animation
            yDomain={[0, 100]}
            height={300}>
            <XAxis />
            <YAxis />
            <LineSeries
              color="#12939A"
              data={data} />
            <LineSeries
              color="#FF9833"
              className="dashed-example-line"
              data={[{x: 0, y: 25}, {x: 30, y: 25}]} />
            <LineSeries
              color="#1A3177"
              className="dashed-example-line"
              opacity={0.3}
              data={[{x: 0, y: 75}, {x: 30, y: 75}]} />
            <Candlestick
              colorType="literal"
              opacityType="literal"
              stroke="#79C7E3"
              data={data} />
          </FlexibleWidthXYPlot>
        </div>
      </div>
    );
  }
}



// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchDetail } from '../actions/index';
// import { bindActionCreators } from 'redux';
// import _ from 'lodash';

// import { XAxis, YAxis, LineSeries, FlexibleWidthXYPlot } from 'react-vis';
// import Candlestick from './candlestick';
// // import Chart from './chart';
// // import Tooltips from './tooltips';

// class CoinDetail extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       fetchingData: true,
//       loading: false,
//       dataArr:[],
//       error: '',
//       priod: '',
//       hoverLoc: null,
//       activePoint: null
//     };
//   }
//   handleChartHover(hoverLoc, activePoint){
//     this.setState({
//       hoverLoc: hoverLoc,
//       activePoint: activePoint
//     });
//   }
//   //나중에 day, hour, minute 이거 바꿀 수 있도록 먼저 추가만 해놓는다!
//   changePeriod(ddhhmm){
//     this.setState({
//       priod: ddhhmm
//     });
//   }

//   componentDidMount(){
//     this.props.fetchDetail(this.props.match.params.symbol);  
//   }

//   handleError(){
//     if (this.props.error){
//       return(
//         <div className="alert alert-danger" role="alert">
//           {this.props.error.message}
//         </div>
//       );
//     }
//   }
//   renderChartData(item, index){
//     const y = (item.open + item.close) / 2;
//     const data = [{
//       x: index,
//       y,
//       yHigh: item.high,
//       yOpen: item.open ,
//       yClose: item.close,
//       yLow: item.low,
//       color: y < 8500 ? '#EF5D28' : '#12939A',
//       opacity: y > 9000 ? 0.7 : 1
//     }];
//     return data;
    
//   }
//   render(){
//     if (this.state.loading){
//       return <div>loading....</div>;
//     }
//     const coin_symbol = this.props.match.params.symbol;
//     const formatted = [];
//     _.map(this.props.detail, (item, index) => 
//       formatted.push(this.renderChartData(item, index))
//     );
//     this.setState = {
//       dataArr: formatted,
//     };

//     return (
//       <div className="coin-detail">
//         <div className="coin-info">
//           <img className="coin-logo" alt="coin image" src={`https://chasing-coins.com/api/v1/std/logo/${coin_symbol}`}/>
//           <h1>{coin_symbol} Chart</h1>
//         </div>
        
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               {/* <Chart values = {this.props.formatted}/> */}
//               <div className="candlestick-example">
//                 <div className="chart">
//                   <FlexibleWidthXYPlot
//                     animation
//                     yDomain={[6000, 10000]} //흠 여기 고쳐야할듯.
//                     height={700}
//                     width={1500}>
                    
//                     <XAxis />
//                     <YAxis />
//                     <LineSeries
//                       color="#12939A"
//                       data={this.state.dataArr} />
//                     <LineSeries
//                       color="#FF9833"
//                       className="dashed-example-line"
//                       data={[{x: 0, y: 9000}, {x: 30, y: 9000}]} />
//                     <LineSeries
//                       color="#1A3177"
//                       className="dashed-example-line"
//                       opacity={0.3}
//                       data={[{x: 0, y: 9900}, {x: 30, y: 9900}]} />
//                     <Candlestick
//                       colorType="literal"
//                       opacityType="literal"
//                       stroke="#79C7E3"
//                       data={this.state.dataArr} />
//                   </FlexibleWidthXYPlot>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );    
//   }
// }

// function mapStateToProps(state){
//   return{
//     detail: state.details.data,
//     error: state.details.error,
//   };
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchDetail }, dispatch);
// }
// export default connect( mapStateToProps, mapDispatchToProps )(CoinDetail);

