import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import { FaBars } from 'react-icons/fa'; // Asegúrate de tener: npm install react-icons
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        {/* Izquierda: botón hamburguesa + nombre */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => setMenuOpen(true)}
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
        </div>

        {/* Derecha: logo como imagen enlazada al Home */}
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

      <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
