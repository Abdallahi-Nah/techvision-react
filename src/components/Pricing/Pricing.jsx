import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import { pricingData } from '../../data';
import './Pricing.css';

const PricingCard = ({ plan, index, t }) => {
  const { ref, visible } = useScrollReveal(0.1);
  const { lang } = useLang();
  return (
    <div ref={ref} className={`pricing-card reveal d${index+1} ${visible?'visible':''} ${plan.featured?'featured':''}`}>
      {plan.featured && <div className="popular-badge">{t.popular}</div>}
      <div className="plan-name">{plan.name[lang]}</div>
      <div className="plan-price">
        {plan.price ? <>{plan.price}<span>{t.perMonth}</span></> : t.custom}
      </div>
      <ul className="plan-features">
        {plan.features.map((f, i) => (
          <li key={i} className={f.included ? '' : 'excluded'}>
            <span className="check">{f.included ? '✓' : '✗'}</span>
            {f[lang]}
          </li>
        ))}
      </ul>
      <button
        className={plan.featured ? 'btn-primary' : 'btn-outline'}
        style={{ width:'100%', justifyContent:'center' }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
      >
        {plan.id === 3 ? t.ctaEnterprise : t.cta}
      </button>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLang();
  const p = t.pricing;
  const { ref, visible } = useScrollReveal();
  return (
    <section id="pricing" className="pricing-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{p.tag}</div>
        <h2 className="section-title"><span>{p.title}</span></h2>
        <p className="section-subtitle">{p.subtitle}</p>
      </div>
      <div className="pricing-grid">
        {pricingData.map((plan, i) => <PricingCard key={plan.id} plan={plan} index={i} t={p} />)}
      </div>
    </section>
  );
};
export default Pricing;
