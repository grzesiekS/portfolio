import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button =({ children, Type = 'a'}) => {
  return (
    <Type href='/#' className={styles.main} >
      {children}
    </Type>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  Type: PropTypes.string,
};

export default Button;
