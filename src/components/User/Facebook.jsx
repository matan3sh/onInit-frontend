import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../store/actions/authActions';

import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = (response) => {
    const credentials = {
      email: response.email,
      password: 'facebook',
      username: response.name,
      avatar: response.picture.data.url,
      createdAt: Date.now(),
      isAdmin: false,
    };
    console.log(response);
    this.props.signup(credentials);
    this.props.toCourses();
  };

  componentClicked = () => {
    console.log('clicked');
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: 'f4f4f4',
            padding: '20px',
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId='300207660992293'
          autoLoad={false}
          fields='name,email,picture'
          status={true}
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

const mapDispatchToProps = { signup };

export default connect(null, mapDispatchToProps)(Facebook);
