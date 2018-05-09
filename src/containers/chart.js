import React, { Component } from 'react';
import {XAxis,YAxis,VerticalGridLines,AreaSeries,XYPlot, HorizontalGridLines} from 'react-vis';
import 'react-vis/dist/style.css';

export default class Chart extends Component {
  render(){
    const priceData = this.props.value;
    return(
      
      <XYPlot
        xType="time"
        width={800}
        height={500}
        onMouseLeave={this.onMouseLeave}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Time" />
        <YAxis title="Price" tickSize={-20}/>
        <AreaSeries
          getNull={d => d.y !== null}
          onNearestX={this.onNearestX}
          data={priceData}
          opacity={0.80} 
          stroke="#12939a" animation="gentle"
        />
      </XYPlot>
    );
  }
}
