import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

const OptionTextarea = ({value, title, setOptionValue}) => (
  <label>
    {title}
    <textarea
      value={value || ''}
      onChange={e => setOptionValue(e.currentTarget.value)}
      className={styles.textarea}
    >
    </textarea>
  </label>
);

OptionTextarea.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OptionTextarea;
