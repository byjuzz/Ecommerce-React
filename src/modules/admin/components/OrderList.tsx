// src/modules/admin/components/OrderList.tsx
import React from "react";
import { OrderDto } from "../types/orderTypes"; // Ajusta la ruta si es necesario

interface OrderListProps {
  orders: OrderDto[];
  onSelect: (orderId: number) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onSelect }) => {
  return (
    <div>
      <h4>Órdenes</h4>
      <ul className="list-group">
        {orders.map((order) => (
          <li
            key={order.orderId}
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => onSelect(order.orderId)}
            style={{ cursor: "pointer" }}
          >
            {order.orderNumber}
            <span className="badge bg-primary rounded-pill">{order.items.length} productos</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
