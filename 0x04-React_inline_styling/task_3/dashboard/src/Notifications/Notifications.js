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
                {/* <p>No new notification for now</p> */}
            </div>
        );
    } else if (this.props.listNotifications.length !== 0 && this.props.displayDrawer === true) {
        return (
            <div className={css(styles.menuItem)}>
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
                    <ul className={css(styles.unorderedList)}>
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
        margin: '10px',
    },
    closeImage: {
        width: '20px',
        height: '20px',
    },
    menuItem: {
        // width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // alignContent: 'flex-end'
        alignItems: 'flex-end',
        // justifyContent: 'flex-end'
    },
    notifications: {
        // border: '2px dashed #D93847',
        // padding: '10px',
        // marginBottom: '10px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '2px',
        padding: '0px',
        marginBottom: '10px',
        fontSize: '20px',
        backgroundColor: 'white',
    },
    unorderedList: {
        paddingLeft: '0',
        listStyleType: 'none',
        margin: '0',
        padding: '10px 8px',
        fontSize: '20px',
    }
});

export default Notification;