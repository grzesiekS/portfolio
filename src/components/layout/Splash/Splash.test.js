import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash';

describe('Splash component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Splash />);
    expect(component).toBeTruthy();
  });
});
