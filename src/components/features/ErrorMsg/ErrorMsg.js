import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorMsg.module.scss';

const ErrorMsg = ({title, msg}) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.msg}>{msg}</p>
  </div>
);

ErrorMsg.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string,
};

ErrorMsg.defaultProps = {
  title: `Website You are looking for doesn't exist.`,
  msg: `The entered address is incorrect.`,
};

export default ErrorMsg;