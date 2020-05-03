import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Aside from '../../../components/atoms/Aside';

Enzyme.configure({ adapter: new Adapter() });

describe('<Aside />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Aside />);
    expect(wrapper).toBeTruthy();
  });
});
