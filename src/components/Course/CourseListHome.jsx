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
  autoplaySpeed: 2500,
  responsive : [
    {
      breakpoint: 1226,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        }
    },  
    {
       breakpoint: 865,
       settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          }
    },
    {
      breakpoint: 600,
      settings: {
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2500,
         }
    }  
  ]
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
