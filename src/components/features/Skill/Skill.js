import React from 'react';
import PropTypes from 'prop-types';

import styles from './Skill.module.scss';

const Skill = ({skillName}) => (
  <p className={styles.skillText}>{`- ${skillName}`}</p>
);

Skill.propTypes = {
  skillName: PropTypes.string,
};

export default Skill;