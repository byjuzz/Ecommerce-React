import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
  roles: string[];
}

const mockUsers: User[] = [
  { id: '1', username: 'admin1', email: 'admin1@mail.com', roles: ['Admin'] },
  { id: '2', username: 'editor', email: 'editor@mail.com', roles: ['Editor'] },
  { id: '3', username: 'user123', email: 'user123@mail.com', roles: ['User'] },
];

const UserListPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Usuarios</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.roles.join(', ')}</td>
              <td>
                <Link className="btn btn-sm btn-primary" to={`/admin/users/${user.id}`}>
                  Ver detalles
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListPage;
