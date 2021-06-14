import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faGlobeEurope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, fab, faCodepen } from '@fortawesome/free-brands-svg-icons';

import styles from './Project.module.scss';
import Button from '../../common/Button/Button';
import IconsGenerator from '../../common/IconsGenerator/IconsGenerator';

class Project extends React.Component {
  state = {
    descriptionActive: false,
  }

  fliterDescriptionData = () => {
    if(this.props.descriptionData.length === 0) {
      return null;
    } else {
      return (
        this.props.descriptionData
          .filter(data => data.language === this.props.globalLanguage)[0].description
      );
    }
  };

  changeDescriptionActive = (e) => {
    if(e.target.getAttribute('href') === null) {
      this.setState({
        ...this.state,
        descriptionActive: !this.state.descriptionActive,
      });
    }
  }

  render() {

    const {title, link, gitLink, picture, skillsList, techList} = this.props;

    return (
      <div 
        className={styles.project}
        onClick={(e) => this.changeDescriptionActive(e)}  
      >
        <h2 className={styles.subtitle}>{title}</h2>
        <div className={this.state.descriptionActive ? clsx(styles.image, styles.animationDisable) : styles.image}>
          <img src={picture} alt={title} />
        </div>

        <div className={this.state.descriptionActive 
          ? clsx(styles.rotate, styles.animationDisable) 
          : styles.rotate}>
          <FontAwesomeIcon
            icon={faAngleUp}
            className={this.state.descriptionActive
              ? clsx(styles.rotateIcon, styles.active) : styles.rotateIcon}
          />
        </div>

        <section
          className={this.state.descriptionActive
            ? clsx(styles.description, styles.active) : styles.description}>
          <p>{this.fliterDescriptionData()}</p>
          <p>Technologies and tools:</p>
          <div className={styles.skillTech}>
            <div className={styles.skill}>
              {skillsList.map(skill => (
                <IconsGenerator
                  key={skillsList.indexOf(skill)}
                  iconName={skill.icon}
                  iconsList={fab}
                  alternativeIcon={faCode}
                >
                  {skill.name}
                </IconsGenerator>
              ))}
            </div>
            <div className={styles.tech}>
              {techList.map(tech => (
                <IconsGenerator
                  key={techList.indexOf(tech)}
                  iconName={tech.icon}
                  iconsList={fab}
                  alternativeIcon={faCodepen}
                >
                  {tech.name}
                </IconsGenerator>
              ))}
            </div>
          </div>
          <div className={styles.buttons}>
            <Button href={link} target="_blank">
              <FontAwesomeIcon icon={faGlobeEurope} className={styles.linkIcon} />
              Link
            </Button>
            <Button href={gitLink} target="_blank">
              <FontAwesomeIcon icon={faGithub} className={styles.linkIcon} />
              GitHub
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
  skillsList: PropTypes.array,
  techList: PropTypes.array,
};

Project.defaultProps = {
  descriptionData: [],
  skillsList: [],
  techList: [],
};

export default Project;
