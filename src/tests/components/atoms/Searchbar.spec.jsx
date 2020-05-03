import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Searchbar from '../../../components/atoms/Searchbar';

Enzyme.configure({ adapter: new Adapter() });

describe('<Searchbar />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Searchbar />);
    expect(wrapper).toBeTruthy();
  });
});
