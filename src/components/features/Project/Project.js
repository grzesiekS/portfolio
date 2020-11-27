import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Project.module.scss';
import Button from '../../common/Button/Button';


class Project extends React.Component {
  state = {
    descSecVis: false,
    descSecStyles: [styles.description],
  }

  fliterDescriptionData = () => (
    this.props.descriptionData
      .filter(data => data.language === this.props.globalLanguage)[0].description
  );

  render() {

    const {title, link, gitLink, picture} = this.props;

    return (
      <div className={styles.project}>
        <h2 className={styles.subtitle}>{title}</h2>
        <img className={styles.image} src={picture} alt={title} />

        <div className={styles.rotate}>
          <FontAwesomeIcon icon={faAngleDown} className={styles.rotateIcon} onClick={() => this.descSecClassChange()} />
        </div>

        <section className={this.state.descSecStyles.join(' ')}>
          <p>{this.fliterDescriptionData()}</p>
          <div className={styles.buttons}>
            <Button href={link} target="_blank">Link</Button>
            <Button href={gitLink} target="_blank">GitHub Link</Button>
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
