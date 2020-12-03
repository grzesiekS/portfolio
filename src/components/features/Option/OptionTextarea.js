import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

const OptionTextarea = ({value, title, setOptionValue}) => (
  <label className={styles.textarea}>
    <p className={styles.title}>{title}</p>
    <textarea
      value={value || ''}
      onChange={e => setOptionValue(e.currentTarget.value)}
    >
    </textarea>
  </label>
);

OptionTextarea.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  setOptionValue: PropTypes.func,
};

OptionTextarea.defaultProps = {
  setOptionValue: () => {},
};

export default OptionTextarea;
