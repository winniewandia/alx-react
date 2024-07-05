import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { fromJS } from "immutable";

describe("courseReducer", () => {
    const initialState = fromJS({
        courses: {},
    
    });

    const courses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ];
    
    it("should return the initial state", () => {
        expect(courseReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
    });

    it("should handle FETCH_COURSE_SUCCESS", () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: courses
        };
        const state = courseReducer(undefined, action);
        const expectedState = fromJS({
            courses: {
                1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
                2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
                3: { id: 3, name: 'React', credit: 40, isSelected: false },
              }
            });
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it("should handle SELECT_COURSE", () => {
        const action = {
            type: SELECT_COURSE,
            index: 2,
        };
        const initialStateWithCourses = fromJS({
            courses: {
              1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
              2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
              3: { id: 3, name: 'React', credit: 40, isSelected: false },
            }
          });
          const state = courseReducer(initialStateWithCourses, action);
          const expectedState = initialStateWithCourses.setIn(['courses', '2', 'isSelected'], true);
          expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it("should handle UNSELECT_COURSE", () => {
        const action = {
            type: UNSELECT_COURSE,
            index: 2,
          };
          const initialStateWithSelectedCourse = fromJS({
            courses: {
              1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
              2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
              3: { id: 3, name: 'React', credit: 40, isSelected: false },
            }
          });
          const state = courseReducer(initialStateWithSelectedCourse, action);
          const expectedState = initialStateWithSelectedCourse.setIn(['courses', '2', 'isSelected'], false);
          expect(state.toJS()).toEqual(expectedState.toJS());
    });
});