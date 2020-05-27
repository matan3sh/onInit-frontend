import React from 'react';

export const HomeGuide = () => {
  return (
    <div className='grid-3 '>
      <div className='guide-card'>
        <img
          src='https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt=''
        />
        <p className='text-bold'>Sign Up for a Course</p>
        <p className='text-mid text-grey'>Make the step to a better future</p>
      </div>
      <div className='guide-card'>
        <img
          src='https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt=''
        />
        <p className='text-bold'>Exposed to New Worlds</p>
        <p className='text-mid text-grey'>Learn new skills</p>
      </div>
      <div className='guide-card'>
        <img
          src='https://images.pexels.com/photos/3860861/pexels-photo-3860861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt=''
        />
        <p className='text-bold'>Prepare for a Successful Career</p>
        <p className='text-mid text-grey'>It's time to be successful</p>
      </div>
    </div>
  );
};
