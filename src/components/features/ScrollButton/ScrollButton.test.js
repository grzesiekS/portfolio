import React from 'react';
import { shallow } from 'enzyme';
import ScrollButton from './ScrollButton';

describe('Component ScrollButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<ScrollButton />);
    expect(component).toBeTruthy();
  });
});