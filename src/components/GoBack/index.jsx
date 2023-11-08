import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'Components/Button';
import ROUTES from '../../data/routes';
import './styles.scss';

const GoBack = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTES.home);
  };

  return <Button name="Back" onClick={onClick} className="go-back" />;
};

export default GoBack;
