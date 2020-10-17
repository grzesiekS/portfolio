import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button =({ children, Type = 'a', animation = false, ...props}) => {
  const classes = [];

  classes.push(styles.main);

  if(animation) classes.push(styles.fadeIn);

  return (
    <Type className={classes.join(' ')} {...props}>
      {children}
    </Type>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  Type: PropTypes.string,
  animation: PropTypes.bool,
};

export default Button;
