import React, { useEffect, useState, useContext } from 'react';
import GoBack from 'Components/GoBack';
import getUsers from '../../api/users';
import UserGiftList from '../../components/UserGiftList';
import UserContext from '../../context/UserContext';

import './styles.scss';

const SendGift = () => {
  const [userList, setUserList] = useState([]);
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const getAllUsers = async () => {
    const users = await getUsers();
    const modifiedUsers = removeLoggedUserFromList(users.data);
    setUserList(modifiedUsers);
  };

  const removeLoggedUserFromList = (users = []) => {
    let position;
    users.forEach((user, index) => {
      if (user === loggedUser) {
        position = index;
      }
    });
    users.splice(position, 1);
    return users;
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="sendGift">
      {userList.length > 0 && <GoBack />}
      <UserGiftList users={userList} />
    </div>
  );
};

export default SendGift;
