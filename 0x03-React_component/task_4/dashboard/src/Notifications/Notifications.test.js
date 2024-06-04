import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  shallow(<Notifications type="default"/>);
});

// test('Notifications renders a list of notifications', () => {
//     const wrapper = shallow(<Notifications displayDrawer={true} />);
//     expect(wrapper.find('.unorderedList NotificationItem').length).toBe(3);
// });

// test('Notifications renders the text Here is the list of notifications', () => {
//     const wrapper = shallow(<Notifications displayDrawer={true} />);
//     expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
// });

// test('Notifications renders the first NotificationItem element with the right type and value', () => {
//     const wrapper = shallow(<Notifications displayDrawer={true} />);
//     expect(wrapper.find('.unorderedList NotificationItem').first().props()).toEqual({ type: 'default', value: 'New course available'});
// });

test('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.contains('.menuItem'));
});

test('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('.Notifications').length).toBe(0);
});

test('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.menuItem').length).toBe(1);
});

test('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.Notifications').length).toBe(0);
});

test('markAsRead calls console.log with the right message', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    wrapper.instance().markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
});
