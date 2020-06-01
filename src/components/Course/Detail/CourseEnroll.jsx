import React from 'react';
import { Link } from 'react-router-dom';

export const CourseEnroll = ({ enrolls, course }) => {
  const check = enrolls.filter((enroll) => enroll.course._id === course._id);
  return (
    <div>
      {check.length > 0 && (
        <span className='text-bold registered-title'>Registered </span>
      )}
      <div className='enrolls-wrapper mb-3 mx-3'>
        {enrolls.map((enroll, index) => {
          if (enroll.course._id === course._id) {
            return (
              <Link to={`profile/${enroll.user._id}`} key={index}>
                <div className='enrolls'>
                  <img src={enroll.user.avatar} alt='' />
                  <p>{enroll.user.fullName}</p>
                </div>
              </Link>
            );
          } else return <div></div>;
        })}
      </div>
    </div>
  );
};
