import React from 'react';
import PropTypes from 'prop-types';

class Swipeable extends React.Component {
  state = {
    positionStart: 0,
    positionEnd: 0,
  };

  handleTouchStart = event => {
    this.setState({
      positionStart: event.touches[0].clientX,
      positionEnd: event.touches[0].clientX,
    });
  };

  handleTouchMove = event => {
    this.setState({
      positionEnd: event.touches[0].clientX,
    });
  };

  handleTouchEnd = () => {
    const {leftAction, rightAction} = this.props;

    if(this.state.positionEnd <= this.state.positionStart * 0.8) {
      leftAction();
    } else if (this.state.positionEnd >= this.state.positionStart * 1.2) {
      rightAction();
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

Swipeable.defaultProps = {
  leftAction: () => {},
  rightAction: () => {},
};

export default Swipeable;