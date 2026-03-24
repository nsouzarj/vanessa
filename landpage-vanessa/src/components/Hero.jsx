import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero-bg.png'; // Checking if this matches live

const Hero = () => {
  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      overflow: 'hidden',
      padding: 'max(140px, 15vh) 0 60px'
    }}>
      <div className="gradient-overlay"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '750px' }}
        >
          <span style={{ 
            display: 'inline-block', 
            backgroundColor: 'var(--accent-gold)', 
            color: 'var(--primary-navy)',
            padding: '6px 16px',
            borderRadius: '4px',
            fontSize: 'max(0.7rem, 1.2vw)',
            fontWeight: 800,
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Especialista em Direito do INSS
          </span>
          
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700 }}>
            Garantindo os Seus Direitos no <span style={{ color: 'var(--accent-gold)' }}>INSS</span> com Segurança
          </h1>
          
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px' }}>
            Seja para aposentadoria, BPC/LOAS ou auxílio-doença, estamos aqui para guiar cada um dos seus passos jurídicos rumo ao melhor benefício.
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5521982486110" className="btn btn-accent" style={{ padding: '16px 32px', fontSize: '1rem', flex: '1 1 auto', textAlign: 'center' }}>
              Agendar Consultoria Gratuita
            </a>
            <a href="#servicos" className="btn" style={{ border: '1px solid white', color: 'white', padding: '16px 32px', fontSize: '1rem', flex: '1 1 auto', textAlign: 'center' }}>
              Conhecer Serviços
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-buttons { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
