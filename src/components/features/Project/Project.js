import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Project.module.scss';
import Button from '../../common/Button/Button';


class Project extends React.Component {
  render() {

    const {title, description, link, gitLink, picture} = this.props;

    return (
      <div className={styles.project}>
        <h2 className={styles.subtitle}>{title}</h2>
        <img className={styles.image} src={picture} alt={title} />

        <div className={styles.rotate}>
          <FontAwesomeIcon icon={faAngleDown} className={styles.rotateIcon} />
        </div>

        <section className={styles.description}>
          <p>{description}</p>
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
  description: PropTypes.string,
  link: PropTypes.string,
  gitLink: PropTypes.string,
  picture: PropTypes.string,
};

export default Project;
