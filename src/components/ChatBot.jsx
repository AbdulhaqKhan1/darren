import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const botMessage = { role: 'bot', text: getBotResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const getBotResponse = (msg) => {
  const lower = msg.toLowerCase();

  if (lower.includes('hello')) return 'YO! WHAT’S GOOD?! IT’S YA BOY SPEED! 🔥';
  if (lower.includes('who are you')) return 'I am IShowSpeed — the GOAT of YouTube and W man for life!';
  if (lower.includes('how are you')) return 'I’m hype as always bro, LET’S GOOOO! 🗣🔥';
  if (lower.includes('how old are you')) return 'I’m 20 years old — born in January 2005!';
  if (lower.includes('where are you from')) return 'I’m from Cincinnati, Ohio!';
  if (lower.includes('best color') || lower.includes('favourite color')) return 'Red or black — full Ronaldo vibes ⚽🔥';
  if (lower.includes('favourite footballer')) return 'CRISTIANO RONALDO SIIIIUUUUUUUU!!! 🐐';
  if (lower.includes('best food') || lower.includes('favourite food')) return 'Hot wings and pizza, you feel me? 🍗🍕';
  if (lower.includes('favourite pet') || lower.includes('best pet')) return 'Dogs for sure! I got one named Nova 🐶';
  if (lower.includes('hobby')) return 'Screaming, gaming, streaming, vibing — that’s the life 🎮🎥🔥';
  if (lower.includes('best friend')) return 'Probably Kai Cenat or Adin Ross — W creators 💯';
  if (lower.includes('which school') || lower.includes('what school')) return 'I went to high school in Ohio but dropped out to chase the dream! 🏆';

  return 'I don’t understand, but I’m trying 😅';
};


  return (
    <div className='chat-bot'>
      <h2 className='bot-name'>ChatBot</h2>
      <div className='display-msg'  style={{ height: 300, border: '1px solid #ccc', overflowY: 'auto', padding: 10 }}>
        {messages.map((msg, index) => (<div key={index} style={{ marginBottom: 10 }}>
            <strong>{msg.role === 'user' ? 'You' : 'Speed'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className='main'>
        <input className='bot-input'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={sendMessage} className='send'>
        Send
      </button>
      </div>
    </div>
  );
};

export default ChatBot;