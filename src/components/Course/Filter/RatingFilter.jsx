import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';

export default class RatingFilter extends Component {
  state = { rating: 0 };
  render() {
    return (
      <div>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={() => this.setState({ rating: ratingValue })}
              />
              <FaStar
                className='star'
                color={ratingValue <= this.state.rating ? '#ffc107' : '#e4e5e9'}
                size={40}
              />
            </label>
          );
        })}
      </div>
    );
  }
}
