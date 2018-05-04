// import React, { Component } from 'react';
// import { XAxis, YAxis, LineSeries, FlexibleWidthXYPlot } from 'react-vis';
// import Candlestick from './candlestick';

// class Chart extends Component {

//   render() {
//     const {data} = this.state;
//     if (!data) {
//       return <div>데이터가 없다...</div>;
//     }

//     return (
//       <div className="candlestick-example">
//         <div className="chart">
//           <FlexibleWidthXYPlot
//             animation
//             yDomain={[6000, 10000]} //흠 여기 고쳐야할듯.
//             height={700}
//             width={1500}>
            
//             <XAxis />
//             <YAxis />
//             <LineSeries
//               color="#12939A"
//               data={data} />
//             <LineSeries
//               color="#FF9833"
//               className="dashed-example-line"
//               data={[{x: 0, y: 9000}, {x: 30, y: 9000}]} />
//             <LineSeries
//               color="#1A3177"
//               className="dashed-example-line"
//               opacity={0.3}
//               data={[{x: 0, y: 9900}, {x: 30, y: 9900}]} />
//             <Candlestick
//               colorType="literal"
//               opacityType="literal"
//               stroke="#79C7E3"
//               data={data} />
//           </FlexibleWidthXYPlot>
//         </div>
//       </div>
//     );
//   }
// }
// export default Chart;