import React from 'react';
import { Link } from 'react-router-dom';

const mockCustomers = [
  {
    id: 'u1',
    name: 'Julio González',
    email: 'julio@mail.com',
    role: 'Cliente',
  },
  {
    id: 'u2',
    name: 'Joselin Siles',
    email: 'joselin@mail.com',
    role: 'Cliente',
  },
  { id: 'u3', name: 'Ana Pérez', email: 'ana@mail.com', role: 'Admin' },
];

const CustomerListPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Listado de clientes</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1.5rem',
        }}
      >
        <thead>
          <td style={{ background: '#f5f5f5' }}>
            <th style={thStyle}>Nombre </th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Rol</th>
            <th style={thStyle}>Accion</th>
          </td>
        </thead>
        <tbody>
          {mockCustomers.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.role}</td>
              <td style={tdStyle}>
                <Link to={`/admin/customers/${user.id}`}>
                  <button style={btnStyle}>Ver</button>
                </Link>
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
    borderBottom: '2px solid #ccc'
};
const tdStyle: React.CSSProperties = {
    padding: '10px',
  };
  
  const btnStyle: React.CSSProperties = {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  export default CustomerListPage;