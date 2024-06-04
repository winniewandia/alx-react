import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('shallowing the component should render correctly the children and one h2 element', () => {
    const wrapper = shallow(
        <BodySectionWithMarginBottom title='Title'>
        <p>Paragraph</p>
        </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('Title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('Paragraph');
});
