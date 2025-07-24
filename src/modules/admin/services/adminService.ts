// modules/admin/services/adminService.ts
import axios from "axios";
import { OrderDto } from "../types/orderTypes";
import { UpdateStockPayload } from "../types/stockTypes";

const BASE_URL = "http://localhost:6900"; 

export const getOrders = () =>
  axios.get<{ items: OrderDto[] }>(`${BASE_URL}/api/orders`, {
    withCredentials: true,
    headers: getAuthHeaders(),
  });

export const getOrderById = (id: number) =>
  axios.get<OrderDto>(`${BASE_URL}/api/orders/${id}`, {
    withCredentials: true,
    headers: getAuthHeaders(),
  });

export const getProductStock = (productId: number) =>
  axios.get(`${BASE_URL}/api/products/${productId}`, {
    withCredentials: true,
    headers: getAuthHeaders(),
  });

export const updateStock = (payload: UpdateStockPayload) =>
  axios.put(`${BASE_URL}/api/stocks`, payload, {
    withCredentials: true,
    headers: getAuthHeaders(),
  });


function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}
