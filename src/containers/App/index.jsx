import React, { useState, createContext } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from 'Containers/Home';
import ProductView from 'Containers/ProductView';
import Login from 'Containers/Login';
import CartView from 'Containers/CartView';
import Layout from 'Components/Layout';
import SendGift from 'Containers/SendGift';
import ROUTES from '../../data/routes';

import './index.scss';

const UserContext = createContext({});

const App = () => {
  const [loggedUser, setLoggedUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <Routes>
          <Route path={ROUTES.login} element={<Login />}>
            <Route index element={<Login />} />
          </Route>
          <Route path={ROUTES.home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.gift} element={<SendGift />} />
            <Route path={ROUTES.product} element={<ProductView />} />
            <Route path={ROUTES.giftUser} element={<CartView />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export { App, UserContext };
