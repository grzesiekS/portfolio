import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/FooterContainer';
import ScrollButton from '../../features/ScrollButton/ScrollButtonContainer';
import Modal from '../../features/Modal/ModalContainer';

const MainLayout = ({children}) => (
  <Modal>
    <ScrollButton>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </ScrollButton>
  </Modal>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
