/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Container /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Container />,
    );
  });

  describe('<Container /> rendering', () => {
    it('should render correctly', () => {
      expect(wrapper).toHaveLength(1);
    });
  });
});
