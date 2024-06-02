import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import courseShape from './CourseShape';
import propTypes from 'prop-types';

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
                <table id='CourseList'>
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell='Available courses'/>
                        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit' style={{textAlign: 'left !important'}}/>
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
    // return (
    //     <div className='course-list'>
    //         <table id='CourseList'>
    //         <thead>
    //             <CourseListRow isHeader={true} textFirstCell='Available courses'/>
    //             <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell='Credit' style={{textAlign: 'left !important'}}/>
    //         </thead>
    //         <tbody>
    //             {listCourses.length === 0 ? <CourseListRow textFirstCell="No course available yet" textSecondCell={null} isHeader={false}/> : listCourses.map((course) => {
    //                 <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
    //             })
    //             }
    //         </tbody>
    //     </table>
    //     </div>
    // );
}

CourseList.propTypes = {
    listCourses: propTypes.arrayOf(propTypes.shape(courseShape))
};

export default CourseList;