export interface ProductInStock {
  productInStockId: number;
  productId: number;
  stock: number;
}

export interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
  stock: ProductInStock | null;
  imageUrl?: string; // URL de la imagen del producto
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
}