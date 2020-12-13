import React from 'react';
import { shallow } from 'enzyme';
import IconsGenerator from './IconsGenerator';

describe('Component IconsGenerator', () => {

  const iconName = 'iconTest';
  const iconsList = {};
  const alternativeIcon = {};

  it('should render without crashing', () => {
    const component = shallow(<IconsGenerator iconName={iconName} iconsList={iconsList} alternativeIcon={alternativeIcon} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without props', () => {
    expect(() => shallow(<IconsGenerator />)).toThrow();
  });
});