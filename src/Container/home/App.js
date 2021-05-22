import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Infinite Scroll and Timer</p>
        <Link
          to="/task"
        >
          <button className="go-btn-style">
            Go to Assignment
        </button>
        </Link>
      </header>
    </div>
  );
}

export default App;
