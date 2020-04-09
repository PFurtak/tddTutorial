import React, { useState } from 'react';
import NewMessageForm from './compnents/NewMessageForm';
import MessageList from './compnents/MessageList';

const App = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
};

export default App;
