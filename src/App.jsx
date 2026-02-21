import React from 'react';
import { LangProvider } from './context/LangContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Stats from './components/Stats/Stats';
import Team from './components/Team/Team';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/UI/ScrollToTop';
import './index.css';

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Stats />
          <Team />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Blog />
          <Careers />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LangProvider>
  );
}

export default App;
