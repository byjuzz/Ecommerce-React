// src/components/Navbar.tsx
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../modules/identity/context/authContext';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 15px 30px;
  color: white;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #0056b3;
  transition: background 0.3s;

  &:hover {
    background-color: #003d80;
  }
`;

const LogoutButton = styled.button`
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #dc3545;
  border: none;
  color: white;
  transition: background 0.3s;

  &:hover {
    background-color: #a71d2a;
  }
`;

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isAdmin =
    user?.roles?.includes('Admin') || user?.roles?.includes('Editor');
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <NavContainer>
      <Logo>Ecommerce</Logo>
      <NavLinks>
        <StyledLink to="/">Inicio</StyledLink>
        {!user && <StyledLink to="/login">Login</StyledLink>}

        {isAdmin && (
          <>
            <StyledLink to="/admin/users/create">Crear Usuario</StyledLink>
            <StyledLink to="/admin/users">Usuarios</StyledLink>
            <StyledLink to="/admin/roles">Roles</StyledLink>
            <StyledLink to="/admin/assign-role">Asignar Rol</StyledLink>
          </>
        )}
        {user && (
          <LogoutButton onClick={handleLogout}>Cerrar sesión</LogoutButton>
        )}
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
