import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setCurrentViewPosition } from '../../../redux/globalSettingsRedux';

import Header from '../Header/Header';
import Footer from '../Footer/FooterContainer';
import ScrollButton from '../../features/ScrollButton/ScrollButtonContainer';
import Modal from '../../features/Modal/ModalContainer';

const MainLayout = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      dispatch(setCurrentViewPosition(window.pageYOffset));
    });
  },[dispatch]);

  return (
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
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
