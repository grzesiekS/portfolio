import React from 'react';
import Button from '../../common/Button/Button';
import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.container}>
    <div className={styles['flex-box']}>
      <nav>
        <ul className={styles.navBar}>
          <li>
            <a href='#aboutMe'>About Me</a>
          </li>
          <li>
            <a href='#techSkills'>{`Tools & Skills`}</a>
          </li>
          <li>
            <a href='#myProjects'>My Projects</a>
          </li>
        </ul>
      </nav>
      <Button href='/#' animation={true}>
        Contact Me
      </Button>
    </div>
  </div>
);

export default TopBar;
