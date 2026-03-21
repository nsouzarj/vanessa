import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section style={{ backgroundColor: 'var(--primary-navy)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Pronto para dar o próximo passo?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px' }}>
          Não deixe o seu benefício ser negado ou atrasado por falta de orientação especializada. Clique no botão abaixo e fale agora mesmo com nossa equipe.
        </p>
        
        <a href="https://wa.me/5521982486110" className="btn btn-accent" style={{ 
          fontSize: '1.2rem', 
          padding: '20px 50px', 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '12px',
          fontWeight: 700
        }}>
          <MessageCircle size={24} />
          Falar pelo WhatsApp
        </a>
        
        <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.7 }}>
          Atendimento rápido e personalizado para o seu caso.
        </p>
      </div>
    </section>
  );
};

export default ContactCTA;
