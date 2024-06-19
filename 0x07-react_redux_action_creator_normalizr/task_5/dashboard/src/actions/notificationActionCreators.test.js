import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe("notificationActionCreators", () => {
  it("should return MARK_AS_READ action", () => {
    const action = markAsRead(1);
    expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it("should return SET_TYPE_FILTER action", () => {
    const action = setNotificationFilter("DEFAULT");
    expect(action).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
  });
});
