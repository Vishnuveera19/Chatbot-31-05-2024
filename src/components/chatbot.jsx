import React, { useState } from 'react';
import './chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = { text: inputValue, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simple logic for chatbot response
    let botResponse = '';
    switch (inputValue.toLowerCase()) {
      case 'hi':
        botResponse = 'Hello there!';
        break;
      case 'how are you?':
        botResponse = 'I\'m just a bot, but thanks for asking!';
        break;
      default:
        botResponse = 'I\'m sorry, I don\'t understand.';
    }

    setTimeout(() => {
      const replyMessage = { text: botResponse, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, replyMessage]);
    }, 500); // Delay to simulate bot response
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
