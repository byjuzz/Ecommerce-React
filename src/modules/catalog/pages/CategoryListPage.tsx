import React from 'react';
import { Link } from 'react-router-dom';

// ⚠️ Simulación de categorías
const mockCategories = [
  { id: '1', name: 'Electrónica' },
  { id: '2', name: 'Audio' },
  { id: '3', name: 'Moda' },
  { id: '4', name: 'Hogar y Cocina' },
];

const CategoryListPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>📂 Categorías</h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <Link
          to="/admin/categories/create"
          style={{
            padding: '10px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          ➕ Nueva Categoría
        </Link>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mockCategories.map((cat) => (
            <tr key={cat.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={tdStyle}>{cat.id}</td>
              <td style={tdStyle}>{cat.name}</td>
              <td style={tdStyle}>
                <button
                  style={{
                    marginRight: '0.5rem',
                    padding: '6px 10px',
                    backgroundColor: '#ffc107',
                    color: '#212529',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  ✏️ Editar
                </button>
                <button
                  style={{
                    padding: '6px 10px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
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
};

export default CategoryListPage;
