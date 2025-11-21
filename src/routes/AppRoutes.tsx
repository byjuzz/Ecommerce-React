// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import HomePage from '../modules/catalog/pages/HomePage';
import LoginPage from '../modules/identity/pages/LoginPage';
import CreateUserPage from '../modules/identity/pages/users/CreateUserpage';
import UserListPage from '../modules/identity/pages/users/UserListPage';
import RoleListPage from '../modules/identity/pages/roles/RoleListPage';
import AssignRolePage from '../modules/identity/pages/roles/AssignRolePage';
import CreateRolePage from '../modules/identity/pages/roles/CreateRolePage';
import RegisterPage from '../modules/identity/pages/RegisterPage';
import CreateProductPage from '../modules/catalog/pages/CreateProductPage';
import ProfilePage from '../modules/identity/pages/ProfilePage';
import CreateCategoryPage from '../modules/catalog/pages/CreateCategoryPage';
import CategoryListPage from '../modules/catalog/pages/CategoryListPage';
import EditProductPage from '../modules/catalog/pages/EditProductPage';
import ProductListPage from '../modules/catalog/pages/ProductListPage';
import ProductDetailPage from '../modules/catalog/pages/ProductDetailPage';
import MyOrdersPage from '../modules/orders/pages/MyOrdersPage';
import OrderDetailPage from '../modules/orders/pages/OrderDetailPage';
import CheckoutPage from '../modules/orders/pages/CheckoutPage';
import CartPage from '../modules/cart/pages/CartPage';
import CustomerListPage from '../modules/customers/pages/CustomerListPage';
import AdminStockPage from "../modules/admin/pages/AdminStockPage";




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/users/create" element={<CreateUserPage />} />
      <Route path="/admin/users" element={<UserListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/admin/roles" element={<RoleListPage />} />
      <Route path="/admin/assign-role" element={<AssignRolePage />} />
      <Route path="/admin/roles/create" element={<CreateRolePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin/products/create" element={<CreateProductPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/admin/categories/create" element={<CreateCategoryPage />} />
      <Route path="/admin/categories" element={<CategoryListPage />} />
      <Route path="/admin/products/:id/edit" element={<EditProductPage />} />
      <Route path="/admin/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/orders" element={<MyOrdersPage />} />
      <Route path="/orders/:id" element={<OrderDetailPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/admin/customers" element={<CustomerListPage />} />
      <Route path="/admin/stocks" element={<AdminStockPage />} />

  




    </Routes>
  );
};

export default AppRoutes;
