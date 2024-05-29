import Notifications from '../Notifications/Notifications';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import propTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn = false}) {
  
  if (isLoggedIn) {
    return(
      <div className='App'>
        <Header />
        <Notifications />

        <div className='line-div' />
        <CourseList />
        <div className='line-div' />
        <Footer />
      </div>
    );
  } else {
    return(
      <>
        <div className='headerNotification'>
        <Header />
        <Notifications />
        </div>
        <div className='line-div' />
        <Login />
        <div className='line-div' />
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: propTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
