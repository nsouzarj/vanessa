import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
