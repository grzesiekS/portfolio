import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('Component Project', () => {
  it('should render without crashing', () => {
    const component = shallow(<Project />);
    expect(component).toBeTruthy();
  });
});