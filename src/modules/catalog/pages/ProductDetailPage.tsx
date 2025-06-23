import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// ⚠️ Simulamos datos
const mockProducts = [
  {
    id: '1',
    name: 'Laptop Pro 14',
    price: 1200,
    category: 'Electrónica',
    image: 'https://lavictoria.ec/wp-content/uploads/2023/01/LAPTOP-DE-14-PULGADAS-V14-IIL-82C4-LENOVO-2.jpg',
    description: 'Potente laptop de 14 pulgadas con procesador Intel Core i7 y 16GB de RAM.',
  },
  {
    id: '2',
    name: 'Smartphone X',
    price: 799,
    category: 'Electrónica',
    image: 'https://technostore.es/wp-content/uploads/smartphone_x_series_6.jpeg',
    description: 'Smartphone con pantalla OLED, cámara cuádruple y batería de larga duración.',
  },
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<typeof mockProducts[0] | null>(null);

  useEffect(() => {
    const found = mockProducts.find((p) => p.id === id);
    setProduct(found || null);
  }, [id]);

  if (!product) {
    return <div style={{ padding: '2rem' }}><h2>Producto no encontrado 😥</h2></div>;
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
      padding: '1rem',
    }}>
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        width: '100%',
        display: 'flex',
        gap: '2rem',
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '300px', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
        />
        <div>
          <h2 style={{ marginBottom: '0.5rem' }}>{product.name}</h2>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#007bff' }}>${product.price}</p>
          <p style={{ fontStyle: 'italic', color: '#555' }}>{product.category}</p>
          <p style={{ marginTop: '1rem' }}>{product.description}</p>
          <button style={{
            marginTop: '1.5rem',
            padding: '12px 24px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
          }}>
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
