import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.displayDrawer = this.props.displayDrawer;
        this.listNotifications = this.props.listNotifications;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    static propTypes = {
        displayDrawer: PropTypes.bool,
        listNotifications: PropTypes.array
    };

    static defaultProps = {
        displayDrawer: false,
        listNotifications: []
    };

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
    if (this.props.listNotifications.length === 0 && this.props.displayDrawer) {
        return (
            <div className='menuItem'>
                <p>Your notifications</p>
                <p>No new notification for now</p>
            </div>
        );
    } else if (this.props.listNotifications.length !== 0 && this.props.displayDrawer === true) {
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
                        {this.props.listNotifications.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                id={notification.id}
                                type={notification.type}
                                value={notification.value}
                                html={notification.html}
                                markAsRead={this.markAsRead}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    } else {
        return null;
    }
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

export default Notification;