import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

test('make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
  console.log = jest.fn();
  const WrappedComponent = () => <p>test</p>;
  const HOC = WithLogging(WrappedComponent);
  const wrapper = shallow(<HOC />);
  expect(console.log).toHaveBeenCalledWith(`Component WrappedComponent is mounted`);
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledWith(`Component WrappedComponent is going to unmount`);
  jest.restoreAllMocks();
});

test('make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component', () => {
  console.log = jest.fn();
  const HOC = WithLogging(Login);
  const wrapper = shallow(<HOC />);
  expect(console.log).toHaveBeenCalledWith(`Component Login is mounted`);
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledWith(`Component Login is going to unmount`);
  jest.restoreAllMocks();
});
