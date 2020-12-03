import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/global.scss';
import Homepage from './components/views/Homepage';
import ContactPage from './components/views/ContactPage';

import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
