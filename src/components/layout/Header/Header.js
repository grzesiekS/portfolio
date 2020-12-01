import React from 'react';
import Splash from '../Splash/Splash';
import TopBar from '../TopBar/TopBarContainer';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.root}>
    <TopBar />
    <Splash />
  </header>
);

export default Header;
