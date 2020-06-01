import React from 'react';
import moment from 'moment';
import ReactEmoji from 'react-emoji';

const Message = ({ message, user }) => {
  let isSentByCurrentUser = false;

  if (message.from === user.username) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <div className='messageBox backgroundBlue'>
        <div className='message-buble'>
          <div>
            <img src={user.avatar} alt='' />
          </div>
          <div>
            <p className='sentText pr-10 text-white text-bold'>
              {message.from}
            </p>
            <p className='sent-at-white'>{moment(message.sentAt).fromNow()}</p>
            <p className='messageText colorWhite text-mid'>
              {ReactEmoji.emojify(message.txt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      <div className='messageBox backgroundLight'>
        <div className='message-buble'>
          <div>
            <img src={message.avatar} alt='' />
          </div>
          <div>
            <p className='sentText pl-10 '>{message.from}</p>
            <p className='sent-at'>{moment(message.sentAt).fromNow()}</p>

            <p className='messageText colorDark'>
              {ReactEmoji.emojify(message.txt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
