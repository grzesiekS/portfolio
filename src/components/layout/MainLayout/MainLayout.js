import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/FooterContainer';
import ScrollButton from '../../features/ScrollButton/ScrollButtonContainer';

const MainLayout = ({children}) => (
  <ScrollButton>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </ScrollButton>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
