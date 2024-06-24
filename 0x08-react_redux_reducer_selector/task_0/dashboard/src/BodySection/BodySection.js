import React from 'react';
import PropTypes from 'prop-types';
// import { StyleSheet, css } from 'aphrodite';

function BodySection({ children, title }) {
  return (
    <div className='bodySection'>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

// const styles = StyleSheet.create({
//   bodySection: {
//     marginLeft: '50px',
//   }
// });

export default BodySection;