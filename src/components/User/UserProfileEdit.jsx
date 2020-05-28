import React from 'react';

export const UserProfileEdit = ({ loggedInUser }) => {
  return (
    <div className='edit-user-profile'>
      <div>
        <img src={loggedInUser.avatar} alt='' />
      </div>
      <div>
        <form className='form'>
          <div className='form-group'>
            <label>Username</label>

            <input type='text' name='username' value={loggedInUser.username} />
          </div>
          <div className='form-group'>
            <label>Avatar URL</label>
            <input type='text' name='avatar' value={loggedInUser.avatar} />
          </div>
          <button className='btn btn-primary'>Save</button>
        </form>
      </div>
    </div>
  );
};
