import React from 'react';
import SocketService from '../../services/SocketService';
import { InfoBar } from './InfoBar';
import { Messages } from './Messages';

export class Chat extends React.Component {
  state = {
    msg: {
      from:
        this.props.loggedInUser === null
          ? 'Guest_User'
          : this.props.loggedInUser.username,
      avatar:
        this.props.loggedInUser === null
          ? 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          : this.props.loggedInUser.avatar,
      txt: '',
      sentAt: Date.now(),
    },
    msgs: [],
    topic: this.props.user.username,
  };

  componentDidMount() {
    // SocketService.setup();
    // SocketService.on('chat addMsg', this.addMsg);
    SocketService.emit('chat topic', this.state.topic);
  }

  componentWillUnmount() {
    SocketService.off('chat addMsg', this.addMsg);
    SocketService.terminate();
  }

  addMsg = (newMsg) => {
    this.setState(({ msgs }) => ({ msgs: [...msgs, newMsg] }));
  };

  sendMsg = (ev) => {
    ev.preventDefault();
    const { loggedInUser, user } = this.props;
    const updatedUser = {
      ...user,
      chat: [...user.chat, this.state.msg],
    };
    this.props.saveUser(updatedUser);
    SocketService.emit('chat newMsg', this.state.msg);
    this.setState({
      msg: {
        from: loggedInUser !== null ? loggedInUser.username : 'Guest_User',
        txt: '',
      },
    });
  };

  msgHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => {
      return {
        msg: {
          ...prevState.msg,
          [name]: value,
        },
      };
    });
  };

  render() {
    const { user } = this.props;
    const { topic, msg } = this.state;
    return (
      <div className='outer-container'>
        <div className='inner-container'>
          <InfoBar room={topic} />
          <Messages user={user} />
          <form className='form-input' onSubmit={this.sendMsg}>
            <input
              className='input-chat'
              type='text'
              name='txt'
              placeholder='Type a message...'
              value={msg.txt}
              onChange={this.msgHandleChange}
              onKeyPress={(event) =>
                event.key === 'Enter' ? this.sendMsg(event) : null
              }
            />
            <button type='submit' className='send-button'>
              Send
            </button>
          </form>
        </div>
        <ul></ul>
      </div>
    );
  }
}
