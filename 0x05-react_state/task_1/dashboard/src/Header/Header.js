import React from 'react';
import logo from '../assets/holberton_logo.jpeg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
      <div className={css(styles.appHeaderDiv)}>
        <header className={css(styles.appHeader)}>
          <img className={css(styles.image)} src={logo} alt='' />
          <h1>School dashboard</h1>
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
