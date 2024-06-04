import React from 'react';
import PropTypes from 'prop-types';


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
                style={this.props.type === 'urgent' ? { color: 'red' } : {color: 'blue'}}
                onClick={() => this.props.markAsRead(this.props.id)}
            />
        ) : (
            <li
                data-notification-type={this.props.type}
                style={this.props.type === 'urgent' ? { color: 'red' } : {color: 'blue'}}
                onClick={() => this.props.markAsRead(this.props.id)}
            >
                {this.props.value}
            </li>
        );
    }

    // render() {
    //     return (
    //         <li
    //             data-notification-type={this.props.type}
    //             dangerouslySetInnerHTML={this.props.html}
    //             style={this.props.type === 'urgent' ? { color: 'red' } : {color: 'blue'}}>
    //                 {this.props.value}
    //             onClick={() => this.props.markAsRead(this.props.id)}
    //         </li>
    //     );
    // }
}

export default NotificationItem;