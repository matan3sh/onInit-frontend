import React from 'react';
import { Link } from 'react-router-dom';

export const CourseEnroll = ({ enrolls, course }) => {
  const check = enrolls.filter((enroll) => enroll.course._id === course._id);
  return (
    <div className='registered-enrolls'>
      {check.length > 0 && (
        <span className='text-bold registered-title'>Registered </span>
      )}
      <div className='enrolls-wrapper'>
        {enrolls.map((enroll, index) => {
          if (enroll.course._id === course._id) {
            return (
              <Link to={`profile/${enroll.user._id}`} key={index}>
                <div className='enrolls'>
                  <img src={enroll.user.avatar} alt='' />
                  <p className='text-grey-dark'>{enroll.user.fullName}</p>
                  {enroll.isConfirm ? (
                    <div className='isconfirmed text-bold'>Confirmed</div>
                  ) : (
                    <div className='isconfirmed text-grey'>Pending</div>
                  )}
                </div>
              </Link>
            );
          } else return <div key={index}></div>;
        })}
      </div>
    </div>
  );
};
