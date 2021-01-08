import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faSurprise } from '@fortawesome/free-solid-svg-icons';

import styles from './Modal.module.scss';

const Modal = ({type, display, msg, children}) => {

  const handleIconTypeSelection = type => {
    if (type === 'success') return faThumbsUp;
    if (type === 'error') return faSurprise;
  };

  return (
    <div className={styles.container}>
      <div className={clsx(styles.message, styles[type])}>
        <FontAwesomeIcon className={styles.icon} icon={handleIconTypeSelection(type)} />
        <h2 className={styles.subTitle}>
          {msg}
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
  display: PropTypes.bool,
};

export default Modal;