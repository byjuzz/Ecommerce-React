import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRole } from '../../services/roleServices'; // Ajusta la ruta según tu estructura

const CreateRolePage: React.FC = () => {
  const [roleName, setRoleName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!roleName.trim()) {
      setError('El nombre del rol es requerido.');
      return;
    }

    try {
      await createRole(roleName);
      alert(`Rol "${roleName}" creado exitosamente.`);
      setRoleName('');
      navigate('/admin/roles');
    } catch (err) {
      console.error('Error al crear el rol:', err);
      setError('No se pudo crear el rol. Verifica que no exista o revisa tus permisos.');
    }
  };

  const handleCancel = () => {
    navigate('/admin/roles');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Nuevo Rol</h2>
      <form onSubmit={handleCreate}>
        <div className="mb-3">
          <label htmlFor="roleName" className="form-label">Nombre del Rol:</label>
          <input
            type="text"
            className={`form-control ${error ? 'is-invalid' : ''}`}
            id="roleName"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Crear</button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRolePage;
