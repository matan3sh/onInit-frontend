import React from 'react';

export const CourseSchool = ({ course: { school } }) => {
  return (
    <div className='school-grid'>
      <div>
        <img className='about-school-img' src={school.img} alt='' />
      </div>
      <div>
        <h1 className='text-dark'>
          <span className='text-dark'>
            <span className='text-primary'> {school.name}</span>
          </span>
        </h1>
        <h5 className='text-grey'>{school.established} - Present</h5>
        <p>{school.description}</p>
      </div>
    </div>
  );
};
