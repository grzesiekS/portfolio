import React from 'react';
import TopBar from '../TopBar/TopBarContainer';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <div className={styles.root}></div>
    <TopBar />
  </header>
);

export default Header;
