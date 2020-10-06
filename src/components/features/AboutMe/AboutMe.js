import React from 'react';
import styles from './AboutMe.module.scss';

const AboutMe = () => (
  <div className={styles.container}>
    <div className={styles.aboutMe}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat sodales sapien, id gravida est interdum sit amet. Nulla tempor ut magna sollicitudin interdum. Praesent in tincidunt nisl. Aenean molestie, nisl ut iaculis faucibus, risus magna dictum velit, vel imperdiet dolor ligula a diam. Sed et varius diam, a auctor magna. Suspendisse tempus posuere urna id tempor. Duis molestie nec urna eget ultricies.</p>
    </div>
  </div>
);

export default AboutMe;
