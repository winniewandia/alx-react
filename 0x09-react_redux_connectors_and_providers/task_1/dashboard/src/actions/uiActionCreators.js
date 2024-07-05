import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import {bindActionCreators} from 'redux';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const logout = () => {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
}

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      if (!response.ok) {
        throw new Error('Login failed');
      }
      await response.json();
      // const user = await response.json();
      dispatch(loginSuccess());
    } catch (e) {
      dispatch(loginFailure());
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginRequest,
  }, dispatch);
};

export default mapDispatchToProps;