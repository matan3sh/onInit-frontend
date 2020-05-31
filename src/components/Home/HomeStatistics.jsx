import React, { Component } from 'react';
import PopChart from '../Dashboard/PopChart';

export default class HomeStatistics extends Component {
  render() {
    return (
      <div className='statistics my-5'>
        <div className='stat-chart'>
          <PopChart />
        </div>
        <div className='stat-desc'>
          <p className='lead text-bold' style={{ margintTop: '1rem' }}>
            {' '}
            Best Schools In The Market
          </p>
          <p className='text-grey'>
            That makes the United States by far the largest market for digital
            marketing and advertising spending and revenue.
            <br />
            In addition, marketing and digital communications is a booming
            industry for young professionals looking to kickstart their careers.
            <br />
            It’s also a great area of study for students looking to gain a
            deeper understanding of the industry, equipping themselves with the
            knowledge, resources and skills to build captivating campaigns for
            brands of all shapes and sizes.
          </p>
        </div>
      </div>
    );
  }
}
