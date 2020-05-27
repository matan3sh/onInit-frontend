import React from 'react';
// import { Link } from 'react-router-dom';

export const UserEnrollPreview = ({ enroll }) => {
  return (
    <tr>
      <td>{enroll.course.name}</td>
      <td className='hide-sm'>{enroll.course.category}</td>
      <td className='hide-sm'>{enroll.course.openAt}</td>
      <td className='hide-sm'>
        {enroll.isConfirm ? (
          <span className='badge bg-success'>Confirm</span>
        ) : (
          <span className='badge bg-danger'>Pending</span>
        )}
      </td>
      {/* <Link to={`/edit/${enroll._id}`} exact>
        <button className='btn'>Update</button>
      </Link>
      <button className='btn'>Delete</button> */}
    </tr>
  );
};
