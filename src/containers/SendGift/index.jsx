import React, { useEffect, useState } from 'react';
import GoBack from 'Components/GoBack';
import getUsers from '../../api/users';
import UserGiftList from '../../components/UserGiftList';

import './styles.scss';

const SendGift = () => {
  const [userList, setUserList] = useState([]);

  const getAllUsers = async () => {
    const users = await getUsers();
    setUserList(users.data);
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
