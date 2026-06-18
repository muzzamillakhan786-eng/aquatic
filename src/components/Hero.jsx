import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '60vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '4rem 2rem',
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }}></div>
      
      {/* Gradient fade to bottom */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(4,11,22,0.3) 0%, var(--color-mariana) 100%)',
        zIndex: -1
      }}></div>

      <div style={{ maxWidth: '800px', textAlign: 'center', zIndex: 1 }} className="animate-float">
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          marginBottom: '1rem',
          textShadow: '0 0 30px rgba(0, 240, 255, 0.4)'
        }} className="text-gradient">
          Bring the Ocean Into Your Home
        </h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
          color: 'var(--color-white-muted)', 
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          Premium marine life, live corals, and custom luxury tank installations. Discover the pristine beauty of the deep blue.
        </p>
      </div>
    </section>
  );
};

export default Hero;
