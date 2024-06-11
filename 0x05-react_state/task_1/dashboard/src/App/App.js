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

class App extends React.Component{
  constructor(props) {
    super(props);
    this.isLoggedIn = this.props.isLoggedIn;
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      displayDrawer: false,
    };
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
  
  handleDisplayDrawer = () => {
    this.setState({displayDrawer: true});
  };

  handleHideDrawer = () => {
    this.setState({displayDrawer: false});
  };

  render() {
  if (this.props.isLoggedIn) {
    return(
      <div className='App'>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
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
    );
  } else {
    return(
      <>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.headerNotification)}>
        <Header />
        </div>
        <div className={css(styles.line)} />
        <div className={css(styles.mainBodyContainer)}>
        <BodySectionWithMarginBottom title='Log in to continue'>
          <LoggedInComponent />
        </BodySectionWithMarginBottom>
        {/* <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </BodySection> */}
        </div>
        <div className={css(styles.line)} />
        <Footer />
      </>
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

export default App;
