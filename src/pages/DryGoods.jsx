import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProductGrid from '../components/ProductGrid';
import '../index.css';

const DryGoods = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLevel, setActiveLevel] = useState('All');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "AquaLumax Pro LED System",
    "Reef Builder Calcium",
    "Premium Marine Flakes",
    "Coral Amino Nutrition Drops",
    "Protein Skimmer 5000",
    "Wavemaker Pump Mini"
  ];

  const filteredSuggestions = suggestions.filter(s => s.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== '');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px 0' }}>
      
      {/* Search and Header */}
      <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Premium Aquarium</h2>
          <p style={{ color: 'var(--color-white-muted)' }}>Premium equipment, filters, lighting, and food to sustain your ecosystem.</p>
        </div>

        {/* Autocomplete Search */}
        <div style={{ position: 'relative', maxWidth: '600px', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(0, 240, 255, 0.4)', borderRadius: '8px', padding: '12px 16px' }}>
            <FaSearch color="var(--color-cyan)" />
            <input 
              type="text" 
              placeholder="Search for specific technical items (e.g. Protein Skimmer)..." 
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setShowSuggestions(true); }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              style={{ background: 'transparent', border: 'none', color: 'var(--color-white)', flex: 1, marginLeft: '12px', fontSize: '1rem', outline: 'none' }}
            />
          </div>
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(10, 24, 43, 0.95)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '0 0 8px 8px', marginTop: '4px', overflow: 'hidden' }}>
              {filteredSuggestions.map((s, i) => (
                <div 
                  key={i} 
                  style={{ padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  onClick={() => { setSearchTerm(s); setShowSuggestions(false); }}
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Experience Level Filters */}
      <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
        {['All', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
          <button 
            key={level}
            onClick={() => setActiveLevel(level)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: activeLevel === level ? 'var(--color-cyan)' : 'var(--color-white-muted)',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '8px 16px',
              borderBottom: activeLevel === level ? '2px solid var(--color-cyan)' : '2px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Grid wrapper */}
      <div style={{ opacity: activeLevel !== 'All' ? 0.7 : 1, transition: 'opacity 0.3s' }}>
        <ProductGrid onAddToCart={onAddToCart} />
      </div>
      
    </div>
  );
};

export default DryGoods;
