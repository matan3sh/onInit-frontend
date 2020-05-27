import React from 'react';
import { Link } from 'react-router-dom';
import ReviewRate from './Review/ReviewRate';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'round-img slides',
};

export const CoursePreview = ({ course }) => {
  const imags = [course.imgCover, ...course.images];
  return (
    <Link to={`/${course._id}`}>
      <Slider {...settings}>
        {imags.map((img, index) => (
          <img className='round-img' src={img} alt='' key={index} />
        ))}
      </Slider>
      <div className='course-card'>
        <h3 className='text-mid'>{course.name}</h3>
        <p className='text-small'>{course.location.address}</p>
        {course.rating && course.reviews ? (
          <>
            <ReviewRate rate={(course.rating * 100) / 5} />{' '}
            <span className='text-mid'>{course.rating}</span>
            <span className='text-small' style={{ marginLeft: '0.2rem' }}>
              ({course.reviews.length})
            </span>
          </>
        ) : (
          <>
            <ReviewRate rate={0} />{' '}
            <span className='text-white text-small'>(0)</span>
          </>
        )}
      </div>
    </Link>
  );
};
