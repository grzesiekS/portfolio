import React from 'react';
import { shallow } from 'enzyme';
import ErrorMsg from './ErrorMsg';

describe('Component ErrorMsg', () => {

  it('should render without crashing', () => {
    const component = shallow(<ErrorMsg />);
    expect(component).toBeTruthy();
  });
});