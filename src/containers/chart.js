import React, { Component } from 'react';
import {XAxis,YAxis,VerticalGridLines,AreaSeries,XYPlot, HorizontalGridLines} from 'react-vis';

export default class Chart extends Component {

  render(){
    const priceData = this.props.value;
    return(
      <XYPlot width={1200}height={700}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis 
          tickFormat={function tickFormat(d){return new Date(d).toLocaleDateString();}}
          tickLabelAngle={-37}
          tickSize={1}/>
        <YAxis 
          tickSize={0}/>
        <AreaSeries data={priceData} fill="#12939a" opacity={0.75} stroke="#12939a"/>
      </XYPlot>
    );
  }
}
