import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';

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
            <div className={css(styles.menuItem)}>
                <p>Your notifications</p>
                <p>No new notification for now</p>
            </div>
        );
    } else if (this.props.listNotifications.length !== 0 && this.props.displayDrawer === true) {
        return (
            <div className={css(styles.menuItem)}>
                <p>Your notifications</p>
                <div className={css(styles.notifications)}>
                    <div className={css(styles.buttonP)}>
                        <p>Here is the list of notifications</p>
                        <button
                            style={{border: 'none', background: 'transparent'}}
                            aria-label='Close'
                            onClick={() => console.log('Close button has been clicked')}>
                            <img src= {closeIcon} alt='Close icon' className={css(styles.closeImage)} />
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
}

const styles = StyleSheet.create({
    buttonP: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    closeImage: {
        width: '20px',
        height: '20px',
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "flex-end",
    },
    notifications: {
        border: '2px dashed #D93847',
        padding: '10px',
        marginBottom: '10px',
    }
});

export default Notification;