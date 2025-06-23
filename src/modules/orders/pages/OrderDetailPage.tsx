import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 🔹 Simulación de pedido con productos
const mockOrder = {
  id: 'ORD-001',
  date: '2024-04-01',
  status: 'Enviado',
  total: 1899,
  items: [
    {
      name: 'Laptop Pro 14',
      price: 1200,
      quantity: 1,
      image: 'https://lavictoria.ec/wp-content/uploads/2023/01/LAPTOP-DE-14-PULGADAS-V14-IIL-82C4-LENOVO-2.jpg',
    },
    {
      name: 'Mouse Inalámbrico',
      price: 49,
      quantity: 2,
      image: 'https://th.bing.com/th/id/OIP.eX6p8lsbc2EqlrnhJGyqWAHaHX?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Auriculares Bluetooth Pro',
      price: 149,
      quantity: 2,
      image: 'https://th.bing.com/th/id/OIP.sk4iS1NslcsdAkbxWMhtxwHaHa?rs=1&pid=ImgDetMain',
    },
  ],
};

const CustomerListPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🧠 En el futuro podrías hacer: const order = await fetch(`/orders/${id}`)
  const order = mockOrder;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.2rem' }}>📄 Detalles del Pedido</h2>

      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: '#6c757d',
          color: 'white',
          padding: '8px 14px',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '1.5rem',
          cursor: 'pointer',
        }}
      >
        ← Volver
      </button>

      <div style={{
        background: '#fff',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem',
      }}>
        <p><strong>Número de pedido:</strong> {order.id}</p>
        <p><strong>Fecha:</strong> {order.date}</p>
        <p><strong>Estado:</strong> <span style={{ color: getStatusColor(order.status) }}>{order.status}</span></p>
        <p><strong>Total:</strong> ${order.total}</p>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>🧾 Productos:</h3>

      {order.items.map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}>
          <img src={item.image} alt={item.name} style={{ height: '80px', marginRight: '1.2rem', borderRadius: '5px' }} />
          <div>
            <p style={{ fontWeight: 'bold', margin: 0 }}>{item.name}</p>
            <p style={{ margin: '4px 0' }}>Cantidad: {item.quantity}</p>
            <p style={{ margin: 0 }}>Precio unitario: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Enviado': return '#ffc107';
    case 'Entregado': return '#28a745';
    case 'Pendiente': return '#dc3545';
    default: return '#6c757d';
  }
};

export default CustomerListPage;
