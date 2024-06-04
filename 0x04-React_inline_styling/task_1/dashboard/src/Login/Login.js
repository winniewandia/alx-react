import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
    <div className="App">
      <div className={css(styles.AppBody)}>
        <p className={css(styles.AppBodyP)}>Login to access the full dashboard</p>
        <label htmlFor='email' className={css(styles.email)}>Email:</label>
        <input type='email' className={css(styles.emailInput)} />

        <label htmlFor='password' className={css(styles.password)}>Password:</label>
        <input type='password' className={css(styles.passwordInput)} />

        <button className={css(styles.button)}>OK</button>
      </div>
    </div>
    </>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    height: '700px',
    marginLeft: '50px',
  },
  AppBodyP: {
    marginTop: '50px',
    fontSize: 'x-large',
  },
  button: {
    margin: '10px',
    width: '50px',
    height: '30px',
  },
  email: {
    paddingRight: '10px',
    fontSize: 'x-large',
  },
  emailInput: {
    padding: '10px',
  },
  password: {
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: 'x-large',
  },
  passwordInput: {
    padding: '10px',
  }
});

export default Login;
