import React from 'react';
import { shallow } from 'enzyme';
import SkillTechList from './SkillTechList';

const props = {
  skills: [
    {
      name: 'test',
    },
  ],
  techs: [
    {
      name: 'test2',
    },
  ],
  title: 'titleTest',
  skillTitle: 'skillTitleTest',
  techTitle: 'techTitleTest',
};

describe('SkillTechList component', () => {
  it('should render without crashing', () => {
    const component = shallow(<SkillTechList {...props} />);
    expect(component).toBeTruthy();
  });
});
