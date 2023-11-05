import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Input = ({ value, onChange, type }) => (
  <div className="input">
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}></input>
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
