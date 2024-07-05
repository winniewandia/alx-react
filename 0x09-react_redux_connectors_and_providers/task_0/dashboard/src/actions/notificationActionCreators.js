import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { bindActionCreators } from "redux";

export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index,
})

export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter,
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ markAsRead, setNotificationFilter }, dispatch);
}

export default mapDispatchToProps;