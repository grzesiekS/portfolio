import React from 'react';
import { shallow } from 'enzyme';
import AboutMe from './AboutMe';

describe('AboutMe component',() => {
  const content = [{
    header: 'test',
    description: 'test2',
  }];

  it('should render without crashing', () => {
    const component = shallow(<AboutMe  content={content} />);
    expect(component).toBeTruthy();
  });

  it('should have header and description props', () => {
    const component = shallow(<AboutMe  content={content} />);
    expect(component.find('.title').text()).toEqual('test');
    expect(component.find('.content').text()).toEqual('test2');
  });

  it('should throw an Error without content props', () => {
    expect(() => shallow(<AboutMe />)).toThrow();
  });
});
