import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { livestock } from '../data';
import '../index.css';

const LivestockSidebar = () => {

  const handleWhatsappClick = (name) => {
    alert(`Redirecting to WhatsApp to request a video of the ${name || 'livestock'}...`);
  };

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h3 style={{ fontSize: '1.75rem', color: 'var(--color-white)', marginBottom: '16px' }}>Live Livestock</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {livestock.map(fish => (
          <div key={fish.id} className="glass" style={{ borderRadius: '12px', padding: '12px', display: 'flex', gap: '16px', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
            
            {/* Thumbnail */}
            <div style={{ width: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <img 
                src={fish.image} 
                alt={fish.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                onError={(e) => { e.target.src = 'https://loremflickr.com/400/400/fish/all' }}
              />
            </div>

            {/* Info */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{fish.name}</h4>
                {fish.inStock && <span className="badge">In Stock</span>}
              </div>
              <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--color-white-muted)', marginBottom: '8px', margin: 0 }}>{fish.scientific}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, color: 'var(--color-cyan)' }}>${fish.price.toFixed(2)}</span>
                
                <button 
                  onClick={() => handleWhatsappClick(fish.name)}
                  style={{ background: 'none', border: 'none', color: '#25D366', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  <FaWhatsapp size={16} /> <span style={{ opacity: 0.8 }}>Video</span>
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Promo Card */}
      <div className="glass-panel" style={{ padding: '24px', textAlign: 'center', marginTop: '16px', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(4, 11, 22, 0.5) 100%)' }}>
        <h4 style={{ marginBottom: '12px', color: 'var(--color-cyan)' }}>Can't find it?</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-white-muted)', marginBottom: '16px' }}>We do custom livestock sourcing. Chat with our experts today.</p>
        <button className="btn btn-outline-cyan" style={{ width: '100%' }} onClick={() => handleWhatsappClick('custom order')}>
          <FaWhatsapp size={18} /> Chat Now
        </button>
      </div>

    </aside>
  );
};

export default LivestockSidebar;
