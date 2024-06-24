import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { loginRequest } from './uiActionCreators';
// import fetchMock from 'fetch-mock';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('loginRequest', () => {
//     afterEach(() => {
//         fetchMock.restore();
//     });
    
//     it('creates LOGIN_SUCCESS when fetching login has been done', () => {
//         fetchMock.getOnce('/login-success.json', {
//             body: { user: 'admin' },
//             headers: { 'content-type': 'application/json' },
//         });
//         const expectedActions = [
//             { type: LOGIN, user: { email: 'admin', password: 'admin' } },
//             { type: LOGIN_SUCCESS },
        
//         ];
//         const store = mockStore({ user: {} });

//         return store.dispatch(loginRequest('admin', 'admin')).then(() => {
//             expect(store.getActions()).toEqual(expectedActions);
//         }
//         );
//     });

//     it('creates LOGIN_FAILURE when fetching login has failed', () => {
//         fetchMock.getOnce('/login-success.json', 500);
//         const expectedActions = [
//             { type: LOGIN, user: { email: 'admin', password: 'admin' } },
//             { type: LOGIN_FAILURE },
//         ];
//         const store = mockStore({ user: {} });

//         return store.dispatch(loginRequest('admin', 'admin')).then(() => {
//             expect(store.getActions()).toEqual(expectedActions);
//         });
//     });
// });

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
