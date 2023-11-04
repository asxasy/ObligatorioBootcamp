import React, { useEffect, useState } from 'react';
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
      {userList.length > 0 && (
        <div className="sendGift__go-back">
          <p>
            <a href="/" className="sendGift__go-back__link">
              back
            </a>
          </p>
        </div>
      )}
      <UserGiftList users={userList} />
    </div>
  );
};

export default SendGift;
