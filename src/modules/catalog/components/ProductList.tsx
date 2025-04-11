import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import { Product } from '../types';

const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Laptop Pro 14',
      price: 1200,
      image: 'https://lavictoria.ec/wp-content/uploads/2023/01/LAPTOP-DE-14-PULGADAS-V14-IIL-82C4-LENOVO-2.jpg',
      category: 'Electrónica'
    },
    {
      id: '2',
      name: 'Smartphone X Series',
      price: 799,
      image: 'https://technostore.es/wp-content/uploads/smartphone_x_series_6.jpeg',
      category: 'Electrónica'
    },
    {
      id: '3',
      name: 'Auriculares Bluetooth Pro',
      price: 149,
      image: 'https://th.bing.com/th/id/OIP.sk4iS1NslcsdAkbxWMhtxwHaHa?rs=1&pid=ImgDetMain.jpg',
      category: 'Audio'
    },
    {
      id: '4',
      name: 'Teclado Mecánico RGB',
      price: 89,
      image: 'https://th.bing.com/th/id/OIP.bPl3R1qP-Agt5mcttILp1QHaEK?rs=1&pid=ImgDetMain.jpg',
      category: 'Accesorios'
    },
    {
      id: '5',
      name: 'Mouse Inalámbrico',
      price: 49,
      image: 'https://th.bing.com/th/id/OIP.eX6p8lsbc2EqlrnhJGyqWAHaHX?rs=1&pid=ImgDetMain.jpg',
      category: 'Accesorios'
    },
    {
      id: '6',
      name: 'Monitor 27" Curvo',
      price: 310,
      image: 'https://th.bing.com/th/id/R.4558fe92f8410726f98572eb24c84c41?rik=VGAsLUXiBcWYWA&pid=ImgRaw&r=0.jpg'
    }
  ];
  

const ProductList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const filtered = mockProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <div style={{ padding: '20px' }}>
      <Filters search={search} onSearchChange={setSearch} onOrderChange={setOrder} />
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
