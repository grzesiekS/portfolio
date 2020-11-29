import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyProjects.module.scss';
import Project from '../Project/Project';

class MyProject extends React.Component {
  state = {
    activePage: 0,
    projectsOnPage: 3,
  }

  changeActivePage = (pageNumber) => {
    this.setState({
      ...this.state,
      activePage: pageNumber,
    });
  }

  render() {

    const {title, description, projects, globalLanguage} = this.props;

    const pagesCount = Math.ceil(projects.length / this.state.projectsOnPage);
    const numbers = [];

    for(let i = 0; i < pagesCount; i++) {
      numbers.push(
        <p
          key={i}
          className={this.state.activePage === i ? clsx(styles.pageNumber, styles.active) : styles.pageNumber}
          onClick={() => this.changeActivePage(i)}
        >
          {i + 1}
        </p>
      );
    }

    return(
      <div className={styles.container}>
        <div id='myProjects' className={styles.myProjects}>
          <h1 className={styles.title}>{title}</h1>
          <p>{description}</p>
          <div className={styles.flexBox}>
            {projects
              .slice(this.state.activePage * this.state.projectsOnPage, (this.state.activePage + 1) * this.state.projectsOnPage)
              .map(project => (
                <Project key={project._id} globalLanguage={globalLanguage} {...project} />
              ))}
          </div>
          <div className={styles.pageNav}>
            {numbers.map(number => (
              number
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
