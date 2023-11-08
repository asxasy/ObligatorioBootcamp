import './index.scss';
import React, { useEffect, useState, useContext } from 'react';
import SideBar from '../../components/SideBar';
import {
  getProducts,
  getCategoryProducts,
  getCategories,
} from '../../api/products';
import ProductList from '../../components/ProductList';
import UserContext from '../../context/UserContext';

const Home = () => {
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState('All');
  const [productList, setProductList] = useState([]);

  // PARA SIDEBAR
  const getAllCategories = async () => {
    const categories = await getCategories();
    console.log(['All'].concat(categories.data));
    setCategoryList(['All'].concat(categories.data));
  };

  useEffect(() => {
    console.log('aaaaaaaa');
    getAllCategories();
  }, []);

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

  useEffect(() => {
    getProductByCategory();
  }, [category]);

  return (
    <div className="home">
      <SideBar categories={categoryList} setCategory={setCategory} />
      <ProductList products={productList} />
    </div>
  );
};

export default Home;
//<p>{JSON.stringify(loggedUser)}</p>
