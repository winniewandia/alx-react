import { data } from 'jquery';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index,
    };
}

export const fetchCourseSuccess = (course) => {
    return {
        type: FETCH_COURSE_SUCCESS,
        course,
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
}

export default mapDispatchToProps;
