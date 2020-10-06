import React from 'react';
import './styles/global.scss';
import Homepage from './components/views/Homepage';

import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => (
  <MainLayout>
    <Homepage />
  </MainLayout>
);

export default App;
