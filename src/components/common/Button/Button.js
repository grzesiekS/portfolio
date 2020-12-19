import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button =({ children, Type = 'a', animation = false, subType, active = true, ...props}) => {
  const classes = [];

  classes.push(styles.main);

  if(animation) classes.push(styles.fadeIn);
  if(!active) classes.push(styles.deactivate);

  switch(subType) {
    case 'icon':
      classes.push(styles.icon);
      break;
    default:
      classes.push(null);
  }

  switch(Type) {
    case 'Link':
      return (
        <Link className={classes.join(' ')} {...props}>
          {children}
        </Link>
      );
    default:
      return (
        <Type className={classes.join(' ')} {...props}>
          {children}
        </Type>
      );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  Type: PropTypes.string,
  animation: PropTypes.bool,
  subType: PropTypes.string,
  active: PropTypes.bool,
};

export default Button;
