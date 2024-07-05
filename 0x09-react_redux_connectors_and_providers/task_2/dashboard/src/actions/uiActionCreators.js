import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import {bindActionCreators} from 'redux';
// import 'node-fetch';

export const login = (email, password) => {
  console.log('login called');
  return {
    type: LOGIN,
    user: { email, password},
  };
}

export const boundLogin = (email, password) => {
  dispatch(login(email, password));
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
}

export const boundLogout = () => {
  dispatch(logout());
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());


export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const loginSuccess = () => {
  console.log('loginSuccess called')
  return {
    type: LOGIN_SUCCESS,
  };
}

export const loginFailure = () => {
  console.log('loginFail called')
  return {
    type: LOGIN_FAILURE,
  };
}

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:9000/login-success.json')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  }
};
