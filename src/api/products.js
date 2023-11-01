import instance from './config';

const getProducts = () => instance.get('/products');

const getProductDetails = (id) => instance.get(`products/${id}`);

export { getProducts, getProductDetails };
