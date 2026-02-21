import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import { testimonialsData } from '../../data';
import './Testimonials.css';

const Testimonials = () => {
  const { t, lang } = useLang();
  const { ref, visible } = useScrollReveal();
  const te = t.testimonials;

  return (
    <section id="testimonials" className="testimonials-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{te.tag}</div>
        <h2 className="section-title"><span>{te.title}</span></h2>
        <p className="section-subtitle">{te.subtitle}</p>
      </div>
      <div className="testimonials-grid">
        {testimonialsData.map((item, i) => {
          const { ref: r, visible: v } = useTestRef(i);
          return (
            <div key={item.id} ref={r} className={`t-card reveal d${i+1} ${v?'visible':''}`}>
              <div className="stars">{'★'.repeat(item.rating)}</div>
              <p className="t-text">{item.text[lang]}</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: item.gradient }}>{item.emoji}</div>
                <div>
                  <div className="t-name">{item.name[lang]}</div>
                  <div className="t-title">{item.title[lang]}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

function useTestRef(i) {
  return useScrollReveal(0.1);
}

export default Testimonials;
