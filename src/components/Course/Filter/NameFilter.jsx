import React, { Component } from 'react';

export default class NameFilter extends Component {
  state = { courseName: '' };

  handleChange = (ev) => {
    let { name, value } = ev.target;
    value = ev.target.type === 'number' ? parseInt(value) : value;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFilterByName(this.state.courseName);
  };

  render() {
    return (
      <div className='home-filter'>
        <form onSubmit={this.onSubmit} className='flex-center'>
          <div className='form-group'>
            <input
              type='text'
              name='courseName'
              placeholder='Search a course'
              onChange={this.handleChange}
              value={this.state.courseName}
            />
          </div>
          <div className='form-group'>
            <span className='pointer'>
              <i className='fas fa-search fa-2x' style={{ color: '#ccc' }}></i>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
