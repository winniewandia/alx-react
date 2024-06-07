import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import './Login.css';

function Login() {
  return (
    <>
      <div className={css(styles.AppBody)}>
        <p className={css(styles.AppBodyP)}>Login to access the full dashboard</p>
        <div className='emailDiv'>
          <label htmlFor='email' className={css(styles.email)}>Email:</label>
          <input type='email' className={css(styles.emailInput)} />
        </div>
        <div className='passwordDiv'>
          <label htmlFor='password' className={css(styles.password)}>Password:</label>
          <input type='password' className={css(styles.passwordInput)} />
        </div>

        <button className={css(styles.button)}>OK</button>
      </div>

    </>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    // height: '700px',
    // marginLeft: '50px',
  },
  AppBodyP: {
    marginTop: '50px',
    fontSize: 'x-large',
  },
  button: {
    // margin: '10px',
    width: '50px',
    height: '30px',
    border: '3px solid orange',
  },
  email: {
    paddingRight: '10px',
    fontSize: 'x-large',
  },
  emailInput: {
    // padding: '10px',
    border: 'transparent',
  },
  password: {
    // paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: 'x-large',
  },
  passwordInput: {
    padding: '10px',
    border: 'transparent',
  },
});

export default Login;
