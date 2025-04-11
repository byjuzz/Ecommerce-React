// src/components/SidebarMenu.tsx
import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../modules/identity/context/authContext';
import { Link } from 'react-router-dom';

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ open }) => (open ? '100%' : '0')};
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: 0.3s ease;
  z-index: 999;
`;

const Sidebar = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 320px;
  background-color: #fff;
  transform: translateX(${({ open }) => (open ? '0' : '-100%')});
  transition: transform 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 10px;
`;

const SectionTitle = styled.h4`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;

const Item = styled.div`
  padding: 10px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #007bff;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const UserText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Avatar = styled(FaUserCircle)`
  font-size: 30px;
  color: #007bff;
`;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ open, onClose }) => {
  const { user } = useAuth();
  return (
    <Overlay open={open} onClick={onClose}>
      <Sidebar open={open} onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>×</CloseBtn>
        {/* Usuario arriba */}
        <UserSection>
          <Avatar />
          <div>
            {user ? (
              <UserText style={{ marginBottom: '4px' }}>
                Hola, {user.name}
              </UserText>
            ) : (
              <>
                <Link
                  to="/login"
                  style={{
                    fontSize: '14px',
                    color: '#007bff',
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginBottom: '4px',
                  }}
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/register"
                  style={{
                    fontSize: '14px',
                    color: '#007bff',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Registrarte
                </Link>
              </>
            )}
          </div>
        </UserSection>

        <SectionTitle>Categorías Populares</SectionTitle>
        <Item>Electrónica</Item>
        <Item>Hogar Inteligente</Item>
        <Item>Moda Masculina</Item>
        <Item>Moda Femenina</Item>
        <Item>Juguetes y Juegos</Item>
        <Item>Salud y Belleza</Item>
        <Item>Deportes y Fitness</Item>

        <SectionTitle>Promociones</SectionTitle>
        <Item>Ofertas del Día</Item>
        <Item>Nuevos Productos</Item>
        <Item>Liquidación</Item>
        <Item>Recomendados para ti</Item>

        <SectionTitle>Mi Cuenta</SectionTitle>
        <Item>Mis Pedidos</Item>
        <Item>Mis Favoritos</Item>
        <Item>Carrito</Item>
        <Item>Configuración</Item>

        <SectionTitle>Programas</SectionTitle>
        <Item>Suscripciones</Item>
        <Item>Membresía Premium</Item>
        <Item>Envío Express</Item>
        <Item>Garantía Extendida</Item>
        <SectionTitle>Ayuda</SectionTitle>
        <Item>Centro de Soporte</Item>
        <Item>Devoluciones</Item>
        <Item>Preguntas Frecuentes</Item>
        <Item>Contáctanos</Item>
      </Sidebar>
    </Overlay>
  );
};

export default SidebarMenu;
