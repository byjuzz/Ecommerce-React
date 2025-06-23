import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 🔹 Simulación de productos en carrito
const cartItems = [
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
];

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Pedido confirmado con dirección:\n${address}`);
    navigate('/orders');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Confirmar Compra</h2>

      <h3 style={{ marginTop: '2rem' }}>🧾 Resumen del Carrito</h3>
      {cartItems.map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
          backgroundColor: '#f9f9f9',
          padding: '10px',
          borderRadius: '8px',
        }}>
          <img src={item.image} alt={item.name} style={{ height: '70px', marginRight: '1rem', borderRadius: '5px' }} />
          <div>
            <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{item.name}</p>
            <p style={{ margin: 0 }}>Cantidad: {item.quantity}</p>
            <p style={{ margin: 0 }}>Subtotal: ${item.price * item.quantity}</p>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
          Dirección de envío:
        </label>
        <textarea
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ej. Calle 123, Ciudad, País"
          rows={4}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginBottom: '1.5rem',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#28a745',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
