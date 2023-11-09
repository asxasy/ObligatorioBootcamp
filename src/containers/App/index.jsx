import React, { useState } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from 'Containers/Home';
import ProductView from 'Containers/ProductView';
import Login from 'Containers/Login';
import CartView from 'Containers/CartView';
import Layout from 'Components/Layout';
import SendGift from 'Containers/SendGift';
import UserProfile from 'Containers/UserProfile';
import ROUTES from '../../data/routes';
import UserContext from '../../context/UserContext';
import AuthRoute from '../../routers/AuthRoute';

import './index.scss';

const App = () => {
  const [loggedUser, setLoggedUser] = useState(false);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <Routes>
          <Route path={ROUTES.login} element={<Login />}>
            <Route index element={<Login />} />
          </Route>
          <Route path={ROUTES.home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path={ROUTES.gift} element={<AuthRoute />}>
              <Route path={ROUTES.gift} element={<SendGift />} />
            </Route>
            <Route path={ROUTES.product} element={<ProductView />} />
            <Route
              exact
              path={ROUTES.giftUser}
              element={<AuthRoute />}>
              <Route path={ROUTES.giftUser} element={<CartView />} />
            </Route>
            <Route exact path={ROUTES.user} element={<AuthRoute />}>
              <Route path={ROUTES.user} element={<UserProfile />} />
            </Route>
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export { App, UserContext };
