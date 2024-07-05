import PropTypes from 'prop-types';

const courseShape = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
};

export default courseShape;