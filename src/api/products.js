import instance from './config';

const getProducts = () => instance.get('/products');

const getProductDetails = (id) => instance.get(`products/${id}`);

//For trying error funtioning
//const getProducts = () => instance.get('/product');

const getCategories = () => instance.get(`products/categories`);

const getCategoryProducts = (catName) =>
  instance.get(`products/category/${catName}`);

export {
  getProducts,
  getProductDetails,
  getCategoryProducts,
  getCategories,
};
