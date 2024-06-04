import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

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

test('when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
    const logOut = jest.fn();
    window.alert = jest.fn();
    act(() => {
      render(<App logOut={logOut} />, container);
    });
    const event = new KeyboardEvent('keydown', {key: 'h', ctrlKey: true});
    window.dispatchEvent(event);
    expect(logOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
});

// test('App renders a div with the class App-header', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-header').length).toBe(1);
// });
  
// test('App renders a div with the class App-body', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-body').length).toBe(1);
// });
  
// test('App renders a div with the class App-footer', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-footer').length).toBe(1);
// });