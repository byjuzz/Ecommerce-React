export interface UpdateStockItem {
  productId: number;
  stock: number;
  action: number; // 0 = Subtract
}

export interface UpdateStockPayload {
  items: UpdateStockItem[];
}
