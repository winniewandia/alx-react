import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

describe("courseReducer", () => {
    const initialState = [];
    it("should return the initial state", () => {
        expect(courseReducer(undefined, {})).toEqual(initialState);
    });

    it("should handle FETCH_COURSE_SUCCESS", () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                    id: 1,
                    name: "ES6",
                },
                {
                    id: 2,
                    name: "Webpack",
                },
            ],
        };
        const state = courseReducer(undefined, action);
        expect(state).toEqual([
            {
                id: 1,
                name: "ES6",
                isSelected: false,
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
            },
        ]);
    });

    it("should handle SELECT_COURSE", () => {
        const action = {
            type: SELECT_COURSE,
            index: 1,
        };
        const state = courseReducer([
            {
                id: 1,
                name: "ES6",
                isSelected: false,
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
            },
        ], action);
        expect(state).toEqual([
            {
                id: 1,
                name: "ES6",
                isSelected: true,
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
            },
        ]);
    });

    it("should handle UNSELECT_COURSE", () => {
        const action = {
            type: UNSELECT_COURSE,
            index: 1,
        };
        const state = courseReducer([
            {
                id: 1,
                name: "ES6",
                isSelected: true,
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
            },
        ], action);
        expect(state).toEqual([
            {
                id: 1,
                name: "ES6",
                isSelected: false,
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
            },
        ]);
    });
});