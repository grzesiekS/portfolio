import React from 'react';
import PropTypes from 'prop-types';

import { fab, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styles from './SkillTechList.module.scss';
import IconsGenerator from '../../common/IconsGenerator/IconsGenerator';

const SkillTechList = (props) => (
  <div id='techSkills' className={styles.container}>
    <h1 className={styles.title}>{props.title}</h1>
    <div className={styles.flexBox}>
      <div className={styles.skills}>
        <h2>{props.skillTitle}</h2>
        {props.skills.map(skill => (
          <IconsGenerator
            key={props.skills.indexOf(skill)}
            iconName={skill.icon}
            iconsList={fab}
            alternativeIcon={faCode}
          >
            {skill.name}
          </IconsGenerator>
        ))}
      </div>
      <div className={styles.techs}>
        <h2>{props.techTitle}</h2>
        {props.techs.map(tech => (
          <IconsGenerator
            key={props.techs.indexOf(tech)}
            iconName={tech.icon}
            iconsList={fab}
            alternativeIcon={faCodepen}
          >
            {tech.name}
          </IconsGenerator>
        ))}
      </div>
    </div>
  </div>
);

SkillTechList.propTypes = {
  skills: PropTypes.array.isRequired,
  techs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  skillTitle: PropTypes.string.isRequired,
  techTitle: PropTypes.string.isRequired,
};

export default SkillTechList;
