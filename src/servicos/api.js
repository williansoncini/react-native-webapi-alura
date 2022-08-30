import axios from 'axios';
import {API_IP} from '../config/config';

console.log(`http://${API_IP}:3000/`);

const api = axios.create({
  baseURL: `http://${API_IP}:3000/`,
});

export default api;
