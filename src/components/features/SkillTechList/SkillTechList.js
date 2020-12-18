import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { fab, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styles from './SkillTechList.module.scss';
import IconsGenerator from '../../common/IconsGenerator/IconsGenerator';

const SkillTechList = (props) => {

  useEffect(() => {
    const { fetchSkillTech } = props;
    fetchSkillTech();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {loadingStatus} = props;

  return (
    loadingStatus === undefined || loadingStatus.active || loadingStatus.error
      ?
      null
      :
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
};

SkillTechList.propTypes = {
  skills: PropTypes.array,
  techs: PropTypes.array,
  title: PropTypes.string,
  skillTitle: PropTypes.string,
  techTitle: PropTypes.string,
  fetchSkillTech: PropTypes.func,
  loadingStatus: PropTypes.object,
};

SkillTechList.defaultProps = {
  fetchSkillTech: () => {},
};

export default SkillTechList;
