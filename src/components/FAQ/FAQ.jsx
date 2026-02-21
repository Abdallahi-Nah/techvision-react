import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import { faqData } from '../../data';
import './FAQ.css';

const FAQ = () => {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(null);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="faq" className="faq-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{t.faq.tag}</div>
        <h2 className="section-title"><span>{t.faq.title}</span></h2>
      </div>
      <div className="faq-list">
        {faqData.map((item, i) => (
          <div key={item.id} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.q[lang]}</span>
              <span className="faq-arrow">▼</span>
            </button>
            <div className="faq-a">
              <p>{item.a[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQ;
