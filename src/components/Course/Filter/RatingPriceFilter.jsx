import React, { Component } from 'react';

export default class RatingPriceFilter extends Component {
  onChange = () => {};

  render() {
    return (
      <div className='filter-card bg-light my-1'>
        <h1>Filter</h1>
        <div className='rate-container'>
          <h4>By Rating: </h4>
          <div className='stars-outer'>
            <div className='stars-inner'></div>
          </div>
        </div>
        <input
          type='range'
          name='rating'
          min='0'
          max='5'
          step='0.5'
          value='0'
          onChange={this.onChange}
        />
        <h4>By Budget:</h4>
        <select>
          <option value='0'>1,000 - 5,000</option>
          <option value='1'>5,000 - 10,000</option>
          <option value='2'>10,000 - 15,000</option>
          <option value='3'>15,000 - 20,000</option>
        </select>
        <a href='/#' className='btn btn-primary my-1'>
          Find Courses
        </a>
      </div>
    );
  }
}
