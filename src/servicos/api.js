import axios from 'axios';

console.log(
  `http://${process.env.REACT_APP_API_URL}:3000/`,
);

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}:3000/`,
});

export default api;
