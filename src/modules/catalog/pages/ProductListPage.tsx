import React from 'react';
import { Link } from 'react-router-dom';

// ⚠️ Simulación de productos
const mockProducts = [
  {
    id: '1',
    name: 'Laptop Pro 14',
    price: 1200,
    category: 'Electrónica',
    image: 'https://lavictoria.ec/wp-content/uploads/2023/01/LAPTOP-DE-14-PULGADAS-V14-IIL-82C4-LENOVO-2.jpg',
  },
  {
    id: '2',
    name: 'Smartphone X',
    price: 799,
    category: 'Electrónica',
    image: 'https://technostore.es/wp-content/uploads/smartphone_x_series_6.jpeg',
  },
];

const ProductListPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>🛍️ Productos</h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <Link
          to="/admin/products/create"
          style={{
            padding: '10px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          ➕ Agregar Producto
        </Link>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={thStyle}>Imagen</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Precio</th>
            <th style={thStyle}>Categoría</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((prod) => (
            <tr key={prod.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={tdStyle}>
                <img src={prod.image} alt={prod.name} style={{ height: '50px', borderRadius: '5px' }} />
              </td>
              <td style={tdStyle}>{prod.name}</td>
              <td style={tdStyle}>${prod.price}</td>
              <td style={tdStyle}>{prod.category}</td>
              <td style={tdStyle}>
                <Link
                  to={`/admin/products/${prod.id}/edit`}
                  style={{
                    marginRight: '0.5rem',
                    padding: '6px 10px',
                    backgroundColor: '#ffc107',
                    color: '#212529',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                  }}
                >
                  ✏️ Editar
                </Link>
                <button
                  style={{
                    padding: '6px 10px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                  onClick={() => alert(`❌ Producto "${prod.name}" eliminado (simulado)`)}
                >
                  🗑 Eliminar
                </button>
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

export default ProductListPage;
