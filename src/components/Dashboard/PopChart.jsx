import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class PopChart extends Component {
  state = {
    options: {
      chart: {
        // height: 450,
        // width: '100%',
        // type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333',
      },
      xaxis: {
        categories: [
          'Coding Academy',
          'Short Courses Online',
          'Web Training',
          'SoftUni',
          'All About STEM',
          'eLearning',
          'Delft',
        ],
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      fill: {
        colors: ['#4bc0d9'],
      },
    },
    series: [
      {
        name: 'Population',
        data: [256, 183, 175, 155, 132, 89, 77],
      },
    ],

    dataLabels: {
      enabled: false,
    },

    title: {
      text: 'Our Leading Schools',
      align: 'center',
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: '25px',
      },
    },
  };

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal,
          },
        },
      },
    });
  };

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          height='450'
          width='100%'
        />
        {/* <button onClick={this.onClick}>Horizontal</button> */}
      </>
    );
  }
}
