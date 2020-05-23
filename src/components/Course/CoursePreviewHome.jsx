import React from 'react';
import { Link } from 'react-router-dom';
import ReviewRate from './Review/ReviewRate';

export const CoursePreviewHome = ({ course }) => {
  return (
    <div className='card-container'>
      <Link to={`/course/${course._id}`}>
        <div className='home-card pointer'>
          <div className='imgBx'>
            <img src={course.imgCover} alt='' />
          </div>
          <div className='content'>
            <h3>{course.name}</h3>
            <ReviewRate rate={(course.rating * 100) / 5} />
          </div>
        </div>
      </Link>
    </div>
  );
};
