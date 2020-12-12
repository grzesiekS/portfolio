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

  handleScrollTop = () => {
    window.scrollTo(0,0);
  }

  handleScroll = scrollPosition => {
    this.setState({
      ...this.state,
      scrollButtonDisplay: scrollPosition >= this.props.scrollButtonDisplayPosition ? true : false,
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
          <Button Type='div' onClick={() => this.handleScrollTop()}>
            <FontAwesomeIcon icon={faCaretUp} className={styles.scrollIcon} />
          </Button>
        </div>
      </div>
    );
  }
}

ScrollButton.propTypes = {
  children: PropTypes.node,
  scrollButtonDisplayPosition: PropTypes.number,
};

export default ScrollButton;