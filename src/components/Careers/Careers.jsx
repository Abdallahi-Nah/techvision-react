import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import { jobsData } from '../../data';
import './Careers.css';

const Careers = () => {
  const { t, lang } = useLang();
  const c = t.careers;
  const { ref, visible } = useScrollReveal();

  return (
    <section id="careers" className="careers-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{c.tag}</div>
        <h2 className="section-title"><span>{c.title}</span></h2>
        <p className="section-subtitle">{c.subtitle}</p>
      </div>
      <div className="careers-grid">
        {jobsData.map((job, i) => {
          const { ref: r, visible: v } = useJobRef();
          return (
            <div key={job.id} ref={r} className={`job-card reveal d${i+1} ${v?'visible':''}`}>
              <div className="job-header">
                <div className="job-title">{job.title[lang]}</div>
                <span className="job-badge">{job.type === 'fullTime' ? c.fullTime : c.partTime}</span>
              </div>
              <div className="job-dept">{job.dept[lang]}</div>
              <div className="job-meta">
                <span>📍 {job.location === 'remote' ? c.remote : c.hybrid}</span>
                <span>💰 {job.salary}</span>
                <span>🎯 {job.exp}+ {lang === 'ar' ? 'سنوات' : lang === 'fr' ? 'ans' : 'years'}</span>
              </div>
              <button
                className="btn-primary"
                style={{ fontSize:'0.85rem', padding:'10px 24px', width:'fit-content' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
              >{c.apply}</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

function useJobRef() { return useScrollReveal(0.1); }

export default Careers;
