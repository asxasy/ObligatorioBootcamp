import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ name, onClick }) => (
  <button
    onClick={(event) => {
      event.preventDefault();
      onClick();
    }}
    className="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
