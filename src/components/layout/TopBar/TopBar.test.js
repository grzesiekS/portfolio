import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

describe('TopBar Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<TopBar />);
    expect(component).toBeTruthy();
  });
});
