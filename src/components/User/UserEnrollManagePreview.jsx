import React from 'react';
import { Link } from 'react-router-dom';

export const UserEnrollManagePreview = ({ enroll, onConfirmEnroll }) => {
  return (
    <tr>
      <td>{enroll.course.name}</td>
      <td className='hide-sm'>{enroll.user.fullName}</td>
      <td className='hide-sm'>{enroll.user.email}</td>
      <td className='hide-sm'>{enroll.user.phone}</td>
      <button className='btn' onClick={() => onConfirmEnroll(enroll)}>
        Confirm
      </button>
    </tr>
  );
};
