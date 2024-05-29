import NotificationItem from "./NotificationItem";
import React from "react";
import { shallow } from "enzyme";

test("NotificationItem renders without crashing", () => {
  shallow(<NotificationItem />);
});

test("renders with correct type and value", () => {
  const wrapper = shallow(
    <NotificationItem type="default" value="test" />
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
