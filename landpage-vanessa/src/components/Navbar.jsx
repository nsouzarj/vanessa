import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import downloadLogo from '../assets/download.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleEvents = () => {
      setIsMobile(window.innerWidth < 992);
      setScrolled(window.scrollY > 20);
    };
    
    handleEvents();
    window.addEventListener('resize', handleEvents);
    window.addEventListener('scroll', handleEvents);
    
    return () => {
      window.removeEventListener('resize', handleEvents);
      window.removeEventListener('scroll', handleEvents);
    };
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.02)',
      padding: scrolled ? '0.2rem 0' : '0.6rem 0',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: scrolled ? '10px' : '12px', transition: 'all 0.4s ease' }}>
          <img src={downloadLogo} alt="Icon" style={{ 
            height: scrolled ? (isMobile ? '42px' : '58px') : (isMobile ? '55px' : '85px'), 
            width: 'auto', 
            objectFit: 'contain',
            transition: 'all 0.4s ease'
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease' }}>
            <span style={{ 
              fontFamily: "'Cinzel', serif", 
              fontWeight: 700, 
              fontSize: scrolled ? (isMobile ? '1.4rem' : '1.9rem') : (isMobile ? '1.6rem' : '2.6rem'), 
              color: 'var(--primary-navy)', 
              lineHeight: 1, 
              letterSpacing: '1px',
              transition: 'all 0.4s ease'
            }}>VANESSA PASSOS</span>
            <span style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: scrolled ? (isMobile ? '0.45rem' : '0.62rem') : (isMobile ? '0.52rem' : '0.82rem'), 
              color: 'var(--accent-gold)', 
              letterSpacing: scrolled ? (isMobile ? '4.2px' : '6.8px') : (isMobile ? '6px' : '9.8px'), 
              fontWeight: 700, 
              marginTop: scrolled ? '1px' : '4px',
              textTransform: 'uppercase',
              display: 'block',
              width: '100%',
              transition: 'all 0.4s ease'
            }}>CONSULTORIA JURÍDICA</span>
          </div>
        </div>
        
        {/* Desktop Links - Only show if NOT mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#inicio" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Início</a>
            <a href="#servicos" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Serviços</a>
            <a href="#sobre" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Sobre</a>
            <a href="#localizacao" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Localização</a>
            <a href="https://wa.me/5521982486110" target="_blank" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', fontSize: '0.85rem' }}>
              <Phone size={14} />
              Consultar Agora
            </a>
          </div>
        )}

        {/* Mobile Toggle */}
        {isMobile && (
          <div style={{ cursor: 'pointer', padding: '5px' }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} color="var(--primary-navy)" /> : <Menu size={28} color="var(--primary-navy)" />}
          </div>
        )}
      </div>

      {/* Mobile Menu Content */}
      {isMobile && isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          zIndex: 999,
          borderTop: '1px solid #eee'
        }}>
          <a href="#inicio" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>Início</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>Serviços</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>Sobre</a>
          <a href="#localizacao" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>Localização</a>
          <a href="https://wa.me/5521982486110" target="_blank" className="btn btn-primary" style={{ textAlign: 'center', padding: '15px' }}>
            <Phone size={18} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            Consultar Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
