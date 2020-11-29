import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import styles from './MyProjects.module.scss';
import Project from '../Project/Project';
import Button from '../../common/Button/Button';

class MyProjects extends React.Component {
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

  nextPage = () => {
    const pagesCount = Math.ceil(this.props.projects.length / this.state.projectsOnPage);

    this.setState({
      ...this.state,
      activePage:
        this.state.activePage >= pagesCount- 1
          ? this.state.activePage
          : this.state.activePage + 1,
    });
  }

  previousPage = () => {
    this.setState({
      ...this.state,
      activePage: this.state.activePage === 0 ? 0 : this.state.activePage - 1,
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
            <Button
              Type='div'
              subType='icon'
              onClick={() => this.previousPage()}
            >
              <FontAwesomeIcon
                icon={faCaretSquareLeft}
                className={styles.changeIconLeft}
              />
            </Button>
            {numbers.map(number => (
              number
            ))}
            <Button
              Type='div'
              subType='icon'
              onClick={() => this.nextPage()}
            >
              <FontAwesomeIcon
                icon={faCaretSquareRight}
                className={styles.changeIconRight}
              />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

MyProjects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.array,
  globalLanguage: PropTypes.string,
};

export default MyProjects;
