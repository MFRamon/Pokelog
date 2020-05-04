import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../../../components/atoms/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper).toBeTruthy();
  });
});
