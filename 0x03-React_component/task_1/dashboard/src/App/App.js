import Notifications from '../Notifications/Notifications';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
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


class App extends React.Component{
  constructor(props) {
    super(props);
    this.isLoggedIn = this.props.isLoggedIn;
    this.handleLogout = this.handleLogout.bind(this);
  }

  static propTypes = {
    logOut: PropTypes.func,
    isLoggedIn: PropTypes.bool
  };

  static defaultProps = {
    logOut: () => {},
    isLoggedIn: false
  };
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleLogout);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleLogout);
  }

  handleLogout(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  
  render() {
  if (this.props.isLoggedIn) {
    return(
      <div className='App'>
        <Header />
        <Notifications displayDrawer={true} listNotifications={listNotifications} />

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
        <Notifications displayDrawer={true} />
        </div>
        <div className='line-div' />
        <Login />
        <div className='line-div' />
        <Footer />
      </>
    );
  }
}
}

export default App;
