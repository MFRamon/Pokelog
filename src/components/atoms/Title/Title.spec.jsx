/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Title /> component', () => {
  const createProps = () => ({
    children: 'Test Text',
  });

  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
    wrapper = mount(
      <Title>{props.children}</Title>,
    );
  });

  describe('<Title /> rendering', () => {
    it('should render correctly', () => {
      expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('should render its children', () => {
      expect(wrapper.find('h2').props().children).toBe(props.children);
    });
  });
});
