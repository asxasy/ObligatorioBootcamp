import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick, className }) => (
  <button
    onClick={(event) => {
      event.preventDefault();
      onClick();
    }}
    className={className}>
    {name}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
