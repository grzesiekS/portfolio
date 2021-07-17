import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import styles from './MyProjects.module.scss';
import Project from '../Project/ProjectContainer';
import Button from '../../common/Button/Button';
import Swipeable from '../Swipeable/Swipeable';
import Load from '../../common/Load/Load';

class MyProjects extends React.Component {
  state = {
    activePage: 0,
    projectsOnPage: 3,
    activePreviusPage: false,
    activeNextPage: true,
    componentTopView: 0,
    componentBottomView: 0,
    componentVisible: false,
  }

  myProjects = React.createRef();

  setComponentTopView = offsetPosition => {
    this.setState({
      componentTopView: offsetPosition,
    });
  }

  setComponentBottomView = offsetPosition => {
    this.setState({
      componentBottomView: offsetPosition,
    });
  }

  setComponentVisible = () => {
    this.setState({
      componentVisible: true,
    });
  }

  changeActivePage = (pageNumber) => {
    const pagesCount = Math.ceil(this.props.projects.length / this.state.projectsOnPage);

    this.setState({
      ...this.state,
      activePage: pageNumber,
      activePreviusPage: pageNumber > 0 ? true : false,
      activeNextPage: pageNumber < pagesCount - 1 ? true : false,
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
      activePreviusPage: true,
      activeNextPage: this.state.activePage >= pagesCount- 2 ? false : true,
    });
  }

  previousPage = () => {
    this.setState({
      ...this.state,
      activePage: this.state.activePage === 0 ? 0 : this.state.activePage - 1,
      activeNextPage: true,
      activePreviusPage: this.state.activePage - 1 <= 0 ? false : true,
    });
  }

  componentDidMount() {
    const {getProjectsData} = this.props;

    getProjectsData();
  }

  componentDidUpdate() {
    const {currentViewPosition} = this.props;

    if(this.myProjects.current !== null && this.state.componentTopView !== this.myProjects.current.offsetTop - 500) {
      this.setComponentTopView(this.myProjects.current.offsetTop - 500);
    }

    if(this.myProjects.current !== null 
    && this.state.componentBottomView !== this.myProjects.current.offsetTop + this.myProjects.current.clientHeight) {
      this.setComponentBottomView(this.myProjects.current.offsetTop + this.myProjects.current.clientHeight);
    }

    if(currentViewPosition > this.state.componentTopView 
      && currentViewPosition < this.state.componentBottomView
      && !this.state.componentVisible) {
      this.setComponentVisible();
    }
  }

  render() {

    const {title, description, projects, globalLanguage, loadingStatus} = this.props;

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
      loadingStatus === undefined || loadingStatus.active
        ?
        loadingStatus === undefined || loadingStatus.error ? null : <Load />
        :
        loadingStatus === undefined || loadingStatus.error ? null :
          <div className={this.state.componentVisible ? clsx(styles.container, styles.visible) : styles.container} ref={this.myProjects}>
            <div id='myProjects' className={styles.myProjects}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
              {numbers.length > 1
                ?
                <div className={styles.pageNav}>
                  <Button
                    Type='div'
                    subType='icon'
                    onClick={() => this.previousPage()}
                    active={this.state.activePreviusPage}
                  >
                    <FontAwesomeIcon
                      icon={faCaretSquareLeft}
                      className={styles.changeIconLeft}
                    />
                  </Button>
                  <div className={styles.pageNumberContainer}>
                    {numbers.map(number => (
                      number
                    ))}
                  </div>
                  <Button
                    Type='div'
                    subType='icon'
                    onClick={() => this.nextPage()}
                    active={this.state.activeNextPage}
                  >
                    <FontAwesomeIcon
                      icon={faCaretSquareRight}
                      className={styles.changeIconRight}
                    />
                  </Button>
                </div>
                :
                null
              }
              
              <Swipeable
                leftAction={() => this.previousPage()}
                rightAction={() => this.nextPage()}
              >
                <div className={clsx(styles.flexBox, styles.projects)}>
                  {projects
                    .slice(this.state.activePage * this.state.projectsOnPage, (this.state.activePage + 1) * this.state.projectsOnPage)
                    .map(project => (
                      <Project key={project._id} globalLanguage={globalLanguage} {...project} />
                    ))}
                </div>
              </Swipeable>
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
  getProjectsData: PropTypes.func,
  loadingStatus: PropTypes.object,
  currentViewPosition: PropTypes.number,
};

MyProjects.defaultProps = {
  projects: [],
  getProjectsData: () => {},
};

export default MyProjects;
