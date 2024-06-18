import NotificationItem from "./NotificationItem";
import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("NotificationItem renders without crashing", () => {
  shallow(<NotificationItem type="default"/>);
});

test("renders with correct type and value", () => {
  const wrapper = shallow(
    <NotificationItem type="default" value="test" html={{__html:''}} />
  );
  expect(wrapper.find("li").text()).toEqual("test");
  expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
});

test("renders with correct html", () => {
  const wrapper = shallow(
    <NotificationItem html={{ __html: "<u>test</u>" }} />
  );
  expect(wrapper.find("li").html()).toContain("<u>test</u>");
});

test('markAsRead is called with the right id', () => {
  const markAsRead = jest.fn();
  const wrapper = shallow(
    <NotificationItem id={1} type="default" value="test" html={{__html:''}} markAsRead={markAsRead} />
  );
  wrapper.find('li').simulate('click');
  expect(markAsRead).toHaveBeenCalledWith(1);
});
