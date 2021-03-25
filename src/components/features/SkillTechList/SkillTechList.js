import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { fab, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { getCurrentViewPosition } from '../../../redux/globalSettingsRedux';

import styles from './SkillTechList.module.scss';
import IconsGenerator from '../../common/IconsGenerator/IconsGenerator';
import Load from '../../common/Load/Load';

const SkillTechList = (props) => {
  const {loadingStatus} = props;

  const skillTech = useRef(<></>);

  const [componentTopView, setComponentTopView] = useState(0);
  const [componentBottomView, setComponentBottomView] = useState(0);
  const [componentVisible, setComponentVisibility] = useState(false);

  const currentViewPosition = useSelector(state => getCurrentViewPosition(state));

  useEffect(() => {
    const { fetchSkillTech } = props;
    fetchSkillTech();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(skillTech.current!== null) {
      setComponentTopView((skillTech.current.clientHeight + 200));
      setComponentBottomView(skillTech.current.offsetTop + skillTech.current.clientHeight);
    }

  }, [loadingStatus, componentTopView, componentBottomView]);

  useEffect(() => {
    if(currentViewPosition > componentTopView && currentViewPosition < componentBottomView) {
      if(!componentVisible) {
        setComponentVisibility(true);
      }
    }

  }, [currentViewPosition, componentTopView, componentBottomView, componentVisible]);

  return (
    loadingStatus === undefined || loadingStatus.active || loadingStatus.error
      ?
      loadingStatus === undefined || loadingStatus.error ? null : <Load />
      :
      loadingStatus === undefined || loadingStatus.error ? null :
        <section 
          id='techSkills' 
          className={!componentVisible ? styles.container : clsx(styles.container, styles.visible)} 
          ref={skillTech}
        >
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
