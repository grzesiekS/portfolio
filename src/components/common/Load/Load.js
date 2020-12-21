import React from 'react';

import styles from './Load.module.scss';

const Load = () => (
  <div className={styles.container}>
    <div className={styles.loadRing}></div>
  </div>
);

export default Load;