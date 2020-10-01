import React from 'react';
import styles from './Splash.module.scss';

const Splash = () => (
  <header className={styles.root}>
    <div className={styles.container}>
      <h1 className={styles.title}>Front-end Developer</h1>
      <h2>I code websites from scratches</h2>
    </div>
  </header>
);

export default Splash;
