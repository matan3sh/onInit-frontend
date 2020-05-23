import React from 'react';
import { CoursePreview } from './CoursePreview.jsx';

export const CourseList = ({ courses }) => {
  return (
    <div className='grid-3'>
      {courses.map((course) => (
        <CoursePreview key={course._id} course={course} />
      ))}
    </div>
  );
};
