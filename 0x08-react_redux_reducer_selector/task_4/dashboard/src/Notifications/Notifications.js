import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';

class Notification extends React.PureComponent {
    constructor(props) {
        super(props);
        this.listNotifications = this.props.listNotifications;
        this.displayDrawer = this.props.displayDrawer;
        this.handleDisplayDrawer = this.props.handleDisplayDrawer;
        this.handleHideDrawer = this.props.handleHideDrawer;
        this.markNotificationAsRead = this.props.markNotificationAsRead;
        // this.markAsRead = this.markAsRead.bind(this);
    }

    // onMouseEnter = () => {
    //     this.timer = setTimeout(() => {
    //         this.setState({ displayDrawer: true });
    //     }, 500);
    // }

    // onClose = () => {
    //     this.setState({displayDrawer: false});
    // }

    static propTypes = {
        displayDrawer: PropTypes.bool,
        listNotifications: PropTypes.array,
        handleDisplayDrawer: PropTypes.func,
        handleHideDrawer: PropTypes.func,
        markNotificationAsRead: PropTypes.func
    };

    static defaultProps = {
        displayDrawer: false,
        listNotifications: [],
        handleDisplayDrawer: () => {},
        handleHideDrawer: () => {},
        markNotificationAsRead: () => {}
    };

    render() {
        if (this.props.listNotifications.length === 0) {
            return (
                <div className={css(styles.menuItemNull)}>
                    <p>No new notification for now</p>
                </div>
            );
        } else {
        return (
            <div
                className={css(styles.menuItem)}
            >
                <p onClick={this.props.handleDisplayDrawer}>Your notifications</p>
                {this.props.displayDrawer && this.props.listNotifications.length > 0 && (
                    <>
                    <div className={css(styles.overlay)}>
                    <div className={css(styles.notifications)}>
                        <div className={css(styles.buttonP)}>
                            <p>Here is the list of notifications</p>
                            <button
                                style={{border: 'none', background: 'transparent'}}
                                aria-label='Close'
                                onClick={() => this.props.handleHideDrawer()}
                            >
                                <img src={closeIcon} alt='Close icon' className={css(styles.closeImage)} />
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
                                    markAsRead={(id) => this.props.markNotificationAsRead(id)}
                                />
                            ))}
                        </ul>
                    </div>
                    </div>
                    </>
                )}
            </div>
        );
    }
    }
}

const opacityKeyframes = {
    'from': {
        opacity: 0,
    },
    'to': {
        opacity: 1,
    }
};

const translateKeyframes = {
    '0%': {
        transform: 'translateY(0px)',
    },
    '50%': {
        transform: 'translateY(-5px)',
    },
    '100%': {
        transform: 'translateY(5px)',
    }
};

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
        float: 'right',
        backgroundColor: '#fff8f8',
        pointer: 'cursor',
        ':hover': {
            animationName: [opacityKeyframes, translateKeyframes],
            animationDuration: '1s, 500ms',
            animationIterationCount: '3s',
        }
    },

    menuItemNull: {
        float: 'right',
        backgroundColor: '#fff8f8',
        pointer: 'cursor',
        ':hover': {
            animationName: [opacityKeyframes, translateKeyframes],
            animationDuration: '1s, 500ms',
            animationIterationCount: '3s',
        }
    },

    notifications: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '600px',
        backgroundColor: 'white',
        border: '2px dashed black',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 2,
        // border: '2px dashed black',
        // padding: '10px',
        // marginBottom: '10px',
        // display: 'flex',
        // alignSelf: 'center',
        // position: 'absolute',
        // // position: 'fixed',
        // top: '25%',
        // left: '25%',
        // right: '25%',
        // width: '100%',
        // height: '100%',
        // border: '2px',
        // padding: '0px',
        // marginBottom: '10px',
        // fontSize: '20px',
        // backgroundColor: 'white',
    },

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 1,
    },

    // unorderedList: {
    //     paddingLeft: '0',
    //     listStyleType: 'none',
    //     margin: '0',
    //     padding: '10px 8px',
    //     fontSize: '20px',
    // }
});

export default Notification;