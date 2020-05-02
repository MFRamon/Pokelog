import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../../components/atoms/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toBeTruthy();
  });
});
