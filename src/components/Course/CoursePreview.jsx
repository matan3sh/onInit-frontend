import React from 'react';
import { Link } from 'react-router-dom';
import ReviewRate from './Review/ReviewRate';

export const CoursePreview = ({ course }) => {
  return (
    <div className='profile bg-light'>
      <div className='grid-1'>
        <div>
          <h3>{course.name}</h3>
          <h4 className='text-grey'>{course.school.name}</h4>
          <p>{course.location}</p>
        </div>
        <img className='round-img' src={course.imgCover} alt='' />
        {course.rating && course.reviews ? (
          <>
            <p className='dot'>{course.rating}</p>
            <ReviewRate rate={(course.rating * 100) / 5} />
            <p className='text-small text-grey'>
              ({course.reviews.length} reviews)
            </p>
          </>
        ) : (
          <p className='text-small text-grey'> No Reviews Yet</p>
        )}
      </div>
      <Link to={`/course/${course._id}`}>
        <button className='btn btn-primary view-btn'>View</button>
      </Link>
    </div>
  );
};
