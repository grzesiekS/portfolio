import React from 'react';
import PropTypes from 'prop-types';

import styles from './Project.module.scss';
import Button from '../../common/Button/Button';

const Project = (props) => (
  <div className={styles.project}>
    <h2>{props.title}</h2>
    <img src={props.picture} alt={props.title} />
    <p>{props.description}</p>
    <Button href={props.link} target="_blank">Link</Button>
    <Button href={props.gitLink} target="_blank">GitHub Link</Button>
  </div>
);

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  gitLink: PropTypes.string,
  picture: PropTypes.string,
};

export default Project;
