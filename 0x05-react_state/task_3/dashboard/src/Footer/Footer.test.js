import Footer from "./Footer";
import { shallow } from "enzyme";
import React from 'react';

test('Footer renders without crashing', () => {
    shallow(<Footer />);
});

test('Footer renders copyright text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').text()).toContain('Copyright');
});

test('Footer renders Contact us text when user is logged in', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').text()).not.toContain('Contact us');
});
