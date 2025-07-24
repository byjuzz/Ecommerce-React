// src/modules/admin/types/orderTypes.ts
export interface OrderDetailDto {
  orderDetailId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface OrderDto {
  orderId: number;
  orderNumber: string;
  status: number; 
  paymentType: number; 
  clientId: number;
  createdAt: string;
  total: number;
  items: OrderDetailDto[];
}

