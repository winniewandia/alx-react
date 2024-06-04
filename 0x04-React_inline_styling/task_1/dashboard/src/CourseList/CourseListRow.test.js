import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";

test("if header is true and textSecondCell is null, CourseListRow renders a th with colSpan 2", () => {
  const wrapper = shallow(
    <CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />
    );
    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toEqual("2");
});

test("if header is true and textSecondCell is not null, CourseListRow renders two th elements", () => {
  const wrapper = shallow(
    <CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test" />
    );
    expect(wrapper.find("th")).toHaveLength(2);
});

test("if header is false, CourseListRow renders two td elements", () => {
  const wrapper = shallow(
    <CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />
    );
    expect(wrapper.find("td")).toHaveLength(2);
});
