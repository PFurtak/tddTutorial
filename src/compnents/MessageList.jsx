import React from 'react';

const MessageList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
