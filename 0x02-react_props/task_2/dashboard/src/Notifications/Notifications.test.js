import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  shallow(<Notifications />);
});

test('Notifications renders a list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.unorderedList NotificationItem').length).toBe(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
});

test('Notifications renders the first NotificationItem element with the right type and value', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.unorderedList NotificationItem').first().props()).toEqual({ type: 'default', value: 'New course available' });
});
