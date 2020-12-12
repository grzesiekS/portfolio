import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import ScrollButton from '../../features/ScrollButton/ScrollButton';

const MainLayout = ({children}) => (
  <ScrollButton>
    <div>
      <Header />
      
      {children}
    </div>
  </ScrollButton>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
