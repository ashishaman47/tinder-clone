import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image:
        'https://i2-prod.mirror.co.uk/incoming/article22543420.ece/ALTERNATES/s615b/0_Ellens-Game-of-Games-Season-3.jpg',
      message: 'Whats up ❤',
    },
    {
      name: 'Ellen',
      image:
        'https://i2-prod.mirror.co.uk/incoming/article22543420.ece/ALTERNATES/s615b/0_Ellens-Game-of-Games-Season-3.jpg',
      message: 'Hows it going!',
    },
    {
      message: 'Hi! How are you??',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        YOU MATCHED WITH ELLEN on 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}

      <form className='chatScreen__input'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          className='chatScreen__inputField'
          placeholder='Type a message...'
        />
        <button onClick={handleSend} className='chatScreen__inputButton'>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
