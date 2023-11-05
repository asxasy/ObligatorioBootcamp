import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';

const SideBar = ({ categories, setCategory }) => {
  useEffect(() => {
    console.log(categories);
  }, []);
  const faux = () => setCategory(category);
  return (
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
};

SideBar.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default SideBar;
