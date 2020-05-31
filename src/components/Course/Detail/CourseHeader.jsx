import React from 'react';
import ReviewRate from '../Review/ReviewRate';

export const CourseHeader = ({ course }) => {
  return (
    <div className='course-details-header'>
      <h2 className='large text-primary'>{course.name}</h2>
      {course.rating && course.reviews ? (
        <>
          <ReviewRate rate={(course.rating * 100) / 5} />
          {course.rating}{' '}
          <span className='text-grey text-small'>
            ({course.reviews.length})
          </span>
        </>
      ) : (
        <span className='text-grey text-small'>No Reviews Yet</span>
      )}
      <p>{course.category}</p>

      <div className='my-1 benefit-tabs'>
        {course.benefits.housing && (
          <span className='badge bg-dark'>Housing</span>
        )}
        {course.benefits.jobAssistance && (
          <span className='badge bg-light'>Job Assistance</span>
        )}
        {course.benefits.jobGuarantee && (
          <span className='badge bg-dark'>Job Guarantee</span>
        )}
        {course.benefits.acceptGi && (
          <span className='badge bg-light'>Accept Gi</span>
        )}
      </div>
      <div>
        <img className='school-img' src={course.school.img} alt='' />
        <span>{course.school.name}</span>
      </div>
    </div>
  );
};
