import React from 'react';
import PropTypes from 'prop-types';

import Gift from 'Components/Gift';

const UserGiftList = ({ users = [] }) => {
  const userGiftList = users;

  return (
    <div className="user-list">
      {userGiftList.map((user) => (
        <Gift key={user.id} user={user} />
      ))}
    </div>
  );
};

UserGiftList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      lastname: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserGiftList;
