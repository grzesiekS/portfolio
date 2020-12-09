import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import Button from '../../common/Button/Button';
import styles from './TopBar.module.scss';

const TopBar = ({languageList, selectedLanguage, changeLanguage}) => (
  <div className={styles.container}>
    <div className={styles['flex-box']}>
      <nav>
        <ul className={styles.navBar}>
          <li>
            <Link to='/'>
              <FontAwesomeIcon icon={faLaptopCode} className={styles.homeLink} />
            </Link>
          </li>
          <li>
            <a href='/#aboutMe'>About Me</a>
          </li>
          <li>
            <a href='/#techSkills'>{`Tools & Skills`}</a>
          </li>
          <li>
            <a href='/#myProjects'>My Projects</a>
          </li>
          <li className={styles.languageSelector}>
            <a
              href='/#'
              onClick={event => event.preventDefault()}
              className={styles.languageButton}
            >
              Language: <span className={styles.green}>{selectedLanguage}</span>
            </a>
            <ul className={styles.languageList}>
              {languageList.map(lang => (
                <li key={languageList.indexOf(lang)}>
                  <a
                    href='/#'
                    className={styles.languageLink}
                    onClick={event => {
                      event.preventDefault();
                      changeLanguage(lang);
                    }}
                  >
                    {lang}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <Button Type='Link' to='/contact' animation={true}>
        Contact Me
      </Button>
    </div>
  </div>
);

TopBar.propTypes = {
  languageList: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default TopBar;
