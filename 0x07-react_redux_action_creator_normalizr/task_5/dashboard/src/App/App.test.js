import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { StyleSheetTestUtils } from 'aphrodite';

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

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

test('verify that the default state for displayDrawer is false. Verify that after calling handleDisplayDrawer, the state should now be true', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toBe(false);
  // wrapper.instance().handleDisplayDrawer();
  const instance = wrapper.instance();
  instance.handleDisplayDrawer();
  expect(wrapper.state().displayDrawer).toBe(true);
});

test('verify that after calling handleHideDrawer, the state should now be false', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  instance.handleHideDrawer();
  expect(wrapper.state().displayDrawer).toBe(false);
});
