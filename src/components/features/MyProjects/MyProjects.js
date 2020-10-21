import React from 'react';
import PropTypes from 'prop-types';

import styles from './MyProjects.module.scss';

class MyProject extends React.Component {
  render() {

    const {title, description} = this.props;

    return(
      <div className={styles.container}>
        <div id='myProjects' className={styles.myProjects}>
          <h1 className={styles.title}>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

MyProject.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MyProject;