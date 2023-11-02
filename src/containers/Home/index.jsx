import './index.scss';
import React, { useEffect, useState } from 'react';
import { getProducts, getCategoryProducts } from '../../api/products';
import ProductList from '../../components/ProductList';

const Home = () => {
  const getProductByCategory = async (category) => {
    let products = [];
    if (category === 'All') {
      products = await getProducts();
    } else {
      products = await getCategoryProducts(category);
    }
    console.log(products);
    setProductList(products.data);
  };

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductByCategory();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Home Page of the React Bootcamp App</h1>
      <ProductList products={productList} />
    </div>
  );
};

export default Home;
