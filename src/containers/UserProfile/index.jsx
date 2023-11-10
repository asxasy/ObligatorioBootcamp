import React, { useEffect, useContext } from 'react';
import GoBack from 'Components/GoBack';
import UserDataLine from '../../components/UserDataLine';
import UserContext from '../../context/UserContext';
import './styles.scss';

const UserProfile = () => {
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  useEffect(() => {
    console.log(loggedUser.name.firstName);
  }, []);

  return (
    <div>
      <GoBack />
      <div className="user-profile">
        <h2 className="user-profile__title">User Profile</h2>
        <div className="user-profile__data">
          <UserDataLine
            label="First Name: "
            data={loggedUser.name.firstname}
            className="user-name"
          />
          <UserDataLine
            label="Last Name: "
            data={loggedUser.name.lastname}
            className="user-lastname"
          />
          <UserDataLine
            label="Email: "
            data={loggedUser.email}
            className="user-email"
          />
          <UserDataLine
            label="Phone: "
            data={loggedUser.phone}
            className="user-phone"
          />
          <UserDataLine
            label="Street: "
            data={loggedUser.address.street}
            className="user-street"
          />
          <UserDataLine
            label="Number: "
            data={String(loggedUser.address.number)}
            className="user-streetnumber"
          />
          <UserDataLine
            label="City: "
            data={loggedUser.address.city}
            className="user-city"
          />
          <UserDataLine
            label="Zip Code: "
            data={loggedUser.address.zipcode}
            className="user-zipcode"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
