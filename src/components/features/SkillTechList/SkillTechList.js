import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styles from './SkillTechList.module.scss';

const SkillTechList = (props) => (
  <div id='techSkills' className={styles.container}>
    <h1 className={styles.title}>{props.title}</h1>
    <div className={styles.flexBox}>
      <div className={styles.skills}>
        <h2>{props.skillTitle}</h2>
        {props.skills.map(skill => (
          <p key={props.skills.indexOf(skill)}>
            {skill.icon === ''
              ? <FontAwesomeIcon icon={faCode} />
              : <FontAwesomeIcon icon={fab[skill.icon]} />}
            {skill.name}
          </p>
        ))}
      </div>
      <div className={styles.techs}>
        <h2>{props.techTitle}</h2>
        {props.techs.map(tech => (
          <p key={props.techs.indexOf(tech)}>
            {tech.icon === ''
              ? <FontAwesomeIcon icon={faCodepen} />
              : <FontAwesomeIcon icon={fab[tech.icon]} />}
            {tech.name}
          </p>
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
