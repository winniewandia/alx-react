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
