import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

const OptionInput = ({inputType, value, title, setOptionValue, id, error}) => (
  <label className={styles.input}>
    <p className={styles.title}>{title}</p>
    <input
      className={error ? styles.error : null}
      type={inputType}
      value={value || ''}
      onChange={e => setOptionValue(id, e.currentTarget.value)}
    ></input>
  </label>
);

OptionInput.propTypes = {
  inputType: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string,
  setOptionValue: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  error: PropTypes.bool,
};

OptionInput.defaultProps = {
  setOptionValue: () => {},
};

export default OptionInput;
