import React from 'react';
import Moment from 'react-moment';

export const CourseSchool = ({ course }) => {
  return (
    <div className='school-grid'>
      <div>
        <div className='info-details'>
          <h5 className='text-mid text-primary text-bold'>
            Contact Information
          </h5>

          <p>
            <i className='fas fa-map-marker-alt'></i> {course.location.address}
          </p>
          <p>
            {' '}
            <i className='fas fa-envelope'></i> {course.email}
          </p>
          <p>
            {' '}
            <i className='fas fa-phone-square'></i> {course.phone}
          </p>
          <p>
            {' '}
            <i className='fas fa-hourglass-start'></i> Added at{' '}
            <Moment className='text-bold text-grey' format='LL'>
              {course.createdAt}
            </Moment>
          </p>
        </div>
      </div>
      <div>
        <img className='about-school-img' src={course.school.img} alt='' />
      </div>
      <div>
        <h1 className='text-dark'>
          <span className='text-dark'>
            <span className='text-primary'> {course.school.name}</span>
          </span>
        </h1>
        <h5 className='text-grey'>{course.school.established} - Present</h5>
        <p>{course.school.description}</p>
      </div>
    </div>
  );
};
