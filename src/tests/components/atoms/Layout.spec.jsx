import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from '../../../components/atoms/Layout';

Enzyme.configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toBeTruthy();
  });
});
