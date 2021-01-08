import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Modal.module.scss';

const Modal = ({msg, type}) => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.message, styles[type])}>
        <h2 className={styles.subTitle}>
          {msg}
        </h2>
      </div>
    </div>
  );
};

Modal.propTypes = {
  msg: PropTypes.string,
  type: PropTypes.string,
};

export default Modal;