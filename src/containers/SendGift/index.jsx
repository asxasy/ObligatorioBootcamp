import React, { useEffect, useState, useContext } from 'react';
import GoBack from 'Components/GoBack';
import Error from 'Components/Error';
import getUsers from '../../api/users';
import UserGiftList from '../../components/UserGiftList';
import UserContext from '../../context/UserContext';
import noData from '../../assets/noData.png';

import './styles.scss';

const SendGift = () => {
  const [userList, setUserList] = useState([]);
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [error, setError] = useState(false);

  const getAllUsers = async () => {
    const users = await getUsers();
    const modifiedUsers = removeLoggedUserFromList(users.data);

    if (!modifiedUsers) {
      setError(true);
    } else {
      setUserList(modifiedUsers);
    }
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

  if (error) {
    return (
      <Error
        title="No data found"
        image={noData}
        text="No data found"
      />
    );
  }

  return (
    <div className="sendGift">
      {userList.length > 0 && <GoBack />}
      <UserGiftList users={userList} />
    </div>
  );
};

export default SendGift;
