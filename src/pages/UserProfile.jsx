import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocketService from '../services/SocketService';

import { Loader } from '../components/Layout/Loader';
import Navbar from '../components/Layout/Navbar';
import { loadUser, saveUser, clearUser } from '../store/actions/userActions';
import { Chat } from '../components/Chat/Chat';

class UserProfile extends Component {
  state = { message: '' };

  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => {
      this.props.loadUser(id);
    }, 500);
    SocketService.setup();
    SocketService.on('chat addMsg', () => this.props.loadUser(id));
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  render() {
    const { user, loggedInUser, saveUser } = this.props;
    return (
      <>
        <Navbar bg={'#333'} />
        {user === null ? (
          <Loader />
        ) : (
          <div className='container' style={{ marginTop: '5rem' }}>
            <button
              className='btn'
              style={{ margin: '1rem 2rem' }}
              onClick={() => this.props.history.goBack()}
            >
              Back
            </button>
            <div className='user-profile-wrapper'>
              <div className='user-left'>
                <img src={user.avatar} alt='user-avatar' />
                <div className='profile-details'>
                  <p className='text-bold'>{user.fullName}</p>
                  <p className='text-mid'>{user.email}</p>
                </div>
                <div className='social-media'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={user.facebook}
                  >
                    <i className='fab fa-linkedin fa-2x linkedin-color'></i>
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={user.linkedin}
                  >
                    <i className='fab fa-facebook-square fa-2x facebook-color'></i>
                  </a>
                </div>
              </div>
              <div>
                <Chat
                  loggedInUser={loggedInUser}
                  user={user}
                  saveUser={saveUser}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser,
  user: state.users.user,
});

const mapDispatchToProps = {
  loadUser,
  saveUser,
  clearUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
