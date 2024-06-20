import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
}

export default mapDispatchToProps;
