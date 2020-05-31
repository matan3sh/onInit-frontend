import React from 'react';

export const Footer = () => {
  return (
    <div className='footer-wrapper container'>
      <div className='line'></div>
      <div className='flex-footer text-grey footer-end'>
        <div>
          <i className='fas fa-graduation-cap fa-2x mx-1 mg-icon'></i> onInit
          <span className='mx-2 flex-ltd'>© onInit International Ltd. 2020</span>
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
