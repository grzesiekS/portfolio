import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import styles from './ScrollButton.module.scss';
import Button from '../../common/Button/Button';

class ScrollButton extends React.Component {

  state = {
    scrollButtonDisplay: false,
  }

  handleScroll = (scrollPosition) => {
    this.setState({
      ...this.state,
      scrollButtonDisplay: scrollPosition >= 700 ? true : false,
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.handleScroll(window.scrollY);
    });
  }

  render() {

    const {children} = this.props;

    return (
      <div className={styles.container} >
        {children}
        <div className={this.state.scrollButtonDisplay ? clsx(styles.scrollButton, styles.show) : styles.scrollButton}>
          <Button Type='div'>
            <FontAwesomeIcon icon={faCaretUp} className={styles.scrollIcon} />
          </Button>
        </div>
      </div>
    );
  }
}

ScrollButton.propTypes = {
  children: PropTypes.node,
};

export default ScrollButton;