import React from 'react';
import PropTypes from 'prop-types';

import styles from './ScrollButton.module.scss';


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
      </div>
    );
  }
}

ScrollButton.propTypes = {
  children: PropTypes.node,
};

export default ScrollButton;