import React, { useState } from 'react';

const users = [
  { id: '1', username: 'admin1' },
  { id: '2', username: 'editor' },
  { id: '3', username: 'user123' },
];

const roles = ['Admin', 'Editor', 'User'];

const AssignRolePage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleAssign = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Asignado el rol "${selectedRole}" al usuario "${selectedUser}"`);
    // Aquí iría el llamado a tu microservicio de Identity
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Asignar Rol a Usuario</h2>
      <form onSubmit={handleAssign}>
        <div className="mb-3">
          <label htmlFor="userSelect" className="form-label">Usuario:</label>
          <select
            id="userSelect"
            className="form-select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="">Seleccionar usuario</option>
            {users.map((u) => (
              <option key={u.id} value={u.username}>{u.username}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="roleSelect" className="form-label">Rol:</label>
          <select
            id="roleSelect"
            className="form-select"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            required
          >
            <option value="">Seleccionar rol</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-success">Asignar Rol</button>
      </form>
    </div>
  );
};

export default AssignRolePage;
