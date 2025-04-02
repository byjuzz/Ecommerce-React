// src/shared/api/axiosConfig.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// ✅ Mostrar en consola para verificar que VITE_API_URL está bien cargada
console.log("API baseURL:", api.defaults.baseURL);

export default api;
