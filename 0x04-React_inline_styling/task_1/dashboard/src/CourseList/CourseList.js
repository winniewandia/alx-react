import React from 'react';
import CourseListRow from './CourseListRow';
import courseShape from './CourseShape';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseList({listCourses = []}) {
    if (!listCourses.length) {
        return (
            <div className='course-list'>
                <table id='CourseList'>
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell='Available courses'/>
                        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit' style={{textAlign: 'left !important'}}/>
                    </thead>
                    <tbody>
                        <CourseListRow textFirstCell="No course available yet" textSecondCell={null} isHeader={false}/>
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div className='course-list'>
                <table className={css(styles.courseList)}>
                    <thead className={css(styles.theHead)}>
                        <CourseListRow isHeader={true} textFirstCell='Available courses'/>
                        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit'/>
                    </thead>
                    <tbody>
                        {listCourses.map((course) => {
                            return <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

CourseList.propTypes = {
    listCourses: propTypes.arrayOf(propTypes.shape(courseShape))
};

const styles = StyleSheet.create({
    courseList: {
        border: '1px solid #9b9797',
        width: '95%',
        marginTop: '20px',
        marginLeft: '30px',
    },
    theHead: {
        border: '1px solid #9b9797',
    }
});

export default CourseList;