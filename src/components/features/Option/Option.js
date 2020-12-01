import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';
import OptionSelect from './OptionSelect';

const optionTypes = {
  select: OptionSelect,
};

const Option = ({type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];

  if(!OptionComponent) return null;
  else {
    return (
      <div className={styles.option}>
        <OptionComponent {...otherProps} />
      </div>
    );
  }

};

Option.propTypes = {
  type: PropTypes.string,
};

export default Option;
