import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Component button', () => {
  it('should render without crashing', () => {
    const component = shallow(<Button />);
    expect(component).toBeTruthy();
  });

  it('should render component with with class fadeIn', () => {
    const component = shallow(<Button animation={true} />);
    expect(component.hasClass('fadeIn')).toBe(true);
  });

  it('should render as div component', () => {
    const component = shallow(<Button Type={'div'} />);
    expect(component.find('div')).toBeTruthy();
  });
});
