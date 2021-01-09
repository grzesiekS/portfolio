import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Component Modal', () => {
  it('should render without crashing', () => {
    const component = shallow(<Modal />);
    expect(component).toBeTruthy();
  });
});