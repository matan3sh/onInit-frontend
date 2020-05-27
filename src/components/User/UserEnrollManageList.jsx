import React from 'react';
import { connect } from 'react-redux';

import { UserEnrollManagePreview } from './UserEnrollManagePreview';

const UserEnrollManageList = ({ enrolls, loggedInUser, onConfirmEnroll }) => {
  return (
    <>
      {loggedInUser === null ? (
        <h1>You are not Authorized</h1>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th>Course Name</th>
              <th className='hide-sm'>User Full Name</th>
              <th className='hide-sm'>Email</th>
              <th className='hide-sm'>Phone</th>
              <th className='hide-sm'></th>
            </tr>
          </thead>
          <tbody>
            {enrolls.map((enroll) =>
              enroll.ownedUserId === loggedInUser._id && !enroll.isConfirm ? (
                <UserEnrollManagePreview
                  key={enroll._id}
                  enroll={enroll}
                  onConfirmEnroll={onConfirmEnroll}
                />
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

export default connect(mapStateToProps, null)(UserEnrollManageList);
