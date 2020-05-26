import React from 'react';
import { connect } from 'react-redux';

import { UserCoursePreview } from './UserCoursePreview';

const UserCourseList = ({ courses, loggedInUser }) => {
  return (
    <>
      {loggedInUser === null ? (
        <h1>You are not Authorized</h1>
      ) : (
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
            {courses.map((course) =>
              course.addByUser._id === loggedInUser._id ? (
                <UserCoursePreview key={course._id} course={course} />
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
