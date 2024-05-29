import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import {Fragment} from 'react';

function Notification({displayDrawer = false}) {
    return (
        <>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer && (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul className='unorderedList'>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
            </ul>
            <button
                style={{position: 'absolute', right: '0', border: 'none', background: 'transparent'}}
                aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}>
                <img src= {closeIcon} alt='Close icon' className='closeImage' />
            </button>
        </div>)}
        </>
    );
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool
};

// Notification.defaultProps = {
//     displayDrawer: false
// };

export default Notification;