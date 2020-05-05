/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Logo /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Logo />,
    );
  });

  describe('<Logo /> rendering', () => {
    it('should render correctly', () => {
      expect(wrapper.find('img')).toHaveLength(1);
    });
  });
});
