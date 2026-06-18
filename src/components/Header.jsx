import React, { useState } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Header = ({ cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleCartClick = () => {
    alert(`You have ${cartCount} items in your cart.`);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header glass" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textDecoration: 'none' }} onClick={closeMenu}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h4l3-9 5 18 3-9h5" />
          </svg>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }} className="text-gradient">AQUATIC</h1>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: '2rem', background: 'rgba(255,255,255,0.03)', padding: '8px 24px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Link to="/livestock" style={{ color: location.pathname === '/livestock' ? 'var(--color-cyan)' : 'var(--color-white)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Live Fish & Corals</Link>
            <Link to="/dry-goods" style={{ color: location.pathname === '/dry-goods' ? 'var(--color-cyan)' : 'var(--color-white)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Dry Goods</Link>
          </div>
          
          <Link to="/maintenance" className="btn btn-orange" style={{ textDecoration: 'none' }}>
            Book Tank Maintenance
          </Link>
          
          <button onClick={handleCartClick} style={{ background: 'none', border: 'none', color: 'var(--color-white)', cursor: 'pointer', position: 'relative' }}>
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--color-cyan)', color: 'var(--color-mariana)', borderRadius: '50%', width: '20px', height: '20px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {cartCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="mobile-nav-toggle">
          <button onClick={handleCartClick} style={{ background: 'none', border: 'none', color: 'var(--color-white)', cursor: 'pointer', position: 'relative' }}>
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--color-cyan)', color: 'var(--color-mariana)', borderRadius: '50%', width: '16px', height: '16px', fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {cartCount}
              </span>
            )}
          </button>
          <button 
            style={{ background: 'none', border: 'none', color: 'var(--color-white)', cursor: 'pointer' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{ padding: '16px 24px', background: 'rgba(10, 24, 43, 0.95)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '16px' }} className="mobile-menu">
          <Link to="/livestock" onClick={closeMenu} style={{ color: location.pathname === '/livestock' ? 'var(--color-cyan)' : 'var(--color-white)', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>Live Fish & Corals</Link>
          <Link to="/dry-goods" onClick={closeMenu} style={{ color: location.pathname === '/dry-goods' ? 'var(--color-cyan)' : 'var(--color-white)', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>Dry Goods</Link>
          <Link to="/maintenance" onClick={closeMenu} className="btn btn-orange" style={{ width: '100%', marginTop: '8px', textDecoration: 'none', textAlign: 'center' }}>
            Book Tank Maintenance
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
