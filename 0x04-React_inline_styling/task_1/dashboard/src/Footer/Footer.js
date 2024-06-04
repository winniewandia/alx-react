import React from 'react';
import './Footer.css';
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
