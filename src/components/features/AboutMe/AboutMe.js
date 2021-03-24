import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { getCurrentViewPosition } from '../../../redux/globalSettingsRedux';

import styles from './AboutMe.module.scss';
import Load from '../../common/Load/Load';

const AboutMe = (props) => {
  
  const {header, description, title} = props.content[0] !== undefined && props.content[0];
  const { loadingStatus } = props;

  const [componentTopView, setComponentTopView] = useState(0);
  const [componentBottomView, setComponentBottomView] = useState(0);
  const [componentVisible, setComponentVisibility] = useState(false);

  const currentViewPosition = useSelector(state => getCurrentViewPosition(state));

  const aboutMe = useRef(<></>);

  useEffect(() => {
    const {getAboutMeData} = props;
    getAboutMeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(aboutMe.current!== null) {
      setComponentTopView((aboutMe.current.clientHeight - 200));
      setComponentBottomView(aboutMe.current.offsetTop + aboutMe.current.clientHeight + 200);
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
    loadingStatus === undefined || loadingStatus.active 
      ?
      loadingStatus === undefined || loadingStatus.error ? null : <Load />
      :
      loadingStatus === undefined || loadingStatus.error ? null :
        <div 
          className={componentVisible ? clsx(styles.container, styles.visible) : styles.container} 
          ref={aboutMe}>
          <div id='aboutMe' className={styles.aboutMe}>
            <h1 className={styles.title}>{header}</h1>
            <p className={styles.subtitle}>{title}</p>
            <p className={styles.content}>{description}</p>
          </div>
        </div>
  );
};

AboutMe.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  getAboutMeData: PropTypes.func,
  loadingStatus: PropTypes.object,
};

AboutMe.defaultProps = {
  getAboutMeData: () => {},
};

export default AboutMe;
