// src/modules/identity/services/authService.ts
import axios from "axios";
import { LoginRequest, User } from "../types/authTypes";

// Config global de Axios
const api = axios.create({
  baseURL: "http://localhost:5132", // Tu API Gateway
  withCredentials: true             // 🔥 NECESARIO para enviar cookies
});

export const login = async (credentials: LoginRequest): Promise<void> => {
  await api.post("/identity/authentication", credentials);
};

export const logout = async (): Promise<void> => {
  await api.post("/users/logout"); // ya configurado en Ocelot
};

export const fetchCurrentUser = async (): Promise<User> => {
  const response = await api.get("/users/me");
  return response.data;
};

export default api;
