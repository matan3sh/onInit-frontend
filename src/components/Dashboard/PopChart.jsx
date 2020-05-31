import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class PopChart extends Component {
  state = {
    options: {
      chart: {
        height: 450,
        // width: '100%',
        // type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333',
      },
      title: {
        text: 'Our Leading Schools By Enrolls',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: '23px',
        },
      },
      responsive: [
        {
          breakpoint: 865,
          options: {
            chart: {
              height: 340,
              margin: 'auto',
              width: 370,
            },
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 599,
          options: {
            chart: {
              height: 300,
              width: 300,
              margin: 'auto',
            },
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 384,
          options: {
            chart: {
              height: 300,
              width: 290,
              margin: 'auto',
            },
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
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
      legend: {
        position: 'right',
        verticalAlgin: 'top',
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
          // height='450'
          width='100%'
        />
        {/* <button onClick={this.onClick}>Horizontal</button> */}
      </>
    );
  }
}
