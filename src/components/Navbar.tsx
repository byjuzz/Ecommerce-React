import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../modules/identity/context/authContext';
import { useCart } from '../modules/cart/context/CartContext'; // Ajusta la ruta si es necesario

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const { user } = useAuth();
  const { cart } = useCart();
console.log('Roles del usuario:', user?.roles);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isAdmin =
    user?.roles?.includes('Admin');

  const dropdownItem: React.CSSProperties = {
    padding: '10px 16px',
    textDecoration: 'none',
    display: 'block',
    color: '#212529',
    fontWeight: 500,
  };

  return (
    <>
      <nav
        style={{
          background: '#212529',
          color: 'white',
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* IZQUIERDA */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              marginRight: '1rem',
              cursor: 'pointer',
            }}
          >
            <FaBars />
          </button>

          <h1 style={{ margin: 0, fontSize: '25px' }}>J2 Store</h1>

          {isAdmin && (
            <div
              style={{ position: 'relative', marginLeft: '20px' }}
              onMouseEnter={() => setAdminDropdownOpen(true)}
              onMouseLeave={() => setAdminDropdownOpen(false)}
            >
              <button
                style={{
                  backgroundColor: '#343a40',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Administrador ▾
              </button>

              {adminDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '38px',
                    left: 0,
                    backgroundColor: '#fff',
                    color: '#212529',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                    borderRadius: '6px',
                    zIndex: 10,
                  }}
                >
                  <Link to="/admin/users" style={dropdownItem}>Usuarios</Link>
                  <Link to="/admin/stocks" style={dropdownItem}>Admin stock</Link>
                  <Link to="/admin/roles" style={dropdownItem}>Roles</Link>
                  <Link to="/admin/assign-role" style={dropdownItem}>Asignar rol</Link>
                  <Link to="/admin/roles/create" style={dropdownItem}>Crear rol</Link>
                  <Link to="/admin/products/create" style={dropdownItem}>Crear producto</Link>
                  <Link to="/profile" style={dropdownItem}>Perfil</Link>
                  <Link to="/admin/categories/create" style={dropdownItem}>Crear categoría</Link>
                  <Link to="/admin/categories" style={dropdownItem}>Lista categoría</Link>
                  <Link to="/admin/products" style={dropdownItem}>Lista productos</Link>
                  <Link to="/products/:id" style={dropdownItem}>Detalle</Link>
                  <Link to="/checkout" style={dropdownItem}>Checkout</Link>
                  <Link to="/cart" style={dropdownItem}>Carrito</Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* DERECHA: carrito + logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Ícono carrito */}
          <Link to="/cart" style={{ position: 'relative', color: 'white' }}>
            <FaShoppingCart size={22} />
            {totalItems > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {totalItems}
              </span>
            )}
          </Link>

          {/* Logo */}
          <Link to="/">
            <img
              src="/assets/icono.png"
              alt="Logo J2 Store"
              style={{
                height: '47px',
                width: '47px',
                objectFit: 'cover',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            />
          </Link>
        </div>
      </nav>

      <SidebarMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
