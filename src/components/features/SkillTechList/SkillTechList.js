import React from 'react';
import PropTypes from 'prop-types';

import styles from './SkillTechList.module.scss';

const SkillTechList = (props) => (
  <div id='techSkills' className={styles.container}>
    <h1 className={styles.title}>Skills and Technologies</h1>
    <div className={styles.flexBox}>
      <div className={styles.skills}>
        {props.skills.map(skill => (
          <p key={props.skills.indexOf(skill)}>
            {skill.name}
          </p>
        ))}
      </div>
      <div className={styles.techs}>
        {props.techs.map(tech => (
          <p key={props.techs.indexOf(tech)}>
            {tech.name}
          </p>
        ))}
      </div>
    </div>
  </div>
);

SkillTechList.propTypes = {
  skills: PropTypes.array,
  techs: PropTypes.array,
};

export default SkillTechList;