/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Layout /> component', () => {
  const createProps = () => ({
    children: <div><p>Test Text</p></div>,
  });

  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
    wrapper = mount(
      <Layout {...props} />,
    );
  });

  describe('<Button /> rendering', () => {
    it('should render correctly', () => {
      expect(wrapper.find('main')).toHaveLength(1);
    });

    it('should render its children', () => {
      expect(wrapper.find('main').props().children.type).toBe('div');
    });
  });
});
