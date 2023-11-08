import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import ROUTES from '../../data/routes';
import UserContext from '../../context/UserContext';

const AuthRoute = () => {
  const { loggedUser, setLoggedUser } = useContext(UserContext); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return loggedUser ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default AuthRoute;
