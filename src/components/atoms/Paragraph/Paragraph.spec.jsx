/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraph from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Paragraph /> component', () => {
  const createProps = () => ({
    children: 'Test Text',
  });

  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
    wrapper = mount(
      <Paragraph>{props.children}</Paragraph>,
    );
  });

  describe('<Paragraph /> rendering', () => {
    it('should render correctly', () => {
      expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should render its children', () => {
      expect(wrapper.find('p').props().children).toBe(props.children);
    });
  });
});
