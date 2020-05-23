import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export const CourseAbout = ({ course }) => {
  return (
    <div className='profile-about bg-white p-2'>
      <h2 className='text-primary'>Description</h2>
      <p>{course.description}</p>
      <div className='line'></div>
      <div className='flex'>
        <p className='lead mb-4'>
          Duration:{' '}
          <span className='text-primary'>{course.duration} Hours</span>
        </p>
        <p className='lead mb-4'>
          Next Course:{' '}
          <span className='text-primary'>
            <Moment className='text-bold text-grey' format='MMMM DD YYYY'>
              {course.nextCourse}
            </Moment>
          </span>
        </p>
        <p className='lead mb-4'>
          Cost: <span className='text-primary'>{course.price} ₪</span>
        </p>
      </div>
      <div className='text-center'>
        <Link to={`/course/${course._id}/review`} className='btn'>
          Read Reviews
        </Link>
        <Link
          to={`/course/${course._id}/review/add`}
          className='btn btn-primary'
        >
          Write Review
        </Link>
        <a href={`${course.website}`} target='target_blank' className='btn'>
          Visit Website
        </a>
        <button className='btn btn-primary'>Register Now</button>
      </div>
    </div>
  );
};
