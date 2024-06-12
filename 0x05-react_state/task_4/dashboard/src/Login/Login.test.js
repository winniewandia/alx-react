import Login from "./Login";
import { shallow } from "enzyme";
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test('Login renders without crashing', () => {
    shallow(<Login />);
});

test('Login renders p, label, input, and button tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toBe(2);
    expect(wrapper.find('input').length).toBe(3);
});

test('a test to verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
});

test('a test to verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'winniewandia63@mail.com', name: 'email' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password', name: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
});
