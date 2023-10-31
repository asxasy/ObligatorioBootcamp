import instance from './config';

const getUsers = () => instance.get('/users');

export default getUsers;
