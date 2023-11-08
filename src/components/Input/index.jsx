import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Input = ({ value, onChange, type, inputid }) => (
  <div className="input">
    <label htmlFor={inputid}>{inputid} </label>
    <input
      id={inputid}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}></input>
  </div>
);

Input.propTypes = {
  inputid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
