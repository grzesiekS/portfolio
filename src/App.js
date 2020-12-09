import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import './styles/global.scss';
import Homepage from './components/views/Homepage';
import ContactPage from './components/views/ContactPage';

import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 1 }}
        atActive={{ opacity: 1 }}
      >
        <Route exact path='/' component={Homepage} />
        <Route exact path='/contact' component={ContactPage} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
