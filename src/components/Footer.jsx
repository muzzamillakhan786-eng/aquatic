import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-mariana-light)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 24px 24px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l3-9 5 18 3-9h5" />
            </svg>
            <h2 style={{ fontSize: '1.25rem', margin: 0 }} className="text-gradient">AQUATIC OASIS</h2>
          </div>
          <p style={{ color: 'var(--color-white-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
            Elevating your space with premium custom luxury tank installations, thriving live corals, and sustainably sourced marine life.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: 'var(--color-cyan)' }}><FaFacebook size={20} /></a>
            <a href="#" style={{ color: 'var(--color-cyan)' }}><FaInstagram size={20} /></a>
            <a href="#" style={{ color: 'var(--color-cyan)' }}><FaTwitter size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--color-white)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="/livestock" style={{ color: 'var(--color-white-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Live Fish & Corals</a></li>
            <li><a href="/dry-goods" style={{ color: 'var(--color-white-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Equipment & Supplies</a></li>
            <li><a href="/maintenance" style={{ color: 'var(--color-white-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Book Maintenance</a></li>
            <li><a href="#" style={{ color: 'var(--color-white-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Shipping Policy</a></li>
            <li><a href="#" style={{ color: 'var(--color-white-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Live Arrival Guarantee</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--color-white)' }}>Contact Us</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <FaMapMarkerAlt color="var(--color-cyan)" style={{ marginTop: '4px' }} />
              <span style={{ color: 'var(--color-white-muted)', fontSize: '0.9rem' }}>123 Ocean View Drive,<br/>Coral Springs, FL 33065</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <FaPhone color="var(--color-cyan)" />
              <span style={{ color: 'var(--color-white-muted)', fontSize: '0.9rem' }}>(555) 123-4567</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <FaEnvelope color="var(--color-cyan)" />
              <span style={{ color: 'var(--color-white-muted)', fontSize: '0.9rem' }}>support@aquaticoasis.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--color-white-muted)', fontSize: '0.85rem' }}>
        &copy; {new Date().getFullYear()} Aquatic Oasis. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
