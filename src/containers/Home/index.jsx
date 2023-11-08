import './index.scss';
import React, { useEffect, useState, useContext } from 'react';
import { ColorRing } from 'react-loader-spinner';
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
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    let products = [];

    if (!category || category === 'All') {
      products = await getProducts();
    } else {
      products = await getCategoryProducts(category);
    }
    setProductList(products.data);
    setLoading(false);
  };

  useEffect(() => {
    getProductByCategory();
  }, [category]);

  return (
    <div className="home">
      <SideBar categories={categoryList} setCategory={setCategory} />
      {!loading ? (
        <ProductList products={productList} />
      ) : (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={[
            '#e15b64',
            '#f47e60',
            '#f8b26a',
            '#abbd81',
            '#849b87',
          ]}
        />
      )}
    </div>
  );
};

export default Home;
//<p>{JSON.stringify(loggedUser)}</p>
