import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

const OptionSelect = ({values, currentValue, setOptionValue}) => (
  <div className={styles.select}>
    {values === undefined
      ?
      null
      :
      <select
        value={currentValue}
      >
        {values.map(value => (
          <option
            key={values.indexOf(value)}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
    }
  </div>
);

OptionSelect.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OptionSelect;
