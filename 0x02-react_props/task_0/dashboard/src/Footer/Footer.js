import React from 'react';
import './Footer.css';
import logo from '../assets/holberton_logo.jpeg';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App">
      <div className='App-footer'>
        <footer>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
