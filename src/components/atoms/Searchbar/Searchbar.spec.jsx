/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Searchbar from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Searchbar /> component', () => {
  const createProps = () => ({
    value: 'Test Text',
    handleChange: jest.fn(),
  });

  let wrapper;
  let props;

  beforeEach(() => {
    props = createProps();
    wrapper = mount(
      <Searchbar {...props} />,
    );
  });

  describe('<Searchbar /> rendering', () => {
    it('should render correctly', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should render value prop correctly', () => {
      expect(wrapper.find('input').props().value).toBe(props.value);
    });

    it('should render placeholder prop correctly', () => {
      expect(wrapper.find('input').props().placeholder).toBe('Search for Pokemons');
    });

    it('should render type prop correctly', () => {
      expect(wrapper.find('input').props().type).toBe('text');
    });
  });

  describe('<Searchbar /> interactions', () => {
    it('should handle the onClick prop', () => {
      wrapper.find('input').simulate('change');
      expect(props.handleChange.mock.calls.length).toEqual(1);
    });
  });
});
