import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';

import Button from '../../common/Button/Button';
import styles from './TopBar.module.scss';

const renderNavBar = (selectedLanguage, languageList, changeLanguage, screenSize, activeNav, handleActiveNav) => {
  if(screenSize > 470) {
    return (
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
    );
  } else {
    return (
      <nav>
        <Button 
          Type='div'
          subType='icon'
          onClick={() => handleActiveNav()}
        >
          <FontAwesomeIcon icon={faBars} className={styles.barIcon} />
        </Button>
        <ul className={!activeNav ? styles.navBar : clsx(styles.navBar, styles.active)}>
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
    );
  }
};

const TopBar = ({languageList, selectedLanguage, changeLanguage}) => {

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [activeNav, setActiveNav] = useState(false);

  const handleActiveNav = () => {
    setActiveNav(!activeNav);
  };

  window.addEventListener('resize', () => setScreenSize(window.innerWidth));

  return (
    <div className={styles.container}>
      <div className={styles['flex-box']}>
        {renderNavBar(selectedLanguage, languageList, changeLanguage, screenSize, activeNav, handleActiveNav)}
        <div className={styles.navContact}>
          <Button Type='Link' to='/contact' animation={true}>
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  languageList: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default TopBar;
