import React from 'react';

export const CourseEnroll = ({ enrolls, course }) => {
  const check = enrolls.filter((enroll) => enroll.course._id === course._id);
  return (
    <>
      {check.length > 0 && (
        <h4 className='text-bold' style={{ margin: '20px 1rem' }}>
          Already Registered:{' '}
        </h4>
      )}
      <div className='enrolls-wrapper mb-3'>
        {enrolls.map((enroll, index) => {
          if (enroll.course._id === course._id) {
            return (
              <div className='enrolls' key={index}>
                <img src={enroll.user.avatar} alt='' />
                <p>{enroll.user.fullName}</p>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={enroll.user.linkedin}
                >
                  <i className='fab fa-linkedin fa-1x' />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={enroll.user.facebook}
                >
                  <i className='fab fa-facebook-square fa-1x' />
                </a>
                <a
                  href='/#'
                  onClick={() =>
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${enroll.user.email}&su=About%20Course%20${course.name}&body=Hello%20${enroll.user.fullName}`
                    )
                  }
                >
                  <i className='fas fa-envelope fa-1x'></i>
                </a>
                <p>
                  {enroll.isConfirm ? (
                    <span className='badge bg-primary'>Confirm</span>
                  ) : (
                    <span className='badge bg-light'>Pending</span>
                  )}
                </p>
              </div>
            );
          } else return <div></div>;
        })}
      </div>
    </>
  );
};
