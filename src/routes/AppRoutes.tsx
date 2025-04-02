// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../modules/catalog/pages/HomePage";
import LoginPage from "../modules/identity/pages/LoginPage";
import CreateUserPage from "../modules/identity/pages/CreateUserpage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/users/create" element={<CreateUserPage />} />
      <Route
        path="/cart"
  
      />
    </Routes>
  );
};

export default AppRoutes;
