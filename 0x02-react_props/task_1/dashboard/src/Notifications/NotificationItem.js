import React from 'react';

function NotificationItem({type, html, value}) {
    return (
        <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        style={type === 'urgent' ? { color: 'red' } : {color: 'blue'}}>
            {value}
        </li>
    );

}

export default NotificationItem;