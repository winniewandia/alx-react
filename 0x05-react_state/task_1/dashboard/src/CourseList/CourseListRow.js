import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';


function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    return (
        <tr className={css(isHeader ? styles.headerRowStyle : styles.rowStyle)}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan="2">{textFirstCell}</th>
                ): (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            ): (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: '#f5f5f5ab',
    },
    headerRowStyle: {
        backgroundColor: '#deb5b545',
    },
});

export default CourseListRow;
