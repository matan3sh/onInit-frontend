import React from 'react';
import { Maps } from '../../Map/Maps';
import Moment from 'react-moment';

export const CourseAbout = ({ course }) => {
  return (
    <div className='course-details-right'>
      <div className='flex'>
        <h3 className='course-details-right-title'>
          Next Course{' '}
          <span className='text-primary'>
            <Moment className='text-bold text-primary' format='LL'>
              {course.nextCourse}
            </Moment>
          </span>
        </h3>
        <button className='btn btn-dark'>Register Now</button>
      </div>
      <div className='course-details-description'>
        <h5 className='text-mid'>Description</h5>
        {course.description}
      </div>
      <div className='flex my-1'>
        <p>
          <span className='text-bold text-primary'>Price:</span> {course.price}{' '}
          ₪
        </p>
        <p>
          <span className='text-bold text-primary'>Duration:</span>{' '}
          {course.duration} Hours
        </p>
      </div>
      <div className='flex'>
        <div className='course-details-info contact-info-position'>
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
            <a
              href={course.website}
              target='blank_target'
              className='text-grey-dark'
            >
              <i className='fas fa-globe-americas'></i> {course.website}
            </a>
          </p>
          <p>
            {' '}
            <i className='fas fa-hourglass-start'></i> Added at{' '}
            <Moment className='text-bold text-grey' format='LL'>
              {course.createdAt}
            </Moment>
          </p>
        </div>
        {/* <img
          src='https://cdn.filestackcontent.com/qfzkumr0RE27pdC8tqeH'
          alt=''
          className='map my-1'
        /> */}
        <Maps location={course.location} />
      </div>
      <div>
        <img
          src={course.addByUser.avatar}
          alt=''
          className='bootcamp-user-avatar'
        />
        <span>
          <span className='text-grey'>Added By </span>
          <span className='text-dark text-bold'>
            {course.addByUser.username}
          </span>
          <a href='/#' className='btn mx-1'>
            <i className='fas fa-envelope text-light'></i>
          </a>
        </span>
      </div>
    </div>
  );
};
