import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import './Services.css';

const colors = [
  'rgba(0,212,255,0.1)','rgba(123,94,167,0.1)','rgba(255,209,102,0.1)',
  'rgba(255,107,107,0.1)','rgba(74,222,128,0.1)','rgba(0,212,255,0.1)'
];

const ServiceCard = ({ item, index, color }) => {
  const { ref, visible } = useScrollReveal(0.15);
  return (
    <div ref={ref} className={`service-card reveal d${index+1} ${visible?'visible':''}`}>
      <div className="service-icon" style={{ background: color }}>{item.icon}</div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <a href="#contact" className="service-link" onClick={e=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>
        {/* more text set by parent */}
      </a>
    </div>
  );
};

const Services = () => {
  const { t } = useLang();
  const s = t.services;
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="services-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{s.tag}</div>
        <h2 className="section-title">{s.title.split(' ').map((w,i)=> i===s.title.split(' ').length-1 ? <span key={i}>{w}</span> : w+' ')}</h2>
        <p className="section-subtitle">{s.subtitle}</p>
      </div>
      <div className="services-grid">
        {s.items.map((item, i) => {
          const { ref, visible } = useScrollRevealItem(i);
          return (
            <div key={i} ref={ref} className={`service-card reveal d${(i%6)+1} ${visible?'visible':''}`}>
              <div className="service-icon" style={{ background: colors[i] }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="service-link" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
                {s.more} →
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Custom hook per card to avoid Rules of Hooks violation
function useScrollRevealItem(index) {
  const { ref, visible } = useScrollReveal(0.1);
  return { ref, visible };
}

export default Services;
