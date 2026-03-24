import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import downloadLogo from '../assets/download.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-navy)', color: 'white', padding: '80px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <img src={downloadLogo} alt="Icon" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontFamily: "'Cinzel', serif", 
                fontWeight: 700, 
                fontSize: '2.2rem', 
                color: 'white', 
                lineHeight: 1 
              }}>VANESSA PASSOS</span>
              <span style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '0.7rem', 
                color: 'var(--accent-gold)', 
                letterSpacing: '8.2px', 
                fontWeight: 600, 
                marginTop: '6px',
                textTransform: 'uppercase',
                display: 'block',
                width: '100%'
              }}>CONSULTORIA JURÍDICA</span>
            </div>
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
        
        <div style={{ gridColumn: 'span 1' }}>
          <h4 style={{ marginBottom: '25px', color: 'var(--accent-gold)' }}>Contato</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2.2, opacity: 0.7, fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Phone size={16} color="var(--accent-gold)" /> <a href="https://wa.me/5521982486110" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>(21) 98248-6110</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Mail size={16} color="var(--accent-gold)" /> <a href="mailto:dravanessa.passos@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>dravanessa.passos@gmail.com</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Instagram size={16} color="var(--accent-gold)" /> <a href="https://www.instagram.com/seuspassosjuridicos/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>@seuspassosjuridicos</a>
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

      <div id="localizacao" className="container" style={{ marginBottom: '60px' }}>
        <div style={{ borderLeft: '4px solid var(--accent-gold)', paddingLeft: '20px', marginBottom: '30px' }}>
          <h4 style={{ marginBottom: '10px', color: 'var(--accent-gold)' }}>Nossa Localização</h4>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', opacity: 0.9 }}>
            <MapPin size={24} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
            <span>Rua Honório Pimenta 280, loja 03 . Comendador Soares . Nova Iguaçu . CEP 26281-250</span>
          </p>
        </div>
        <div style={{ 
          width: '100%', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <iframe 
            title="Localização do Escritório"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.136398030283!2d-43.49079542470559!3d-22.691763979407334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9967b6657876a1%3A0xc3f8f117ce67ce68!2sR.%20Hon%C3%B3rio%20Pimenta%2C%20280%20-%20Comendador%20Soares%2C%20Nova%20Igua%C3%A7u%20-%20RJ%2C%2026281-250!5e0!3m2!1spt-BR!2sbr!4v1711288800000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Seus Passos Jurídicos - Vanessa Passos. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
