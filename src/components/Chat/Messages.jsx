import React from 'react';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';

export const Messages = ({ user }) => {
  return (
    <ScrollToBottom className='messages'>
      {user.chat.map((message, index) => (
        <div key={index}>
          <Message message={message} user={user} />
        </div>
      ))}
    </ScrollToBottom>
  );
};
