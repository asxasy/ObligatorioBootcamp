import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from 'Containers/Home';
import ProductView from 'Containers/ProductView';
import Login from 'Containers/Login';
import Layout from 'Components/Layout';
import SendGift from 'Containers/SendGift';
import ROUTES from '../../data/routes';

import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.gift} element={<SendGift />} />
        <Route path={ROUTES.product} element={<ProductView />} />
      </Route>
      <Route path={ROUTES.login} element={<Login />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
