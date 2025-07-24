// src/modules/cart/pages/CartPage.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  const handlePay = async () => {
    try {
      if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
      }

      // ⚠️ Ajusta esto si tienes AuthContext con user.id real
      const clientId = 1;

      const orderPayload = {
        paymentType: 1, 
        clientId: clientId,
        items: cart.map((item) => ({
          productId: item.product.productId,
          quantity: item.quantity,
          price: item.product.price,
        })),
      };

      const token = localStorage.getItem('token');

      await axios.post('http://localhost:6900/api/orders', orderPayload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Orden generada exitosamente.');
      clearCart();
      navigate('/orders'); // o página de confirmación si la tienes
    } catch (error) {
      console.error('Error al generar la orden:', error);
      alert('No se pudo generar la orden. Asegúrate de estar autenticado.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.product.productId}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{item.product.name}</h5>
                  <p className="mb-1">
                    Precio: ₡{item.product.price.toFixed(2)}
                  </p>
                  <p className="mb-1">Cantidad: {item.quantity}</p>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.product.productId)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ₡{total.toFixed(2)}</h4>
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-success" onClick={handlePay}>
              Pagar
            </button>
            <button className="btn btn-secondary" onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
