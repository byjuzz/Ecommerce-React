import React from 'react';

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  onOrderChange: (order: 'asc' | 'desc') => void;
}

const Filters: React.FC<Props> = ({ search, onSearchChange, onOrderChange }) => {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      <select onChange={(e) => onOrderChange(e.target.value as 'asc' | 'desc')} style={{ padding: '8px' }}>
        <option value="asc">Precio: menor a mayor</option>
        <option value="desc">Precio: mayor a menor</option>
      </select>
    </div>
  );
};

export default Filters;
