import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// ⚠️ Simulamos un fetch de producto (luego será con API)
const mockProduct = {
  id: '1',
  name: 'Laptop Pro 14',
  price: 1200,
  image: 'https://lavictoria.ec/wp-content/uploads/2023/01/LAPTOP-DE-14-PULGADAS-V14-IIL-82C4-LENOVO-2.jpg',
  category: 'Electrónica',
};

const EditProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
  });

  // Simular carga inicial
  useEffect(() => {
    // En real: fetch(`/api/products/${id}`)
    if (id === mockProduct.id) {
      setForm({
        name: mockProduct.name,
        price: mockProduct.price.toString(),
        image: mockProduct.image,
        category: mockProduct.category,
      });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('✅ Producto actualizado:', form);
    alert('Cambios guardados (simulado)');
    navigate('/admin/products');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', padding: '1rem' }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>✏️ Editar Producto</h2>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Nombre</label>
          <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Precio</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Imagen (URL)</label>
          <input name="image" value={form.image} onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Categoría</label>
          <input name="category" value={form.category} onChange={handleChange} style={inputStyle} />

          <button
            type="submit"
            style={{
              width: '100%',
              marginTop: '1.5rem',
              padding: '12px',
              backgroundColor: '#28a745',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

const labelStyle: React.CSSProperties = {
  fontWeight: 'bold',
  display: 'block',
  marginTop: '1rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginTop: '4px',
};

export default EditProductPage;
