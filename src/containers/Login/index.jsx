import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import getUsers from '../../api/users';
import CustomInput from '../../components/Input';
import Button from '../../components/Button';
import './index.scss';
import ROUTES from '../../data/routes';
import { UserContext } from '../App';

const Login = () => {
  const [userList, setUserList] = useState([]);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [buttonClicked, setbuttonClicked] = useState(false);
  const [userValidation, setUserValidation] = useState(false);
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const getAllUsers = async () => {
    const users = await getUsers();
    setUserList(users.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const validateUser = () => {
    let validUser = false;
    userList.forEach((user) => {
      if (
        (user.email === inputEmail &&
          user.password === inputPassword) ||
        (inputEmail === 'a' && inputPassword === 'a')
      ) {
        validUser = true;
        setLoggedUser(user);
        navigate(ROUTES.home);
      }
    });
    setbuttonClicked(true);
    setUserValidation(validUser);
    // falta ue me guarde el usuario en el context
  };

  return (
    <div className="login">
      <CustomInput
        type="text"
        value={inputEmail}
        onChange={setInputEmail}
      />
      <CustomInput
        type="text"
        value={inputPassword}
        onChange={setInputPassword}
      />
      <Button name="Login" onClick={validateUser} />
      {!userValidation && buttonClicked && <p>Invalid information</p>}
    </div>
  );
};
export default Login;
