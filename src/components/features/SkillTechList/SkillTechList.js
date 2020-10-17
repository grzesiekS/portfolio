import React from 'react';
import PropTypes from 'prop-types';

import styles from './SkillTechList.module.scss';
import Skill from '../Skill/Skill';
import Techs from '../Techs/Techs';

const SkillTechList = (props) => (
  <div id='techSkills' className={styles.container}>
    <h1 className={styles.title}>Skills and Technologies</h1>
    <div className={styles.skills}>
      {props.skills.map(skill => (
        <Skill key={props.skills.indexOf(skill)} skillName={skill} />
      ))}
    </div>
    <div>
      {props.techs.map(tech => (
        <Techs key={props.techs.indexOf(tech)} techName={tech.techName}/>
      ))}
    </div>
  </div>
);

SkillTechList.propTypes = {
  skills: PropTypes.array,
  techs: PropTypes.array,
};

export default SkillTechList;