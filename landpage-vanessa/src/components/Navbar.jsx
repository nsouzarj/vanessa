import React, { useState, useEffect } from 'react';
import { Scale, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      padding: '0.8rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Scale size={isMobile ? 24 : 36} color="var(--primary-navy)" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 900, fontSize: isMobile ? '1rem' : '1.4rem', color: 'var(--primary-navy)', lineHeight: 1, letterSpacing: '0.5px' }}>VANESSA PASSOS</span>
            <span style={{ fontSize: isMobile ? '0.55rem' : '0.75rem', color: 'var(--accent-gold)', letterSpacing: '1.5px', fontWeight: 800, marginTop: '2px' }}>ADVOGADA PREVIDENCIARISTA</span>
          </div>
        </div>
        
        {/* Desktop Links - Only show if NOT mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#inicio" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Início</a>
            <a href="#servicos" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Serviços</a>
            <a href="#sobre" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Sobre</a>
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
