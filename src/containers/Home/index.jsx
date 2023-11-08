import './index.scss';
import React, { useEffect, useState, useContext } from 'react';
import { ColorRing } from 'react-loader-spinner';
import Error from 'Components/Error';
import SideBar from '../../components/SideBar';
import {
  getProducts,
  getCategoryProducts,
  getCategories,
} from '../../api/products';
import ProductList from '../../components/ProductList';
import UserContext from '../../context/UserContext';
import noData from '../../assets/noData.png';

const Home = () => {
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState('All');
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    console.log(products);
    if (products.status !== 200 || products.data.length === 0) {
      setError(true);
    } else setProductList(products.data);
    setLoading(false);
  };

  useEffect(() => {
    getProductByCategory();
  }, [category]);

  const renderProductList = () => {
    if (!loading) {
      if (!error) {
        return <ProductList products={productList} />;
      }
      return (
        <Error title="No data found" image={noData} text="Error" />
      );
    }
    return (
      <ColorRing
        visible
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          '#fafafa',
          '#e8e6e6',
          '#d4d2cf',
          '#b5b1aa',
          '#918c83',
          '#69635b',
          '#403c35',
        ]}
      />
    );
  };

  return (
    <div className="home">
      <SideBar categories={categoryList} setCategory={setCategory} />
      {renderProductList()}
    </div>
  );
};

export default Home;
// <p>{JSON.stringify(loggedUser)}</p>
