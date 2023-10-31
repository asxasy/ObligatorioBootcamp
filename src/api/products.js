import instance from './config';

const getProducts = () => instance.get('/products');

export default getProducts;
