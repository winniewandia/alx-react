import React, { useContext } from 'react';
import logo from '../assets/holberton_logo.jpeg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

function Header() {
  const { user, logOut } = useContext(AppContext);
  return (
      <div className={css(styles.appHeaderDiv)}>
        <header className={css(styles.appHeader)}>
          <img className={css(styles.image)} src={logo} alt='' />
          <h1>School dashboard</h1>
          {user.isLoggedIn && (
          <div id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </div>
        )}
        </header>
      </div>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  appHeaderDiv: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 'calc(10px + 2vmin)',
    color: '#D93847',
  },
  image: {
    width: '120px',
    height: '120px',
    marginRight: '20px',
  }
});

export default Header;
