import Notifications from '../Notifications/Notifications';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import propTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
];

const listNotifications = [
{id: 1, type: 'default', value: 'New course available'},
{id: 2, type: 'urrgent', value: 'New resume available'},
{id: 3, type: 'urgent', html: { __html: getLatestNotification()}},
];


function App({isLoggedIn = false}) {
  
  if (isLoggedIn) {
    return(
      <div className='App'>
        <Header />
        <Notifications listNotifications={listNotifications} />

        <div className='line-div' />
        <CourseList listCourses={listCourses} />
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
