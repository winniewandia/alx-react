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
    expect(wrapper.find('input').length).toBe(2);
});
