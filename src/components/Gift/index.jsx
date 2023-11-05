import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const Gift = ({ user }) => {
  const { id, name } = user;

  return (
    <div className="userGift">
      <div className="userGift__name">
        <p>
          {name.firstname} {name.lastname}
        </p>
      </div>
      <div className="userGift__cart">
        <Link className="userGift__cart" to={`/gift/${id}`}>
          <p className="userGift__cart__goto">View Cart</p>
        </Link>
      </div>
    </div>
  );
};

Gift.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }),
  }),
};

export default Gift;
