import React from 'react';
import { Link } from 'react-router-dom';

// 🔹 Datos simulados de pedidos
const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-04-01',
    total: 1899,
    status: 'Enviado',
  },
  {
    id: 'ORD-002',
    date: '2024-03-20',
    total: 449,
    status: 'Entregado',
  },
  {
    id: 'ORD-003',
    date: '2024-02-15',
    total: 129,
    status: 'Pendiente',
  },
];

const MyOrdersPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>📦 Mis Pedidos</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={thStyle}># Pedido</th>
            <th style={thStyle}>Fecha</th>
            <th style={thStyle}>Total</th>
            <th style={thStyle}>Estado</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order) => (
            <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={tdStyle}>{order.id}</td>
              <td style={tdStyle}>{order.date}</td>
              <td style={tdStyle}>${order.total}</td>
              <td style={{ ...tdStyle, color: getStatusColor(order.status), fontWeight: 'bold' }}>
                {order.status}
              </td>
              <td style={tdStyle}>
                <Link to={`/orders/${order.id}`}>
                  <button style={btnStyle}>
                    Ver detalles
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
  fontWeight: 'bold',
  borderBottom: '2px solid #ccc',
};

const tdStyle: React.CSSProperties = {
  padding: '10px',
  verticalAlign: 'middle',
};

const btnStyle: React.CSSProperties = {
  padding: '6px 12px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Enviado':
      return '#ffc107';
    case 'Entregado':
      return '#28a745';
    case 'Pendiente':
      return '#dc3545';
    default:
      return '#6c757d';
  }
};

export default MyOrdersPage;
