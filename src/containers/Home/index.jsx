import './index.scss';
import React, { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar';
import {
  getProducts,
  getCategoryProducts,
  getCategories,
} from '../../api/products';
import ProductList from '../../components/ProductList';

const Home = () => {
  // PARA SIDEBAR
  const getAllCategories = async () => {
    const categories = await getCategories();
    console.log(['All'].concat(categories.data));
    setCategoryList(['All'].concat(categories.data));
  };

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    console.log('aaaaaaaa');
    getAllCategories();
  }, []);

  // FUNCIONA PARA ELEGIR UNA CATEGORY
  const [category, setCategory] = useState('All');

  // PARA PRODUCT LIST
  const getProductByCategory = async () => {
    let products = [];
    if (!category || category === 'All') {
      products = await getProducts();
    } else {
      products = await getCategoryProducts(category);
    }
    setProductList(products.data);
  };

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductByCategory();
  }, [category]);

  return (
    <div className="home">
      <h1>Welcome to the Home Page of the React Bootcamp App</h1>
      <SideBar categories={categoryList} setCategory={setCategory} />
      <ProductList products={productList} />
    </div>
  );
};

export default Home;
