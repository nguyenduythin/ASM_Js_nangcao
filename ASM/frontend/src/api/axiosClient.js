  
import axios from 'axios';

export const axiosClient = axios.create({
 // baseURL: 'https://6008fc050a54690017fc28d4.mockapi.io',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});