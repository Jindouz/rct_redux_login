import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/login'; // Replace with your Django API base URL

export const login = async (credentials) => {
  try {
    const response = await axios.post(BASE_URL, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.detail || 'Login failed');
  }
};
