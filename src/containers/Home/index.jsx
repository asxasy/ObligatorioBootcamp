import './index.scss';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import ProductList from '../../components/ProductList';

const Home = () => {
  const [productList, setProductList] = useState([]);

  const initHome = async () => {
    const products = await getProducts();

    console.log(products);

    setProductList(products.data);
  };

  useEffect(() => {
    initHome();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Home Page of the React Bootcamp App</h1>
      <ProductList products={productList} />
    </div>
  );
};

export default Home;
