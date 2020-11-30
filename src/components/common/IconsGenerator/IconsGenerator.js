import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconsGenerator = ({iconName, iconsList, alternativeIcon, children}) => (
  <p>
    {iconName === '' || iconsList[iconName] === undefined
      ? <FontAwesomeIcon icon={alternativeIcon} />
      : <FontAwesomeIcon icon={iconsList[iconName]} />
    }
    {children}
  </p>
);

IconsGenerator.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconsList: PropTypes.object.isRequired,
  children: PropTypes.node,
  alternativeIcon: PropTypes.object.isRequired,
};

export default IconsGenerator;
