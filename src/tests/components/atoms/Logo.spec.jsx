import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from '../../../components/atoms/Logo';

Enzyme.configure({ adapter: new Adapter() });

describe('<Logo />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toBeTruthy();
  });
});
