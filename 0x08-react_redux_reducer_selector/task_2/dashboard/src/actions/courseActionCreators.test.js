import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("courseActionCreators", () => {
  it("should return SELECT_COURSE action", () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("should return UNSELECT_COURSE action", () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
