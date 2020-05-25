import React from 'react';
import { UserCoursePreview } from './UserCoursePreview';

export const UserCourseList = ({ courses }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th className='hide-sm'>School</th>
          <th className='hide-sm'>Open At</th>
          <th className='hide-sm'></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <UserCoursePreview key={course._id} course={course} />
        ))}
      </tbody>
    </table>
  );
};
