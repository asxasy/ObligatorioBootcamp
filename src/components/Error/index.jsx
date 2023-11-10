import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Error = ({ title, image, text, className }) => (
  <div className={className}>
    <h2>{title}</h2>
    <img src={image} alt={text} className="error__image"></img>
    <p>{text}</p>
  </div>
);

Error.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Error;
