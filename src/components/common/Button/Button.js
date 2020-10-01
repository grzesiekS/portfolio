import React from 'react';
import PropTypes from 'prop-types';

const Button =({ children, Type = 'a'}) => {
  return (
    <Type href='/#'>
      {children}
    </Type>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  Type: PropTypes.string,
};

export default Button;
