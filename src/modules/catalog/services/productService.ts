import axios from 'axios';

const API_URL = 'http://localhost:6900/api/products';

// Crear una instancia de Axios con configuración global
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Agregar un interceptor para incluir el token en cada petición
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // 🔥 Recupera el token guardado en localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Agrega el token como header Authorization
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// ✅ Obtener productos desde el backend
export const getProducts = async (page = 1, take = 10) => {
  try {
    const response = await axiosInstance.get(`/?page=${page}&take=${take}`);
    return response.data;
  } catch (error) {
    console.error('❌ Error obteniendo productos:', error);
    throw error;
  }
};

// Métodos no utilizados actualmente:
// export const createProduct = async (product: any) => {
//     return await axiosInstance.post('/', product);
// };

// export const updateProduct = async (id: number, product: any) => {
//     return await axiosInstance.put(`/${id}`, product);
// };

// export const deleteProduct = async (id: number) => {
//     return await axiosInstance.delete(`/${id}`);
// };
