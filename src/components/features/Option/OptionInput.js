import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

const OptionInput = ({inputType, value, title, setOptionValue}) => (
  <label className={styles.input}>
    <p className={styles.title}>{title}</p>
    <input
      type={inputType}
      value={value || ''}
      onChange={e => setOptionValue(e.currentTarget.value)}
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
};

OptionInput.defaultProps = {
  setOptionValue: () => {},
};

export default OptionInput;
