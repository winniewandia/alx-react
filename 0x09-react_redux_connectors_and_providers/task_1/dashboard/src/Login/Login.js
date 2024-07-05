import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.props.login;
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (event) => {
    this.props.login(this.state.email, this.state.password);
    console.log('Logging in');
    // this.setState({ isLoggedIn: true });
    event.preventDefault();
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({ enableSubmit: true });
      }
    });
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value }, () => {
      if (this.state.password !== '' && this.state.email !== '') {
        this.setState({ enableSubmit: true });
      }
    });
  }
  render() {
  return (
    <>
      <div className={css(styles.AppBody)}>
        <p className={css(styles.AppBodyP)}>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' value={this.state.email} onChange={this.handleChangeEmail} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChangePassword} />
          <input type='submit' value='OK' disabled={!this.state.enableSubmit} />
        </form>
      </div>

    </>
  );
}
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
