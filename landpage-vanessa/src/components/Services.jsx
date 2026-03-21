import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, HeartPulse, ClipboardCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    style={{
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-soft)',
      border: '1px solid #f0f0f0',
      transition: 'var(--transition-smooth)'
    }}
    whileHover={{ y: -10, borderColor: 'var(--accent-gold)' }}
  >
    <div style={{ 
      backgroundColor: 'var(--bg-cream)', 
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: '20px'
    }}>
      <Icon size={28} color="var(--primary-navy)" />
    </div>
    <h3 style={{ marginBottom: '15px', color: 'var(--primary-navy)' }}>{title}</h3>
    <p style={{ color: '#555', fontSize: '0.95rem' }}>{description}</p>
  </motion.div>
);

const Services = () => {
  const servicesList = [
    {
      icon: FileText,
      title: 'Aposentadorias',
      description: 'Análise completa do seu histórico para garantir a melhor regra e o maior valor possível de benefício.',
      delay: 0.1
    },
    {
      icon: Users,
      title: 'BPC/LOAS',
      description: 'Auxílio especializado para idosos e pessoas com deficiência que buscam o benefício assistencial.',
      delay: 0.2
    },
    {
      icon: HeartPulse,
      title: 'Auxílio-Doença',
      description: 'Orientação e acompanhamento para garantir seus direitos em momentos de incapacidade temporária.',
      delay: 0.3
    },
    {
      icon: ClipboardCheck,
      title: 'Planejamento Previdenciário',
      description: 'Saiba exatamente quando e como se aposentar com o máximo de retorno financeiro.',
      delay: 0.4
    }
  ];

  return (
    <section id="servicos">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--primary-navy)' }}>Nossas <span style={{ color: 'var(--accent-gold)' }}>Especialidades</span></h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-gold)', margin: '0 auto 20px' }}></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#555', fontSize: '1.1rem' }}>
            Oferecemos consultoria jurídica altamente especializada para destravar o seu benefício no INSS com agilidade e perícia.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px' 
        }}>
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
