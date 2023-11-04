import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const TopBar = ({ logo, routes }) => (
  <header className="top-bar">
    <div className="top-bar__logo">
      {typeof logo === 'string' ? (
        <img src={logo} alt="Page Logo" />
      ) : (
        logo
      )}
    </div>
    <nav className="top-bar__nav">
      <ul>
        {routes.map(({ label, route, img }) => (
          <li key={label}>
            <NavLink
              to={route}
              className={({ isActive }) =>
                isActive && 'top-bar__active'
              }>
              {img ? <img src={img} alt={label} /> : label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

TopBar.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TopBar;
