import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Modal.module.scss';

const Modal = ({msg, type, children}) => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.message, styles[type])}>
        <h2 className={styles.subTitle}>
          Test Message
        </h2>
      </div>
      {children}
    </div>
  );
};

Modal.propTypes = {
  msg: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;