import React, { Component } from 'react';

import FakeData from './fakeData'

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

let data = FakeData()

let view = data().map(datum => {
  return { x: datum.time * 1000, y: datum.value }
})

export default class App extends Component {
  render() {
    console.log(data()[0])
    console.log(view[0])
    /*
    <LineSeries
      data={[
        {x: 1, y: 10},
        {x: 2, y: 5},
        {x: 3, y: 15}
      ]}
    />*/

    const timestamp = Date.now();
    const MSEC_DAILY = 86400000;

    let view2=[
      {x: timestamp + MSEC_DAILY, y: 3},
      {x: timestamp + MSEC_DAILY * 2, y: 5},
      {x: timestamp + MSEC_DAILY * 3, y: 15},
      {x: timestamp + MSEC_DAILY * 4, y: 12}
    ]

    return (
      <div>
        <XYPlot
          xType="time"
          width={600}
          height={400}>
          <HorizontalGridLines />
          <LineSeries
            data={ view }/>
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}
