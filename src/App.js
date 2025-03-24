import React, { useState } from 'react';
import './App.css';

function App() {
  const [chats, setChats] = useState([
    { id: 1, title: "Chat 1" },
    { id: 2, title: "Chat 2" },
    { id: 3, title: "Chat 3" },
    { id: 4, title: "Chat 4" },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    setResponse(`Response for ${chat.title}`);
  };

  const handleQuerySubmit = () => {
    if (!query.trim()) return;
    setResponse(`Processing query: "${query}" for ${selectedChat?.title || "Chat"}`);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="header-left">
          <button className="header-button">Pranjal</button>
        </div>
        <div className="header-right">
          <button className="header-button">Logout</button>
        </div>
      </div>
      
      <div className="main-content">
        {/* Sidebar - Chat List */}
        <div className="sidebar">
          {chats.map((chat) => (
            <div 
              key={chat.id} 
              className={`chat-item ${selectedChat?.id === chat.id ? 'selected' : ''}`} 
              onClick={() => handleChatClick(chat)}
            >
              {chat.title}
            </div>
          ))}
        </div>

        {/* Main Chat Area */}
        <div className="chat-container">
          <div className="top-bar">
            <div className="assistant-buttons">
              <button className="assistant-button">Assistant 1</button>
              <button className="assistant-button">Assistant 2</button>
              <button className="assistant-button">Assistant 3</button>
            </div>
            <div className="db-selector">
              <select className="db-select">
                <option>Select DB</option>
                <option>Database 1</option>
                <option>Database 2</option>
              </select>
            </div>
          </div>

          {/* Audio Controls */}
          <div className="audio-controls">
            <button className="audio-button" onClick={toggleMute}>
              {isMuted ? '🔇' : '🔊'}
            </button>
            <button className="audio-button">⋮</button>
          </div>

          {/* Chat Display Area */}
          <div className="chat-box">
            <div className="response-section">
              {response || "Select a chat to start conversation"}
            </div>
          </div>

          {/* Input Query */}
          <div className="query-section">
            <input 
              type="text" 
              placeholder="Enter your Query..." 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleQuerySubmit()}
            />
            <button onClick={handleQuerySubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;