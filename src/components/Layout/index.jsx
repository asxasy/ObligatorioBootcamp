import React from 'react';
import TopBar from 'Components/TopBar';
import logo from '../../assets/logo.png';

const Layout = () => (
  <div className="layout">
    <TopBar logo={logo} routes={[{ label: 'Home', route: '/' }]} />
  </div>
);

export default Layout;
