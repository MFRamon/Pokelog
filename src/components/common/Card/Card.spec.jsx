/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Card /> component', () => {
  const createProps = () => ({
    name: 'Test name',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    onClick: jest.fn(),
  });

  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
    wrapper = mount(<Card {...props} />);
  });

  describe('<Card /> rendering', () => {
    it('should render correctly', () => {
      expect(wrapper).toHaveLength(1);
    });

    // it('should render its children', () => {
    //   expect(wrapper.find('Button').props().children).toBe(props.children);
    // });
  });

  // describe('<Card /> interactions', () => {
  //   it('should handle the onClick prop', () => {
  //     wrapper.find('Button').simulate('click');
  //     expect(props.onClick.mock.calls.length).toEqual(1);
  //   });
  // });
});
