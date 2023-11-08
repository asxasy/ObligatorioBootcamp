import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';

import './styles.scss';

const SideBar = ({ categories, setCategory }) => (
  <div className="category-list">
    {categories.map((category) => (
      <Button
        key={category}
        name={category}
        onClick={() => setCategory(category)}
      />
    ))}
  </div>
);

SideBar.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default SideBar;
