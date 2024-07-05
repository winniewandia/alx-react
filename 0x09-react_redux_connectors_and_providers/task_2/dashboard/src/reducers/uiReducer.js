import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null,
};

const uiReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);
            // return state.set('user', Map(action.user))
            //             .set('isUserLoggedIn', true);

        case LOGIN:
            return state.set('user', action.user);

        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);
            // return state.set('isUserLoggedIn', false)
            //             .set('user', Map({}));
    
        case LOGOUT:
            // return state.set('isUserLoggedIn', false);
            return state.set('isUserLoggedIn', false)
                        .set('user', null);

        default:
            break;
    }
    return state;
}

export default uiReducer;

// export default function uiReducer(state = initialState, action) {
//     switch (action.type) {
//         case LOGIN:
//             return {
//                 ...state,
//                 isUserLoggedIn: true,
//             };
//         case LOGOUT:
//             return {
//                 ...state,
//                 isUserLoggedIn: false,
//             };
//         case DISPLAY_NOTIFICATION_DRAWER:
//             return {
//                 ...state,
//                 isNotificationDrawerVisible: true,
//             };
//         case HIDE_NOTIFICATION_DRAWER:
//             return {
//                 ...state,
//                 isNotificationDrawerVisible: false,
//             };
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 user: action.user,
//             };
//         case LOGIN_FAILURE:
//             return {
//                 ...state,
//                 user: null,
//             };
//         default:
//             return state;
//     }
// }