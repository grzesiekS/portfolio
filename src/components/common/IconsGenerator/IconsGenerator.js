import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './IconsGenerator.module.scss';

const IconsGenerator = ({iconName, iconsList, alternativeIcon, children}) => (
  <p className={styles.icon}>
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
