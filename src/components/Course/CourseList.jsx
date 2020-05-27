import React from 'react';
import { CoursePreview } from './CoursePreview.jsx';

export const CourseList = ({ courses, loggedInUser }) => {
  return (
    <div className='courses-grid'>
      {courses.map((course) => (
        <CoursePreview
          key={course._id}
          course={course}
          loggedInUser={loggedInUser}
        />
      ))}
    </div>
  );
};
