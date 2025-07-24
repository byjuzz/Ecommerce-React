import axios from 'axios';

const API_URL = 'http://localhost:6900/api/roles'; 


export const getRoles = async () => {
  const response = await axios.get(API_URL, { withCredentials: true });
  return response.data;
};


export const createRole = async (roleName: string) => {
  const response = await axios.post(
    API_URL,
    { name: roleName }, 
    { withCredentials: true } 
  );
  return response.data;
};
