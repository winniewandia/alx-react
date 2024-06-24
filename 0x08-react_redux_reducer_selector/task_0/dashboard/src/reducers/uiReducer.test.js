import uiReducer from "./uiReducer";

describe("uiReducer", () => {
    it("should return the initial state", () => {
        expect(uiReducer(undefined, {})).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
        });
    });

    it("should handle SELECT_COURSE", () => {
        expect(
        uiReducer(undefined, {
            type: "SELECT_COURSE",
            index: 1,
        })
        ).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
        });
    });
    
    it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
        expect(
        uiReducer(undefined, {
            type: "DISPLAY_NOTIFICATION_DRAWER",
        })
        ).toEqual({
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: {},
        });
    });
    
    // it("should handle HIDE_NOTIFICATION_DRAWER", () => {
    //     expect(
    //     uiReducer(undefined, {
    //         type: "HIDE_NOTIFICATION_DRAWER",
    //     })
    //     ).toEqual({
    //     isNotificationDrawerVisible: false,
    //     isUserLoggedIn: false,
    //     });
    // });
    
    // it("should handle LOGIN_SUCCESS", () => {
    //     expect(
    //     uiReducer(undefined, {
    //         type: "LOGIN_SUCCESS",
    //     })
    //     ).toEqual({
    //     isNotificationDrawerVisible: false,
    //     isUserLoggedIn: true,
    //     });
    // });
    
    // it("should handle LOGIN_FAILURE", () => {
    //     expect(
    //     uiReducer(undefined, {
    //         type: "LOGIN_FAILURE",
    //     })
    //     ).toEqual({
    //     isNotificationDrawerVisible: false,
    //     isUserLoggedIn: false,
    //     });
    // });
    
    // it("should handle LOGOUT", () => {
    //     expect(
    //     uiReducer(undefined, {
    //         type: "LOGOUT",
    //     })
    //     ).toEqual({
    //     isNotificationDrawerVisible: false,
    //     isUserLoggedIn: false,
    //     });
    // });
});