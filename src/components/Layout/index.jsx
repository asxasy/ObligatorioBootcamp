import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from 'Components/TopBar';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';

const Layout = () => (
  <div className="layout">
    <TopBar
      logo={logo}
      routes={[
        { label: 'Home', route: '/' },
        { label: 'Send Gift', route: '/gift' },
        { img: cart, label: 'Shopping Cart', route: '/cart' },
      ]}
    />
    <div className="layout__children">
      <Outlet />
    </div>
  </div>
);

export default Layout;
