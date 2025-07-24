import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import { Product, PaginatedResponse } from '../types';
import ProductCard from '../../cart/pages/ProductCard';


const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const take = 10;

  useEffect(() => {

    
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data: PaginatedResponse<Product> = await getProducts(page, take);
        console.log('📦 Productos obtenidos:', data);
        setProducts(data.items);
        setTotalPages(data.pages);
      } catch (error: any) {
        console.error('❌ Error loading products:', error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);




  const goToPrevious = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const goToNext = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ textAlign: 'center' }}>🛍 Catálogo de Productos</h2>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando productos...</p>
      ) : (
        <>
          <div
            className="product-list"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
          >
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.productId} product={product} />
              ))
            ) : (
              <p>No se encontraron productos.</p>
            )}
          </div>

          {/* Paginación */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <button onClick={goToPrevious} disabled={page === 1} style={{ marginRight: '1rem' }}>
              ◀ Anterior
            </button>
            <span>Página {page} de {totalPages}</span>
            <button onClick={goToNext} disabled={page === totalPages} style={{ marginLeft: '1rem' }}>
              Siguiente ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
