// src/modules/admin/pages/AdminStockPage.tsx

import React, { useEffect, useState } from "react";
import { getOrders, getOrderById, updateStock } from "../services/adminService";
import OrderList from "../components/OrderList";
import StockViewer from "../components/StockViewer";
import { OrderDto } from "../types/orderTypes"; // Asegúrate que esta ruta esté bien

const AdminStockPage: React.FC = () => {
  const [orders, setOrders] = useState<OrderDto[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderDto | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrders();
        console.log("Respuesta completa de getOrders:", res);
        if (res?.data?.items) {
             console.log("Órdenes recibidas:", res.data.items);
          setOrders(res.data.items);
        } else {
          console.warn("No se encontraron órdenes.");
        }
      } catch (error) {
        console.error("Error al obtener las órdenes:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleSelectOrder = async (orderId: number) => {
    try {
      const res = await getOrderById(orderId);
      if (res?.data) {
        setSelectedOrder(res.data);
      } else {
        console.warn("Orden no encontrada.");
      }
    } catch (error) {
      console.error("Error al obtener orden por ID:", error);
    }
  };

  const handleUpdateStock = async () => {
    if (!selectedOrder) return;

    const payload = {
      items: selectedOrder.items.map((item) => ({
        productId: item.productId,
        stock: item.quantity,
        action: 1, // 0 = Substract
      })),
    };

    try {
      await updateStock(payload);
      alert("Stock actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar stock:", error);
      alert("Error al actualizar stock");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Stock</h2>
      <div className="row">
        <div className="col-md-6">
          <OrderList orders={orders} onSelect={handleSelectOrder} />
        </div>
        <div className="col-md-6">
          {selectedOrder && (
            <StockViewer order={selectedOrder} onUpdateStock={handleUpdateStock} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminStockPage;
