import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../modules/identity/context/authContext';

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const { user } = useAuth();
  const isAdmin =
    user?.roles?.includes('Admin') || user?.roles?.includes('Editor');

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

          {!isAdmin && (
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
                  <Link to="/admin/users" style={dropdownItem}>
                    Usuarios
                  </Link>
                  <Link to="/admin/roles" style={dropdownItem}>
                    Roles
                  </Link>
                  <Link to="/admin/assign-role" style={dropdownItem}>
                    Asignar rol
                  </Link>
                  <Link to="/admin/roles/create" style={dropdownItem}>
                    Crear rol
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Derecha: logo */}
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
      </nav>

      <SidebarMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
