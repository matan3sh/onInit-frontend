import React from 'react';

export const CourseSchool = ({ course: { school } }) => {
  return (
    <div className='grid-1'>
      <div className='profile-exp bg-light p-1'>
        <div className='grid-mid-hald'>
          <div>
            <img className='round-img' src={school.img} alt='' />
          </div>
          <div>
            <h1 className='text-dark'>
              <span className='text-dark'>
                Source:
                <span className='text-primary'> {school.name}</span>
              </span>
            </h1>
            <h5 className='text-grey'>{school.established} - Current</h5>
            <p>{school.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
