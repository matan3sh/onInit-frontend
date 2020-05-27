import React from 'react';
import { connect } from 'react-redux';

import { UserEnrollPreview } from './UserEnrollPreview';

const UserCourseList = ({ enrolls, loggedInUser }) => {
  return (
    <>
      {loggedInUser === null ? (
        <h1>You are not Authorized</h1>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th>Course Name</th>
              <th className='hide-sm'>Category</th>
              <th className='hide-sm'>Open At</th>
              <th className='hide-sm'>Status</th>
              {/* <th className='hide-sm'></th> */}
            </tr>
          </thead>
          <tbody>
            {enrolls.map((enroll) =>
              enroll.user._id === loggedInUser._id ? (
                <UserEnrollPreview key={enroll._id} enroll={enroll} />
              ) : (
                ''
              )
            )}
          </tbody>
        </table>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  };
};

export default connect(mapStateToProps, null)(UserCourseList);
