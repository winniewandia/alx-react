import React, { useContext } from 'react';
import logo from '../assets/holberton_logo.jpeg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

function Header({ user, logout }){
  // const { user, logOut } = useContext(AppContext);
  return (
      <div className={css(styles.appHeaderDiv)}>
        <header className={css(styles.appHeader)}>
          <img className={css(styles.image)} src={logo} alt='' />
          <h1>School dashboard</h1>
          {user && (
          <div id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logout}>logout</a>)
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

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps) (Header);
