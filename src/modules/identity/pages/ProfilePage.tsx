import React, { useState } from 'react';
import { useAuth } from '../context/authContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  if (!user) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Perfil</h2>
        <p>No has iniciado sesión.</p>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Datos guardados:', form);
    alert('✅ Cambios guardados (simulado)');
    setIsEditing(false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3rem',
      padding: '1rem',
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>👤 Mi Perfil</h2>

        <div style={infoRowStyle}>
          <label style={{ fontWeight: 'bold' }}>Nombre:</label>
          {isEditing ? (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
          ) : (
            <span>{user.name}</span>
          )}
        </div>

        <div style={infoRowStyle}>
          <label style={{ fontWeight: 'bold' }}>Correo:</label>
          {isEditing ? (
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>

        <div style={infoRowStyle}>
          <label style={{ fontWeight: 'bold' }}>Roles:</label>
          <span>{user.roles.join(', ')}</span>
        </div>

        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          style={{
            marginTop: '1.5rem',
            width: '100%',
            padding: '12px',
            backgroundColor: isEditing ? '#28a745' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
        </button>
      </div>
    </div>
  );
};

const infoRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  padding: '0.5rem 0',
  borderBottom: '1px solid #eee',
  gap: '1rem',
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: '8px',
  fontSize: '14px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

export default ProfilePage;
