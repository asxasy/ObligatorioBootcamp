import React, { useEffect, useState, useContext } from 'react';
import GoBack from 'Components/GoBack';
import Error from 'Components/Error';
import { ColorRing } from 'react-loader-spinner';
import getUsers from '../../api/users';
import UserGiftList from '../../components/UserGiftList';
import UserContext from '../../context/UserContext';
import noData from '../../assets/noData.png';

import './styles.scss';

const SendGift = () => {
  const [userList, setUserList] = useState([]);
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const users = await getUsers();
      const modifiedUsers = removeLoggedUserFromList(users.data);
      setUserList(modifiedUsers);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
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

  const renderSendGift = () => {
    if (!loading) {
      if (!error) {
        return (
          <div className="sendGift">
            {userList.length > 0 && <GoBack />}
            <UserGiftList users={userList} />
          </div>
        );
      }
      return <Error image={noData} />;
    }
    return (
      <div className="loader">
        <ColorRing
          visible
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={[
            '#fafafa',
            '#e8e6e6',
            '#d4d2cf',
            '#b5b1aa',
            '#918c83',
            '#69635b',
            '#403c35',
          ]}
        />
      </div>
    );
  };

  return <div>{renderSendGift()}</div>;
};

export default SendGift;
