import React, { useEffect, useState } from 'react';
import { getCategories } from '../../api/products';

const SideBar = () => {
  const getAllCategories = async () => {
    const categories = await getCategories();
    setCategoryList(categories.data);
  };

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="category-list">
      {categoryList.map((category) => (
        <button key={category} className="categories">
          {category}
        </button>
      ))}
    </div>
  );
};

export default SideBar;
