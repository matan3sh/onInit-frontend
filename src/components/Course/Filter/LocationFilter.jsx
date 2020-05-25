import React, { Component } from 'react';

export default class LocationFilter extends Component {
  state = { location: '' };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFilterByLocation(this.state.location);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='filter-card bg-light'>
        <h1>By Location</h1>
        <div className='search-bootcamps'>
          <div className='form-group'>
            <input
              type='text'
              name='location'
              placeholder='Enter City'
              onChange={this.onChange}
              value={this.state.location}
            />
          </div>
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          style={{ width: '100%' }}
        >
          Search
        </button>
      </form>
    );
  }
}
