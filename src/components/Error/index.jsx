import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Error = ({ image, className }) => (
  <div className={className}>
    <img src={image} alt="Error" className="error__image"></img>
  </div>
);

Error.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default Error;
