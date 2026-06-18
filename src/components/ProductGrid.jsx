import React from 'react';
import { FaStar, FaCartPlus } from 'react-icons/fa';
import { products } from '../data';
import '../index.css';

const ProductGrid = ({ onAddToCart }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '2rem', color: 'var(--color-white)' }}>Premium Supplies</h3>
        <button onClick={() => alert("Loading more products...")} style={{ background: 'none', border: 'none', color: 'var(--color-cyan)', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
          View All
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {products.map(product => (
          <div key={product.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            
            {/* Image Container */}
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.2)' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = 'https://loremflickr.com/800/800/box/all' }}
              />
            </div>

            {/* Content Container */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-cyan)', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase' }}>
                {product.category}
              </div>
              
              <h4 style={{ fontSize: '1.25rem', marginBottom: '12px', flex: 1 }}>{product.title}</h4>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < Math.floor(product.rating) ? "#ffbd2e" : "rgba(255,255,255,0.2)"} size={14} />
                ))}
                <span style={{ fontSize: '0.85rem', color: 'var(--color-white-muted)', marginLeft: '8px' }}>({product.reviews})</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)' }}>
                  ${product.price.toFixed(2)}
                </span>
                
                <button 
                  className="btn btn-cyan" 
                  style={{ padding: '10px', borderRadius: '50%' }} 
                  aria-label="Add to cart"
                  onClick={onAddToCart}
                >
                  <FaCartPlus size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
