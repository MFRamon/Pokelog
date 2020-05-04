import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cards from '../../../components/common/Cards';

Enzyme.configure({ adapter: new Adapter() });

describe('<Cards />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper).toBeTruthy();
  });
});
