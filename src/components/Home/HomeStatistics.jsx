import React, { Component } from 'react';
import PopChart from '../Dashboard/PopChart';

export default class HomeStatistics extends Component {
  render() {
    return (
      <div className='statistics my-2'>
        <div>
          <PopChart />
        </div>
        <div>
          <p className='lead text-bold' style={{ margintTop: '1rem' }}>
            {' '}
            Give Your Course The Right Tools
          </p>
          <p className='text-grey'>
            Full Transparency A new shared dashboard allows you to track your
            team's activity, so that everyone is always in sync. VIP Customer
            Support Quick response time and upgraded support solutions will help
            you to get what you need, when you need it. Improved Billing Options
            One team - one payment method. You can now add a card on file that
            every team member can use.
          </p>
        </div>
      </div>
    );
  }
}
