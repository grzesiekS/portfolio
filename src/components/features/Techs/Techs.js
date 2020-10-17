import React from 'react';
import PropTypes from 'prop-types';

import styles from './Techs.module.scss';

const Techs = (props) => (
  <div className={styles.container}>
    <p>{props.techName}</p>
  </div>
);

Techs.propTypes = {
  techName: PropTypes.string,
};

export default Techs;