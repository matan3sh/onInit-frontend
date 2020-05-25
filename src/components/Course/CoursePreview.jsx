import React from 'react';
import { Link } from 'react-router-dom';
import ReviewRate from './Review/ReviewRate';

export const CoursePreview = ({ course }) => {
  return (
    <Link to={`/${course._id}`}>
      <img className='round-img' src={course.imgCover} alt='' />
      <div className='course-card'>
        <h3 className='text-mid'>{course.name}</h3>
        <p className='text-small'>{course.location}</p>
        {course.rating && course.reviews ? (
          <>
            <ReviewRate rate={(course.rating * 100) / 5} />{' '}
            <span className='text-mid'>{course.rating}</span>
            <span className='text-small' style={{ marginLeft: '0.2rem' }}>
              ({course.reviews.length})
            </span>
          </>
        ) : (
          <p className='text-small text-grey'> No Reviews Yet</p>
        )}
      </div>
    </Link>
  );
};
