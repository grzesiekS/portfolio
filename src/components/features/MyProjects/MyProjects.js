import React from 'react';
import PropTypes from 'prop-types';

import styles from './MyProjects.module.scss';
import Project from '../Project/Project';

class MyProject extends React.Component {
  render() {

    const {title, description, projects, globalLanguage} = this.props;

    return(
      <div className={styles.container}>
        <div id='myProjects' className={styles.myProjects}>
          <h1 className={styles.title}>{title}</h1>
          <p>{description}</p>
          <div className={styles.flexBox}>
            {projects.map(project => (
              <Project key={project._id} globalLanguage={globalLanguage} {...project} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

MyProject.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.array,
  globalLanguage: PropTypes.string,
};

export default MyProject;
