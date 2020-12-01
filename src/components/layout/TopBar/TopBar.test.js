import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

const list = [];

describe('TopBar Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<TopBar languageList={list} />);
    expect(component).toBeTruthy();
  });

  it('should throw error when no languageList props', () => {
    expect(() => shallow(<TopBar />)).toThrow();
  });
});
