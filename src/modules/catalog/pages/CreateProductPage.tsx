import React, { useState } from 'react';

const CreateProductPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📦 Nuevo producto:', form);
    alert('Producto agregado (simulado) ✅');
    setForm({ name: '', price: '', image: '', category: '' });
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
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#212529' }}>
          ➕ Agregar Nuevo Producto
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontWeight: 'bold' }}>Nombre</label>
            <input
              name="name"
              type="text"
              placeholder="Ej: Teclado mecánico"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontWeight: 'bold' }}>Precio ($)</label>
            <input
              name="price"
              type="number"
              placeholder="Ej: 149"
              value={form.price}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontWeight: 'bold' }}>URL de la imagen</label>
            <input
              name="image"
              type="text"
              placeholder="https://..."
              value={form.image}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontWeight: 'bold' }}>Categoría</label>
            <input
              name="category"
              type="text"
              placeholder="Ej: Electrónica, Audio..."
              value={form.category}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

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
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '15px',
};

export default CreateProductPage;
