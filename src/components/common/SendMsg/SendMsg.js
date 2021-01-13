import React from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './SendMsg.module.scss';

const SendMsg = () => (
  <div className={styles.container}>
    <h2 className={styles.subtitle}>Sending Message</h2>
    <div className={clsx(styles.dot_1, styles.dot)}></div>
    <div className={clsx(styles.dot_2, styles.dot)}></div>
    <div className={clsx(styles.dot_3, styles.dot)}></div>
    <FontAwesomeIcon className={styles.icon} icon={faPaperPlane} />
  </div>
);

export default SendMsg;