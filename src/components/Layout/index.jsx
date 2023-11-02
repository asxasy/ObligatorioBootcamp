import TopBar from 'Components/TopBar';
import SideBar from 'Components/SideBar';
import React from 'react';
import logo from '../../assets/logo.png';

const Layout = () => (
  <div className="layout">
    <TopBar logo={logo} routes={[{ label: 'Home', route: '/' }]} />
    <SideBar />
  </div>
);

export default Layout;
