import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notification() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul className='unorderedList'>
                <li className='default' data-priority='default'>New course available</li>
                <li className='urgent' data-priority='urgent'>New resume available</li>
                <li className='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button
                style={{position: 'absolute', right: '0', border: 'none', background: 'transparent'}}
                aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}>
                <img src= {closeIcon} alt='Close icon' className='closeImage' />
            </button>
        </div>
    );
}

export default Notification;