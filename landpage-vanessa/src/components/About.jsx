import React from 'react';
import { motion } from 'framer-motion';
import vanessaPhoto from '../assets/vanessa-photo.png';

const About = () => {
  return (
    <section id="sobre" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container about-grid">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="about-image-container"
        >
          <div style={{ position: 'relative' }}>
             <img 
               src={vanessaPhoto} 
               alt="Vanessa Passos - Consultoria Jurídica"
               style={{ 
                 width: '100%', 
                 maxHeight: '550px', 
                 objectFit: 'cover', 
                 borderRadius: '8px',
                 boxShadow: 'var(--shadow-soft)',
                 backgroundColor: '#fff'
               }}
             />
             <div className="accent-box" style={{ 
               position: 'absolute', 
               bottom: '-15px', 
               right: '-15px', 
               width: '120px', 
               height: '120px', 
               border: '6px solid var(--accent-gold)', 
               zIndex: -1 
             }}></div>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-navy)' }}>Conheça a <span style={{ color: 'var(--accent-gold)' }}>Dra. Vanessa Passos</span></h2>
          <h4 style={{ color: '#666', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>Advogada desde 2008</h4>
          
          <div style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.8', textAlign: 'justify' }}>
            <p style={{ marginBottom: '15px' }}>
              Sou advogada desde 2008, pós-graduada em Direito do Trabalho e Processo do Trabalho, com especialização em Direito Previdenciário. Minha trajetória inclui anos de experiência em Direito Condominial e do Consumidor, atuando em grandes empresas, mas minha maior motivação vem da minha vida pessoal. ❤️
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Sou mãe da <strong>Sofia</strong>, uma menina incrível e com espectro autista (TEA). A partir da nossa vivência, percebi de perto quantos desafios as famílias enfrentam para acessar informações e direitos que já lhes pertencem.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Foi assim que nasceu meu propósito no Direito Previdenciário: ajudar pessoas e famílias em situações de vulnerabilidade a conquistarem seus direitos, especialmente em benefícios como o <strong>BPC/LOAS</strong>.
            </p>
            
            <p style={{ marginBottom: '25px', fontStyle: 'normal', color: 'var(--primary-navy)', fontWeight: 500 }}>
              "Este é um espaço feito para orientar, acolher e apoiar. É onde transformamos realidades através do Direito." ⚖️✨
            </p>
          </div>
          
          <ul style={{ listStyle: 'none', marginBottom: '35px' }}>
            {['Expertise em BPC/LOAS e Autismo', 'Especialista em Cálculos Previdenciários', 'Atendimento Humanizado para Famílias TEA'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%' }}></span>
                {item}
              </li>
            ))}
          </ul>
          
          <a href="https://wa.me/5521982486110" className="btn btn-primary" style={{ padding: '16px 32px', display: 'inline-block', textAlign: 'center', width: 'auto' }}>
            Quero uma Consulta Especializada
          </a>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-image-container {
            order: -1;
            margin-bottom: 20px;
          }
          .accent-box { display: none; }
        }
      `}</style>
    </section>
  );
};

export default About;
