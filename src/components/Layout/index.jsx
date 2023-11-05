import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from 'Components/TopBar';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import { UserContext } from '../../containers/App';

const Layout = () => {
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  return (
    <div className="layout">
      <TopBar
        logo={logo}
        routes={[
          { label: 'Home', route: '/' },
          { label: 'Send Gift', route: '/gift' },
          {
            img: cart,
            label: 'Shopping Cart',
            route: `/gift/${loggedUser.id}`,
          },
          { label: loggedUser.name.firstname, route: '/userProfile' },
        ]}
      />
      <div className="layout__children">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
