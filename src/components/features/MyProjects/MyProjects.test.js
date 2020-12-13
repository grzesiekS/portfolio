import React from 'react';
import { shallow } from 'enzyme';
import MyProjects from './MyProjects';

describe('Component MyProjects', () => {
  
  it('should render without crashing', () => {
    const component = shallow(<MyProjects />);
    expect(component).toBeTruthy();
  });
});