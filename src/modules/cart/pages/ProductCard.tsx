import React from 'react';
import { Product } from '../../catalog/types'; 
import { Link } from 'react-router-dom';
import { useCart } from '../../cart/context/CartContext'; 

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '250px' }}>
      <img
        src={product.imageUrl || 'https://via.placeholder.com/250x180.png?text=Producto'}
        alt={product.name}
        style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '12px' }}
      />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <p>Stock: {product.stock?.stock ?? 0}</p>

      <Link to={`/products/${product.productId}`}>
        <button
          style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            marginBottom: '8px',
          }}
        >
          👁 Ver más
        </button>
      </Link>

      {/* Botón agregar al carrito */}
      {product.stock && product.stock.stock > 0 ? (
        <button
          onClick={handleAddToCart}
          style={{
            background: '#28a745',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          🛒 Agregar al carrito
        </button>
      ) : (
        <button
          disabled
          style={{
            background: '#ccc',
            color: '#666',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            width: '100%',
          }}
        >
          Sin stock
        </button>
      )}
    </div>
  );
};

export default ProductCard;
