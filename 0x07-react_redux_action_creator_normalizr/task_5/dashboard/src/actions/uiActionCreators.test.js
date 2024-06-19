import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe("uiActionCreators", () => {
  it("should return LOGIN action", () => {
    const action = login("winnie", "the pooh");
    expect(action).toEqual({ type: LOGIN, user: { email: "winnie", password: "the pooh" } });
    });

    it("should return LOGOUT action", () => {
        const action = logout();
        expect(action).toEqual({ type: LOGOUT });
    });

    it("should return DISPLAY_NOTIFICATION_DRAWER action", () => {
        const action = displayNotificationDrawer();
        expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    });

    it("should return HIDE_NOTIFICATION_DRAWER action", () => {
        const action = hideNotificationDrawer();
        expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    });
});
