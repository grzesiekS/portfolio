import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.scss';
import IconsGenerator from '../../common/IconsGenerator/IconsGenerator';
import Button from '../../common/Button/Button';

const Footer = ({socialMediaList, title, fetchSocialMedia}) => {

  useEffect(() => {
    fetchSocialMedia();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <footer className={styles.footer}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.socialMediaList}>
        {socialMediaList.map(social => (
          <li key={social._id}>
            <Button
              subType='icon'
              href={social.link}
              target='_blank'
            >
              <IconsGenerator 
                iconName={social.icon}
                iconsList={fab}
                alternativeIcon={faHashtag}
              />
            </Button>
          </li>
        ))}
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  socialMediaList: PropTypes.array,
  title: PropTypes.string,
  fetchSocialMedia: PropTypes.func,
};

Footer.defaultProps = {
  socialMediaList: [],
  fetchSocialMedia: () => {},
};

export default Footer;