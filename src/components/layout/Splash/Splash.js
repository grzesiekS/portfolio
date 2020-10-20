import React from 'react';
import styles from './Splash.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Splash = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Junior Web Developer</h1>
    <FontAwesomeIcon className={styles.icon}  icon={faLaptopCode} />
    <h2 className={styles.subtitle}>I code websites from scratch</h2>
  </div>
);

export default Splash;
