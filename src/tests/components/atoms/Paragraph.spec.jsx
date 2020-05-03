import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraph from '../../../components/atoms/Paragraph';

Enzyme.configure({ adapter: new Adapter() });

describe('<Paragraph />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Paragraph />);
    expect(wrapper).toBeTruthy();
  });
});
