// src/modules/identity/pages/roles/RoleListPage.tsx
import React, { useEffect, useState } from 'react';
import { getRoles } from '../../services/roleServices';

interface Role {
  id: number;
  name: string;
}

const RoleListPage: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await getRoles();
        setRoles(data.items || data); // ajusta según lo que devuelva tu API
      } catch (err) {
        console.error(err);
        setError('Error al cargar los roles');
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Roles</h2>
      {loading ? (
        <p>Cargando roles...</p>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre del Rol</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RoleListPage;
