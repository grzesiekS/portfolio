import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { fab, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styles from './SkillTechList.module.scss';
import IconsGenerator from '../../common/IconsGenerator/IconsGenerator';
import Load from '../../common/Load/Load';

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
      loadingStatus === undefined || loadingStatus.error ? null : <Load />
      :
      loadingStatus === undefined || loadingStatus.error ? null :
        <section id='techSkills' className={styles.container}>
          <h1 className={styles.title}>{props.title}</h1>
          <div className={styles.flexBox}>
            <article className={styles.skills}>
              <h2 className={styles.subtitle}>{props.skillTitle}</h2>
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
            </article>
            <article className={styles.techs}>
              <h2 className={styles.subtitle}>{props.techTitle}</h2>
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
            </article>
          </div>
        </section>
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
