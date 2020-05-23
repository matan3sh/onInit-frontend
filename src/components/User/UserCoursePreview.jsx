import React from 'react';
import { Link } from 'react-router-dom';

export const UserCoursePreview = ({ course }) => {
  return (
    <tr>
      <td>{course.name}</td>
      <td className='hide-sm'>{course.school.name}</td>
      <td className='hide-sm'>{course.nextCourse}</td>
      <Link to={`/course/edit/${course._id}`} exact>
        <button className='btn'>Update</button>
      </Link>
      <button className='btn'>Delete</button>
    </tr>
  );
};
