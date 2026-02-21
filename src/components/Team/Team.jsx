import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import { teamData } from '../../data';
import './Team.css';

const TeamCard = ({ member, lang, index }) => {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`team-card reveal d${index+1} ${visible?'visible':''}`}>
      <div className="team-avatar" style={{ background: member.gradient }}>{member.emoji}</div>
      <h3>{member.name[lang]}</h3>
      <div className="team-role">{member.role[lang]}</div>
      <p>{member.bio[lang]}</p>
      <div className="team-socials">
        {['in','𝕏','gh'].map(s => <div key={s} className="social-dot">{s}</div>)}
      </div>
    </div>
  );
};

const Team = () => {
  const { t, lang } = useLang();
  const { ref, visible } = useScrollReveal();
  return (
    <section id="team" className="team-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{t.team.tag}</div>
        <h2 className="section-title"><span>{t.team.title}</span></h2>
        <p className="section-subtitle">{t.team.subtitle}</p>
      </div>
      <div className="team-grid">
        {teamData.map((m, i) => <TeamCard key={m.id} member={m} lang={lang} index={i} />)}
      </div>
    </section>
  );
};
export default Team;
