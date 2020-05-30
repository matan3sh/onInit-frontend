import React from 'react';
import { connect } from 'react-redux';
import { saveUser } from '../../store/actions/userActions';
import { setUser } from '../../store/actions/authActions';

class UserProfileEdit extends React.Component {
  state = {
    username: this.props.user.username,
    avatar: this.props.user.avatar,
  };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let updatedUser = { ...this.props.user };
    updatedUser.username = this.state.username;
    updatedUser.avatar = this.state.avatar;
    console.log(updatedUser);
    this.props.saveUser(updatedUser);
    this.props.setUser(updatedUser);
  };

  render() {
    const { user } = this.props;
    return (
      <div className='edit-user-profile'>
        <div>
          <img src={user.avatar} alt='' />
        </div>
        <div>
          <form className='form' onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Username</label>

              <input
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label>Avatar URL</label>
              <input
                type='text'
                name='avatar'
                value={this.state.avatar}
                onChange={this.onChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveUser,
  setUser,
};

export default connect(null, mapDispatchToProps)(UserProfileEdit);
