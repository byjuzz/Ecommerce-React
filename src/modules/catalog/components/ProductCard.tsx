import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';




interface Props {
  product: Product;
}


const ProductCard: React.FC<Props> = ({ product }) => {


  
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', width: '250px' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '12px' }}
      />
      <h4 style={{ marginBottom: '8px' }}>{product.name}</h4>
      <p style={{ marginBottom: '12px', fontWeight: 'bold' }}>${product.price}</p>
      <Link to={`/products/${product.id}`}>
  <button
    style={{
      background: '#007bff',
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%',
    }}
  >
    👁 Ver más
  </button>
</Link>

    </div>
  );
};

export default ProductCard;