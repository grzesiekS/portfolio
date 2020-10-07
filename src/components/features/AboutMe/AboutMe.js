import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutMe.module.scss';

const AboutMe = (props) => {

  const {header, description} = props.content[0];

  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <h1 className={styles.title}>{header}</h1>
        <p className={styles.content}>{description}</p>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default AboutMe;
