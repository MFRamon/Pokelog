import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from '../../../components/atoms/Container';

Enzyme.configure({ adapter: new Adapter() });

describe('<Container />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toBeTruthy();
  });
});
