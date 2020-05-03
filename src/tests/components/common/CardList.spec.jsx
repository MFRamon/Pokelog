import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardList from '../../../components/common/CardList';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardList />', () => {
  it('renders component', () => {
    const wrapper = shallow(<CardList />);
    expect(wrapper).toBeTruthy();
  });
});
