import Header from "./Header";
import { shallow } from "enzyme";
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
test('Header renders without crashing', () => {
    shallow(<Header />);
});

test('Header renders h1 and img tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
});