import axios from 'axios';

const API_URL = 'http://localhost:6001/api/products';

// Crear una instancia de Axios con configuración global
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Agregar un interceptor para incluir el token en cada petición
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // 🔥 Recupera el token guardado
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // 🔥 Lo agrega en cada request
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Métodos para consumir API
export const getProducts = async () => {
    try {
        const response = await axiosInstance.get('/listar');
        return response.data;
    } catch (error) {
        console.error('Error obteniendo productos', error);
        throw error;
    }
};

export const createProduct = async (product: any) => {
    return await axiosInstance.post('/', product);
};

export const updateProduct = async (id: number, product: any) => {
    return await axiosInstance.put(`/${id}`, product);
};

export const deleteProduct = async (id: number) => {
    return await axiosInstance.delete(`/${id}`);
};
