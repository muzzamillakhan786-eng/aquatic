import React from 'react';
import { Link } from 'react-router-dom';
import ReactSlick from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { livestock } from '../data';
import '../index.css';

const Slider = ReactSlick.default || ReactSlick;

const Home = () => {
  // Grab fishes for the sliders
  const popularFishes = livestock.slice(0, 2);
  const newArrivals = [
    { id: 201, name: "Neon Tetra School", scientific: "Paracheirodon innesi", price: 19.99, inStock: true, image: "/freshwater.png", type: "Freshwater" },
    { id: 301, name: "Ultra Torch Coral", scientific: "Euphyllia glabrescens", price: 299.99, inStock: true, image: "/saltwater.png", type: "Corals" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderCard = (fish) => (
    <div key={fish.id} style={{ padding: '0 12px' }}>
      <div className="glass-panel" style={{ borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '400px' }}>
        <div style={{ width: '100%', height: '250px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
          <img src={fish.image} alt={fish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          {fish.inStock && <span className="badge" style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(10,24,43,0.8)', backdropFilter: 'blur(4px)', padding: '6px 12px', fontSize: '0.85rem' }}>In Stock</span>}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 12px' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--color-cyan)', textTransform: 'uppercase', fontWeight: 800, marginBottom: '8px' }}>{fish.type || "Saltwater"}</div>
          <h4 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{fish.name}</h4>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-white-muted)', marginBottom: 'auto', paddingBottom: '16px' }}>{fish.scientific}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
            <span style={{ fontWeight: 800, color: 'var(--color-white)', fontSize: '1.5rem' }}>${fish.price.toFixed(2)}</span>
            <Link to="/livestock" className="btn btn-cyan" style={{ padding: '10px 24px', fontSize: '1rem', textDecoration: 'none' }}>View Info</Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '40px' }}>
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '70vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '4rem 2rem',
        overflow: 'hidden',
        borderRadius: '24px',
        marginTop: '24px'
      }}>
        {/* Cinematic Hero Video/Image Placeholder */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
          transform: 'scale(1.05)',
          animation: 'slowZoom 20s infinite alternate'
        }}></div>
        
        {/* Gradient fade */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(4,11,22,0.4) 0%, var(--color-mariana) 100%)',
          zIndex: -1
        }}></div>

        <div style={{ maxWidth: '900px', textAlign: 'center', zIndex: 1 }} className="animate-float">
          <h2 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5.5rem)', 
            marginBottom: '1.5rem',
            textShadow: '0 0 40px rgba(0, 240, 255, 0.5)',
            lineHeight: '1'
          }} className="text-gradient">
            The Pristine Deep,<br/>In Your Living Room.
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', 
            color: 'var(--color-white-muted)', 
            marginBottom: '3rem',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            Elevate your space with custom luxury tank installations, thriving live corals, and premium aquatic life.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/livestock" className="btn btn-cyan" style={{ fontSize: '1.2rem', padding: '16px 32px', textDecoration: 'none' }}>
              Shop Live Fish & Corals
            </Link>
            <Link to="/dry-goods" className="btn btn-outline-cyan" style={{ fontSize: '1.2rem', padding: '16px 32px', textDecoration: 'none', background: 'rgba(0,0,0,0.4)' }}>
              Premium Equipment
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Fishes Slider */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)' }}>Most Popular</h3>
        </div>
        <div className="custom-slider">
          <Slider {...sliderSettings}>
            {popularFishes.map(renderCard)}
          </Slider>
        </div>
      </section>

      {/* New Arrivals Slider */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--color-white)' }}>New Arrivals</h3>
        </div>
        <div className="custom-slider">
          <Slider {...sliderSettings}>
            {newArrivals.map(renderCard)}
          </Slider>
        </div>
      </section>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        .slick-prev:before, .slick-next:before {
          color: var(--color-cyan) !important;
          font-size: 32px !important;
        }
        .slick-prev { left: -40px !important; z-index: 10; }
        .slick-next { right: -40px !important; z-index: 10; }
        .slick-dots li button:before {
          color: var(--color-white-muted) !important;
        }
        .slick-dots li.slick-active button:before {
          color: var(--color-cyan) !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
