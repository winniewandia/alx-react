import React from 'react';
import './Header.css';
import logo from '../assets/holberton_logo.jpeg';

function Header() {
  return (
    <div className="App">
      <div className='App-header'>
        <header>
          <img src={logo} alt='' />
          <h1>School dashboard</h1>
        </header>
      </div>
    </div>
  );
}

export default Header;
