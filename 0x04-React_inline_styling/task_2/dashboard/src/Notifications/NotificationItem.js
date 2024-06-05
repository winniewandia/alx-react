import React from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';

class NotificationItem extends React.PureComponent {
    static propTypes = {
        type: PropTypes.string.isRequired,
        html: PropTypes.shape({
            __html: PropTypes.string
        }),
        value: PropTypes.string,
        markAsRead: PropTypes.func,
        id: PropTypes.number
    };

    static defaultProps = {
        type: 'default',
        value: '',
        html: {},
        markAsRead: () => {},
    };

    render() {
        return this.props.html.__html ? (
            <li
                data-notification-type={this.props.type}
                dangerouslySetInnerHTML={this.props.html}
                className={css(this.props.type === 'urgent' ? styles.urgent : styles.default)}
                onClick={() => this.props.markAsRead(this.props.id)}
            />
        ) : (
            <li
                data-notification-type={this.props.type}
                className={css(this.props.type === 'urgent' ? styles.urgent : styles.default)}
                onClick={() => this.props.markAsRead(this.props.id)}
            >
                {this.props.value}
            </li>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
    
});

export default NotificationItem;