import React from 'react';
import PropTypes from 'prop-types';

function BodySection({ children, title }) {
  return (
    <div className="bodySection">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default BodySection;