import React, { useState } from 'react';
import { FaWhatsapp, FaShieldAlt, FaSearch } from 'react-icons/fa';
import { livestock } from '../data';
import '../index.css';

const Livestock = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extend dummy data for tabs
  const allLivestock = [
    ...livestock,
    { id: 201, name: "Neon Tetra School", scientific: "Paracheirodon innesi", price: 19.99, inStock: true, image: "/freshwater.png", type: "Freshwater" },
    { id: 202, name: "Discus Pair", scientific: "Symphysodon", price: 149.99, inStock: true, image: "/freshwater.png", type: "Freshwater" },
    { id: 301, name: "Ultra Torch Coral", scientific: "Euphyllia glabrescens", price: 299.99, inStock: true, image: "/saltwater.png", type: "Corals" }
  ].map(item => ({...item, type: item.type || "Saltwater"}));

  const filtered = allLivestock.filter(f => {
    const matchesTab = activeTab === 'All' || f.type === activeTab;
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.scientific.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleWhatsappClick = (name) => {
    alert(`Redirecting to WhatsApp to request a video of the ${name}...`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px 0' }}>
      
      {/* Header & Badges */}
      <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Explore Our Live Livestock</h2>
          <p style={{ color: 'var(--color-white-muted)' }}>Pristine, quarantined aquatic life ready for your reef.</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39, 201, 63, 0.1)', padding: '16px 24px', borderRadius: '12px', border: '1px solid rgba(39, 201, 63, 0.3)' }}>
          <FaShieldAlt size={32} color="#27c93f" />
          <div>
            <div style={{ fontWeight: 800, color: '#27c93f' }}>Live Arrival Guarantee</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-white-muted)' }}>Overnight temperature-controlled shipping.</div>
          </div>
        </div>
      </div>

      {/* Search and Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          {['All', 'Freshwater', 'Saltwater', 'Corals'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: activeTab === tab ? 'var(--color-cyan)' : 'var(--color-white-muted)',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '8px 16px',
                borderBottom: activeTab === tab ? '2px solid var(--color-cyan)' : '2px solid transparent',
                transition: 'all 0.2s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(0, 240, 255, 0.4)', borderRadius: '8px', padding: '10px 16px', minWidth: '300px' }}>
          <FaSearch color="var(--color-cyan)" />
          <input 
            type="text" 
            placeholder="Search for species or common name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: 'var(--color-white)', flex: 1, marginLeft: '12px', fontSize: '1rem', outline: 'none' }}
          />
        </div>
      </div>

      {/* Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '24px' 
      }}>
        {filtered.length > 0 ? filtered.map(fish => (
          <div key={fish.id} className="glass" style={{ borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <img src={fish.image} alt={fish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {fish.inStock && <span className="badge" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(10,24,43,0.8)', backdropFilter: 'blur(4px)' }}>In Stock</span>}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-cyan)', textTransform: 'uppercase', fontWeight: 800, marginBottom: '4px' }}>{fish.type}</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{fish.name}</h4>
              <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-white-muted)', marginBottom: '16px' }}>{fish.scientific}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-white)' }}>${fish.price.toFixed(2)}</span>
                
                <button className="btn btn-outline-cyan" onClick={() => handleWhatsappClick(fish.name)} style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                  <FaWhatsapp size={16} /> Request Video
                </button>
              </div>
            </div>
          </div>
        )) : (
          <div style={{ gridColumn: '1 / -1', padding: '40px', textAlign: 'center', color: 'var(--color-white-muted)' }}>
            No livestock matches your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Livestock;
