import Notifications from '../Notifications/Notifications';
import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
];

const listNotifications = [
{id: 1, type: 'default', value: 'New course available'},
{id: 2, type: 'urgent', value: 'New resume available'},
{id: 3, type: 'urgent', html: { __html: getLatestNotification()}},
];

const LoggedInComponent = WithLogging(Login);

export const mapStateToProps = (state) => {
  console.log('Redux state:', state.toJS());
  return {
    isLoggedIn: state.getIn(['uiReducer', 'isUserLoggedIn']),
    displayDrawer: state.getIn(['uiReducer', 'isNotificationDrawerVisible']),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: {email: '', password: '', isLoggedIn: false},
      logOut: this.logOut.bind(this),
      listNotifications: listNotifications,
    };
    this.login = this.login.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
  }

  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
  };
  
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleLogout);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleLogout);
  // }

  // handleLogout(event) {
  //   if (event.ctrlKey && event.key === 'h') {
  //     alert('Logging you out');
  //     this.props.logOut();
  //   }
  // }

  login(email, password) {
    // console.log('Logging in');
    this.setState({user: {email: email, password: password, isLoggedIn: true}});
  }

  logOut() {
    this.setState({user: {email: '', password: '', isLoggedIn: false}});
  }

  markNotificationAsRead(id) {
    this.setState({listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id)});
  }

  render() {
  if (this.state.user.isLoggedIn) {
    // console.log('nimefika');
    return(
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
      <div className='App'>
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.headerNotification)}>
        <Header />
        </div>
        <div className={css(styles.line)} />
        <BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </BodySection>
        <div className={css(styles.line)} />
        <Footer />
      </div>
      </AppContext.Provider>
    );
  } else {
    console.log(this.props.displayNotificationDrawer);
    console.log(this.props.hideNotificationDrawer);
    return(
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
        />
        <div className={css(styles.headerNotification)}>
        <Header />
        </div>
        <div className={css(styles.line)} />
        <div className={css(styles.mainBodyContainer)}>
        <BodySectionWithMarginBottom title='Log in to continue'>
          <LoggedInComponent login={this.login} />
        </BodySectionWithMarginBottom>
        {/* <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </BodySection> */}
        </div>
        <div className={css(styles.line)} />
        <Footer />
      </AppContext.Provider>
    );
  }
}
}

const styles = StyleSheet.create({
  line: {
    height: '3px',
    backgroundColor: '#D93847',
    // alignContent: 'center',
    paddingRight: '10px',
    paddingLeft: '10px',
  },
  headerNotification: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#D93847',
    // borderBottom: '3px solid #FFF',
  },
  mainBodyContainer: {
    marginLeft: '50px',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
