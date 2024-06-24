import { type } from "jquery";
import uiReducer from "./uiReducer";
import {Map} from "immutable";

describe("uiReducer", () => {
    const initialState = Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
    });
    it("should return the initial state", () => {
        expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    it("should handle SELECT_COURSE", () => {
        expect(
        uiReducer(undefined, {
            type: "SELECT_COURSE",
            index: 1,
        })
        ).toEqual(initialState);
    });
    
    it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
        const action = {
            type: "DISPLAY_NOTIFICATION_DRAWER",
        };
        const state = uiReducer(undefined, action);
        expect(state.get("isNotificationDrawerVisible")).toEqual(true);
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