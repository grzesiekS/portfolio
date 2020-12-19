import React from 'react';
import { shallow } from 'enzyme';
import Swipeable from './Swipeable';

describe('Swipeable component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Swipeable />);
    expect(component).toBeTruthy();
  });
});