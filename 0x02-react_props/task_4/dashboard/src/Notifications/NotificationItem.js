import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type = 'default', html, value}) {
    return (
        <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        style={type === 'urgent' ? { color: 'red' } : {color: 'blue'}}>
            {value}
        </li>
    );

}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string
};

// NotificationItem.defaultProps = {
//     type: 'default',
//     value: '',
//     html: {}
// };

export default NotificationItem;