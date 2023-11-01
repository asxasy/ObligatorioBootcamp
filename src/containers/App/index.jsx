import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from 'Containers/Home';

import Login from 'Containers/Login';
import ROUTES from '../../data/routes';

import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path={ROUTES.login} element={<Login />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
