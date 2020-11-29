import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Project.module.scss';
import Button from '../../common/Button/Button';


class Project extends React.Component {
  state = {
    descriptionActive: false,
  }

  fliterDescriptionData = () => (
    this.props.descriptionData
      .filter(data => data.language === this.props.globalLanguage)[0].description
  );

  changeDescriptionActive = () => {
    this.setState({
      ...this.state,
      descriptionActive: !this.state.descriptionActive,
    });
  }

  render() {

    const {title, link, gitLink, picture} = this.props;

    return (
      <div className={styles.project}>
        <h2 className={styles.subtitle}>{title}</h2>
        <img className={styles.image} src={picture} alt={title} />

        <div className={styles.rotate}>
          <FontAwesomeIcon
            icon={faAngleUp}
            className={this.state.descriptionActive
              ? clsx(styles.rotateIcon, styles.active) : styles.rotateIcon}
            onClick={() => this.changeDescriptionActive()}
          />
        </div>

        <section
          className={this.state.descriptionActive
            ? clsx(styles.description, styles.active) : styles.description}>
          <p>{this.fliterDescriptionData()}</p>
          <div className={styles.buttons}>
            <Button href={link} target="_blank">
              <FontAwesomeIcon icon={faGlobeEurope} className={styles.linkIcon} />
              Link
            </Button>
            <Button href={gitLink} target="_blank">
              <FontAwesomeIcon icon={faGithub} className={styles.linkIcon} />
              GitHub Link
            </Button>
          </div>
        </section>
      </div>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string,
  descriptionData: PropTypes.array,
  link: PropTypes.string,
  gitLink: PropTypes.string,
  picture: PropTypes.string,
  globalLanguage: PropTypes.string,
};

export default Project;
