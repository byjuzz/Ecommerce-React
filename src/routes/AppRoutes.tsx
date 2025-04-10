// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../modules/catalog/pages/HomePage';
import LoginPage from '../modules/identity/pages/LoginPage';
import CreateUserPage from '../modules/identity/pages/users/CreateUserpage';
import UserListPage from '../modules/identity/pages/users/UserListPage';
import RoleListPage from '../modules/identity/pages/roles/RoleListPage';
import AssignRolePage from '../modules/identity/pages/roles/AssignRolePage';
import CreateRolePage from '../modules/identity/pages/roles/CreateRolePage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/users/create" element={<CreateUserPage />} />
      <Route path="/admin/users" element={<UserListPage />} />
      <Route path="/cart" />
      <Route path="/admin/roles" element={<RoleListPage />} />
      <Route path="/admin/assign-role" element={<AssignRolePage />} />
      <Route path="/admin/roles/create" element={<CreateRolePage />} />

    </Routes>
  );
};

export default AppRoutes;
