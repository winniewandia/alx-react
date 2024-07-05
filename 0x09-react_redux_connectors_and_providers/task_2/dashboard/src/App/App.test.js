import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';
import uiReducer from '../reducers/uiReducer';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test('App renders without crashing', () => {
    shallow(<App />);
});

test('App contains Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Notifications'));
});

test('App contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Header'));
});

test('App contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Login'));
});

test('App contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Footer'));
});

test('CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find('CourseList').length).toBe(0);
});

describe('when logged in', () => {
    test('App contains CourseList component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.contains('CourseList'));
    });
  
    test('App does not contain Login component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login').length).toBe(0);
    });
});

test('verify that the mapStateTopProps function is returning the expected object', () => {
  let state = fromJS({
    uiReducer: {
      isUserLoggedIn: true
    }
  });
  const result = mapStateToProps(state);
  expect(result).toEqual({ isLoggedIn: true });
});
