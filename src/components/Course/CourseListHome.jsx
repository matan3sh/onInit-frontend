import React from 'react';
import { CoursePreview } from './CoursePreview.jsx';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export const CourseListHome = ({ courses, loggedInUser }) => {
  return (
    <div className='display'>
      <Slider {...settings}>
        {courses.map((course) => (
          <CoursePreview
            key={course._id}
            course={course}
            loggedInUser={loggedInUser}
          />
        ))}
      </Slider>
    </div>
  );
};
