import CourseList from './CourseList';
import { shallow } from 'enzyme';
import React from 'react';

test('CourseList renders without crashing', () => {
  shallow(<CourseList />);
});

test(' renders the 3 different rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find('CourseListRow').length).toBe(3);
});
