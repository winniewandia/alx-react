import React, {useContext} from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  const { user, logOut } = React.useContext(AppContext);
  return (
    <div className="App">
      <div className='App-footer'>
        <footer>
        {user.isLoggedIn && (
          <p>
            <a href='#'>Contact us</a>
          </p>
        )}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
