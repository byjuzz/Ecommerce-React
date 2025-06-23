import React from 'react';
import { Link } from 'react-router-dom';

// 🔹 Productos en carrito simulados
const cartItems = [
  {
    id: '1',
    name: 'Laptop Pro 14',
    price: 1200,
    quantity: 1,
    image: 'https://lavictoria.ec/wp-content/uploads/2023/01/LAPTOP-DE-14-PULGADAS-V14-IIL-82C4-LENOVO-2.jpg',
  },
  {
    id: '2',
    name: 'Mouse Inalámbrico',
    price: 49,
    quantity: 2,
    image: 'https://th.bing.com/th/id/OIP.eX6p8lsbc2EqlrnhJGyqWAHaHX?rs=1&pid=ImgDetMain',
  },
];

const CartPage: React.FC = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p style={{ marginTop: '2rem' }}>Tu carrito está vacío.</p>
      ) : (
        <>
          <div style={{ marginTop: '1.5rem' }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                backgroundColor: '#f9f9f9',
                padding: '12px',
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
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>Total: ${total}</h3>

          <Link to="/checkout">
            <button
              style={{
                marginTop: '1.5rem',
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
              Proceder al Pago
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
