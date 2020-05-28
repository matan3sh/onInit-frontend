import React from 'react';
import { Link } from 'react-router-dom';

export const HomeFooter = () => {
  return (
    <div className='footer-wrapper container'>
      <div className='line'></div>
      <img
        src='https://res.cloudinary.com/dwymjj6rm/image/upload/v1590511620/onInit/img/footerImg.jpg'
        alt=''
      />
      <div className='footer-body text-center'>
        <p className='footer-title'>Find Your Course And Start Today</p>
        <p className='text-white text-mid '>
          We specialize in offering quality courses in many categories
        </p>
        <Link to={'/'}>
          <button className='btn btn-success'>Start Your Journey</button>
        </Link>
      </div>
    </div>
  );
};
