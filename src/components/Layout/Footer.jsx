import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
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
      <div className='line'></div>
      <div className='flex text-grey footer-end'>
        <div>
          <i className='fas fa-graduation-cap fa-2x mx-1'></i> onInit
          <span className='mx-2'>© onInit International Ltd. 2020</span>
        </div>
        <div>
          <div className='icons my-1'>
            <a href='/#'>
              <i className='fas fa-globe'></i>
            </a>
            <a href='/#'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='/#'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='/#'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='/#'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
