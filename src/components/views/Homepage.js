import React from 'react';
import AboutMe from '../features/AboutMe/AboutMeContainer';
import SkillTechList from '../features/SkillTechList/SkillTechListContainer';
import MyProjects from '../features/MyProjects/MyProjectsContainer';

const Homepage = () => (
  <div>
    <AboutMe />
    <SkillTechList />
    <MyProjects />
  </div>
);

export default Homepage;
