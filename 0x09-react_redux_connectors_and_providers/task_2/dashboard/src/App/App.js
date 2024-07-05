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
import { connect } from 'react-redux';
import { user, logOut } from "./AppContext";
import { displayNotificationDrawer, hideNotificationDrawer, login, loginRequest, logout } from '../actions/uiActionCreators';


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

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user,
      listNotifications: listNotifications,
    };
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
  }

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logout();
    }
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func,
  }

  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
    login: () => {},
  };

  markNotificationAsRead(id) {
    this.setState({listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id)});
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    const { user, listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer,login, logOut } = this.props;

    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.headerNotification)}>
        <Header />
        </div>
        <div className={css(styles.line)} />
        {isLoggedIn ? (
          <div>
          <BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </BodySection>
      </div>
        ) : (
          <div className={css(styles.mainBodyContainer)}>
        <BodySectionWithMarginBottom title='Log in to continue'>
          <LoggedInComponent login={login} />
        </BodySectionWithMarginBottom>
        </div>
        )}
        <div className={css(styles.line)} />
        <Footer />
      </>
    );
}
}

const styles = StyleSheet.create({
  line: {
    height: '3px',
    backgroundColor: '#D93847',
    paddingRight: '10px',
    paddingLeft: '10px',
  },
  headerNotification: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBodyContainer: {
    marginLeft: '50px',
  }
});

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get( 'isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,

};
export default connect(mapStateToProps, mapDispatchToProps)(App);
