import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
    <div className="App">
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email' className='email'>Email:</label>
        <input type='email' className='emailInput' />

        <label htmlFor='password' className='password'>Password:</label>
        <input type='password' className='passwordInput' />

        <button>OK</button>
      </div>
    </div>
    </>
  );
}

export default Login;
