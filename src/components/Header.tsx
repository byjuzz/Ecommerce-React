// src/components/Header.tsx
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../modules/identity/context/authContext";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #007bff;
  padding: 15px;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #0056b3;

  &:hover {
    background-color: #003d80;
  }
`;

const StyledButton = styled.button`
  color: white;
  background-color: #d9534f;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isAuthenticated = !!user;

  return (
    <NavContainer>
      <h1>J2 Store</h1>
      <NavLinks>
        <StyledLink to="/">Inicio</StyledLink>
        {!isAuthenticated && <StyledLink to="/login">Login</StyledLink>}
        {isAuthenticated && <StyledLink to="/products">Productos</StyledLink>}
        {isAuthenticated && (
          <StyledButton
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Cerrar sesión
          </StyledButton>
        )}
      </NavLinks>
    </NavContainer>
  );
}

export default Header;
