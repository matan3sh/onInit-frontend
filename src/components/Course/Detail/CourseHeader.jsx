import React from 'react';
import Moment from 'react-moment';

import ReviewRate from '../Review/ReviewRate';

export const CourseHeader = ({ course }) => {
  return (
    <div className='profile-top bg-white p-2 grid-1'>
      <div className='grid-2'>
        <div>
          <h1 className='large text-primary'>{course.name}</h1>
          <div className='grid-1'>
            <div>
              <img className='school-img' src={course.school.img} alt='' />
              <span>{course.school.name}</span>
            </div>
            <img
              className='rounded-img my-1'
              src={course.imgCover}
              alt='Course-Thumb'
            />
          </div>
          <p className='lead'>{course.category}</p>
          <p>
            <i className='fas fa-map-marker-alt'></i> {course.location}
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
            <i className='fas fa-hourglass-start'></i> Created at{' '}
            <Moment
              className='text-bold text-grey'
              format='MMMM DD YYYY, h:mm:ss a'
            >
              {course.createdAt}
            </Moment>
          </p>
          {course.rating && course.reviews ? (
            <>
              <ReviewRate rate={(course.rating * 100) / 5} />
              {course.rating}{' '}
              <span className='text-grey text-small'>
                ({course.reviews.length} reviews)
              </span>
            </>
          ) : (
            <span className='text-grey text-small'>No Reviews Yet</span>
          )}
        </div>
        <div>
          <div className='mb-2'>
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
            </span>
          </div>
          <div className='skills'>
            <div className='p-1 item'>
              <i
                className={`${
                  course.benefits.housing ? 'fas' : 'far'
                } fa-circle`}
              ></i>{' '}
              Housing
            </div>
            <div className='p-1 item'>
              <i
                className={`${
                  course.benefits.jobAssistance ? 'fas' : 'far'
                } fa-circle`}
              ></i>{' '}
              Job Assistance
            </div>
            <div className='p-1 item'>
              <i
                className={`${
                  course.benefits.jobGuarantee ? 'fas' : 'far'
                } fa-circle`}
              ></i>{' '}
              Job Guarantee
            </div>
            <div className='p-1 item'>
              <i
                className={`${
                  course.benefits.acceptGi ? 'fas' : 'far'
                } fa-circle`}
              ></i>{' '}
              Accepts GI Bill
            </div>
          </div>
          <img
            src='https://cdn.filestackcontent.com/qfzkumr0RE27pdC8tqeH'
            alt=''
            className='map my-1'
          />
        </div>
      </div>
    </div>
  );
};
