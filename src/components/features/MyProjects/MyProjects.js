import React from 'react';
// import PropTypes from 'prop-types';

import styles from './MyProjects.module.scss';

class MyProject extends React.Component {
  render() {
    return(
      <div className={styles.container}>
        <h2>MyProjects section</h2>
      </div>
    );
  }
}

export default MyProject;
