import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const UserDataLine = ({ label, data, className }) => (
  <div className="data-line">
    <p className="user-label">{label}</p>
    <p className="user-data">{data}</p>
  </div>
);

UserDataLine.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default UserDataLine;
