import React from 'react';
import ProductList from '../components/ProductList';

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Banner opcional */}
      <div style={{ background: '#007bff', padding: '30px', textAlign: 'center', color: 'white', marginBottom: '40px' }}>
        <h1>Bienvenido a J2 Store</h1>
        <p>Explora nuestros productos más destacados</p>
      </div>

      {/* Productos destacados */}
      <h2 style={{ marginBottom: '20px' }}>✨ Productos Destacados</h2>
      <ProductList />
    </div>
  );
};

export default HomePage;
