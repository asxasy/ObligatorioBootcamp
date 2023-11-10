import instance from './config';

const getUsers = () => instance.get('/users');

const getUserDetails = (id) => instance.get(`user/${id}`);

export default getUsers;
