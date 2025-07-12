import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // change if hosted elsewhere
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default instance;
