import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../../../components/common/Card';

Enzyme.configure({ adapter: new Adapter() });

describe('<Card />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toBeTruthy();
  });
});
