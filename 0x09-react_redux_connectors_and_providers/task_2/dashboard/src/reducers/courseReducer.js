import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map, fromJS } from "immutable";
import coursesNormalizer from "../schema/courses";

const initialState = Map({
    courses: Map(),
});

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
        const normalizeData = coursesNormalizer(action.data);
        const coursesWithSelection = Object.keys(normalizeData.entities.courses).reduce((acc, key) => {
            acc[key] = { ...normalizeData.entities.courses[key], isSelected: false };
            return acc;
        
        }, {});
        return state.set("courses", fromJS(coursesWithSelection));
    
    case SELECT_COURSE:
        return state.setIn(["courses", action.index.toString(), "isSelected"], true);

    case UNSELECT_COURSE:
        return state.setIn(["courses", action.index.toString(), "isSelected"], false);

    default:
        return state;
  }
};