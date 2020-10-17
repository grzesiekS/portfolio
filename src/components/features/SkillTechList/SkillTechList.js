import React from 'react';
import PropTypes from 'prop-types';

import styles from './SkillTechList.module.scss';
import Skill from '../Skill/Skill';

const SkillTechList = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Skills and Technologies</h1>
    {props.skills.map(skill => (
      <Skill key={props.skills.indexOf(skill)} skillName={skill} />
    ))}
  </div>
);

SkillTechList.propTypes = {
  skills: PropTypes.array,
};

export default SkillTechList;