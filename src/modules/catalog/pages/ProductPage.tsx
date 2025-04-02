/*import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleDelete = async (id: number) => {
        await deleteProduct(id);
        fetchProducts();
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductPage;*/