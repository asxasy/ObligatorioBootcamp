import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'Components/Button';
import ROUTES from '../../data/routes';
import UserContext from '../../context/UserContext';
import './styles.scss';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const onClick = () => {
    setLoggedUser(null);
    navigate(ROUTES.home);
  };
  return (
    <Button
      onClick={onClick}
      className="logout-button"
      name="Logout"
    />
  );
};

export default LogoutButton;
