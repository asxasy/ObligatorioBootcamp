import instance from './config';

const getCart = (id) => instance.get(`/cart/${id}`);
const getUserCart = (userId) => instance.get(`carts/user/${userId}`);

export { getCart, getUserCart };
