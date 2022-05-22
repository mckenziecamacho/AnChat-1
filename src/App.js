import './App.css';
import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
import Header from './components/Header';
import ChatBox from './components/ChatBox';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <input placeholder='message...'/>
        <button>Send</button>
      </header>
    </div>
  );
}

export default App;
