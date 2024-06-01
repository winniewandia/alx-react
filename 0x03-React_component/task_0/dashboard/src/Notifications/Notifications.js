import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notification({displayDrawer, listNotifications}) {
    if (listNotifications.length === 0 && displayDrawer === true) {
        return (
            <div className='menuItem'>
                <p>Your notifications</p>
                <p>No new notification for now</p>
            </div>
        );
    } else if (listNotifications.length !== 0 && displayDrawer === true) {
        return (
            <div className='menuItem'>
                <p>Your notifications</p>
                <div className='Notifications'>
                    <div className='buttonP'>
                        <p>Here is the list of notifications</p>
                        <button
                            style={{border: 'none', background: 'transparent'}}
                            aria-label='Close'
                            onClick={() => console.log('Close button has been clicked')}>
                            <img src= {closeIcon} alt='Close icon' className='closeImage' />
                        </button>
                    </div>
                    <ul className='unorderedList'>
                        {listNotifications.map((notification) => (
                            <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    } else {
        return null;
    }
    // return (
    //     <>
    //     <div className='menuItem'>
    //         <p>Your notifications</p>
    //     </div>
    //     {displayDrawer && (
    //     <div className='Notifications'>
    //         <p>Here is the list of notifications</p>
    //         {listNotifications && (
    //         <p>No new notification for now</p>)}
    //         <ul className='unorderedList'>
    //             {listNotifications.map((notification) => (
    //                 <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
    //             ))}
    //         </ul>
    //         <button
    //             style={{position: 'absolute', right: '0', border: 'none', background: 'transparent'}}
    //             aria-label='Close'
    //             onClick={() => console.log('Close button has been clicked')}>
    //             <img src= {closeIcon} alt='Close icon' className='closeImage' />
    //         </button>
    //     </div>)}
    //     </>
    // );
}

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.array
};

Notification.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notification;