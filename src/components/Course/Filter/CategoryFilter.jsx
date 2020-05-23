import React, { Component } from 'react';

export default class CategoryFilter extends Component {
  render() {
    return (
      <div>
        <div className='form-group text-center'>
          <div className='filter btn-light pointer'>Data</div>
          <div className='filter btn-light pointer'>Design</div>
          <div className='filter btn-light pointer'>Programming </div>
          <div className='filter btn-light pointer'>Grpahic</div>
          <div className='filter btn-light pointer'>Economy</div>
          <div className='filter btn-light pointer'>Ecommerce</div>
          <div className='filter btn-light pointer'>Consultants</div>
          <div className='filter btn-light pointer'>Management</div>
          <div className='filter btn-light pointer'>Cooking</div>
        </div>
      </div>
    );
  }
}
