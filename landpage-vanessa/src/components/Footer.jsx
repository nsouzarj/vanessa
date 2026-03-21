import React from 'react';
import { Scale, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-navy)', color: 'white', padding: '80px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
            <Scale size={32} color="var(--accent-gold)" />
            <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>VANESSA PASSOS</span>
          </div>
          <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.8 }}>
            Escritório especializado em Direito Previdenciário em Nova Iguaçu e atendimento online para todo o Brasil. Comprometimento e transparência com o seu benefício.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '25px', color: 'var(--accent-gold)' }}>Navegação</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2.2 }}>
            <li><a href="#inicio" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>Início</a></li>
            <li><a href="#servicos" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>Serviços</a></li>
            <li><a href="#sobre" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>Sobre</a></li>
            <li><a href="https://wa.me/5521982486110" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>Contato</a></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '25px', color: 'var(--accent-gold)' }}>Contato</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2.2, opacity: 0.7, fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={16} /> Nova Iguaçu, RJ
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={16} /> contato@seuspassosjuridicos.com
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Instagram size={16} /> <a href="https://www.instagram.com/seuspassosjuridicos/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>@seuspassosjuridicos</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '25px', color: 'var(--accent-gold)' }}>Horário de Atendimento</h4>
          <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '10px' }}>
            Segunda a Sexta: 09h às 18h
          </p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
             <a href="https://www.instagram.com/seuspassosjuridicos/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}><Instagram /></a>
             <a href="#" style={{ color: 'var(--accent-gold)' }}><Linkedin /></a>
          </div>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Seus Passos Jurídicos - Vanessa Passos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
