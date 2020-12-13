import React from 'react';
import { shallow } from 'enzyme';
import Option from './Option';

describe('Component Option', () => {

  it('should render without crashing', () => {
    const component = shallow(<Option />);
    expect(component).toBeTruthy();
  });
});