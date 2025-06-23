import React, { useState } from 'react';

const CreateCategoryPage: React.FC = () => {
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category.trim()) return;

    console.log('📁 Nueva categoría:', category);
    alert(`✅ Categoría "${category}" agregada (simulado)`);
    setCategory('');
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
        maxWidth: '400px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>➕ Nueva Categoría</h2>

        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: 'bold' }}>Nombre de la categoría:</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ej: Electrónica"
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '8px',
              marginBottom: '1.5rem',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '6px',
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Guardar Categoría
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryPage;
