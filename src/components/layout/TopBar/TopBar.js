import React from 'react';
import Button from '../../common/Button/Button';
import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.container}>
    <div className={styles['flex-box']}>
      <Button>
        Contact Me
      </Button>
    </div>
  </div>
);

export default TopBar;
