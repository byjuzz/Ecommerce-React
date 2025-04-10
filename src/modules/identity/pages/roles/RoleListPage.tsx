import React from 'react';

interface Role {
  id: string;
  name: string;
}

const mockRoles: Role[] = [
  { id: '1', name: 'Admin' },
  { id: '2', name: 'Editor' },
  { id: '3', name: 'User' },
];

const RoleListPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Roles</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre del Rol</th>
          </tr>
        </thead>
        <tbody>
          {mockRoles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleListPage;
