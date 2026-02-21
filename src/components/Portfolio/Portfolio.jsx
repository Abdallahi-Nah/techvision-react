import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import { portfolioData } from '../../data';
import './Portfolio.css';

const Portfolio = () => {
  const { t, lang } = useLang();
  const p = t.portfolio;
  const [filter, setFilter] = useState('all');
  const { ref, visible } = useScrollReveal();

  const filtered = filter === 'all' ? portfolioData : portfolioData.filter(i => i.cat === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{p.tag}</div>
        <h2 className="section-title"><span>{p.title}</span></h2>
        <p className="section-subtitle">{p.subtitle}</p>
      </div>

      <div className="portfolio-filter">
        {p.filters.map((label, i) => (
          <button
            key={i}
            className={`filter-btn ${filter === p.filterKeys[i] ? 'active' : ''}`}
            onClick={() => setFilter(p.filterKeys[i])}
          >{label}</button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((item, i) => (
          <PortfolioCard key={item.id} item={item} lang={lang} index={i} />
        ))}
      </div>
    </section>
  );
};

const PortfolioCard = ({ item, lang, index }) => {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`portfolio-card reveal d${(index%6)+1} ${visible?'visible':''}`}>
      <div className="portfolio-img" style={{ background: item.bg }}>
        <span className="portfolio-emoji">{item.emoji}</span>
      </div>
      <div className="portfolio-body">
        <div className="portfolio-tags">
          {item.tags.map(tag => <span key={tag} className="ptag">{tag}</span>)}
        </div>
        <h3>{item.title[lang]}</h3>
        <p>{item.desc[lang]}</p>
      </div>
    </div>
  );
};

export default Portfolio;
