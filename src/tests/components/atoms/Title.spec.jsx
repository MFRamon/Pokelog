import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../../../components/atoms/Title';

Enzyme.configure({ adapter: new Adapter() });

describe('<Title />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toBeTruthy();
  });
});
