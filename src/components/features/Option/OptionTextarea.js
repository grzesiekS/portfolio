import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

const OptionTextarea = ({value, title, setOptionValue, id, error}) => (
  <label className={styles.textarea}>
    <p className={styles.title}>{title}</p>
    <textarea
      className={error ? styles.error : null}
      value={value || ''}
      onChange={e => setOptionValue(id, e.currentTarget.value)}
    >
    </textarea>
  </label>
);

OptionTextarea.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  setOptionValue: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  error: PropTypes.bool,
};

OptionTextarea.defaultProps = {
  setOptionValue: () => {},
};

export default OptionTextarea;
