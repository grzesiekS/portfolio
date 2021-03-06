import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AboutMe.module.scss';

import Load from '../../common/Load/Load';

const AboutMe = (props) => {
  
  const {header, description, title} = props.content[0] !== undefined && props.content[0];
  const { loadingStatus } = props;

  useEffect(() => {
    const {getAboutMeData} = props;
    getAboutMeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    loadingStatus === undefined || loadingStatus.active 
      ?
      loadingStatus === undefined || loadingStatus.error ? null : <Load />
      :
      loadingStatus === undefined || loadingStatus.error ? null :
        <div className={styles.container}>
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
