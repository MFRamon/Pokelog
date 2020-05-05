/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button /> component', () => {
  const createProps = () => ({
    children: 'Test Text',
    onClick: jest.fn(),
  });

  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
    wrapper = mount(
      <Button {...props} />,
    );
  });

  describe('<Button /> rendering', () => {
    it('should render correctly', () => {
      console.log(wrapper.debug());
      expect(wrapper).toHaveLength(1);
    });

    it('should render its children', () => {
      expect(wrapper.find('Button').props().children).toBe(props.children);
    });
  });

  describe('<Button /> interactions', () => {
    it('should handle the onClick prop', () => {
      wrapper.find('Button').simulate('click');
      expect(props.onClick.mock.calls.length).toEqual(1);
    });
  });
});
