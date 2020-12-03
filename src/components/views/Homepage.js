import React from 'react';
import AboutMe from '../features/AboutMe/AboutMeContainer';
import SkillTechList from '../features/SkillTechList/SkillTechListContainer';
import MyProjects from '../features/MyProjects/MyProjectsContainer';
import Splash from '../layout/Splash/Splash';

const Homepage = () => (
  <div>
    <Splash />
    <AboutMe />
    <SkillTechList />
    <MyProjects />
  </div>
);

export default Homepage;
