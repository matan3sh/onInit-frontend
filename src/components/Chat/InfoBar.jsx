import React from 'react';
import closeIcon from '../../assets/img/closeIcon.png';
import onlineIcon from '../../assets/img/onlineIcon.png';

export const InfoBar = ({ room }) => {
  return (
    <div className='info-bar'>
      <div className='left-inner-container'>
        <img className='online-icon' src={onlineIcon} alt='online-thumb' />
        <h3>{room}</h3>
      </div>
      <div className='right-inner-container'>
        <a href='/'>
          <img src={closeIcon} alt='close-thumb' />
        </a>
      </div>
    </div>
  );
};
