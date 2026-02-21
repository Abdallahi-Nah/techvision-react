import React from 'react';
import { useLang } from '../../context/LangContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLang();
  const f = t.footer;

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const cols = [
    { title: f.services, links: f.s, anchors: ['services','services','services','services'] },
    { title: f.company, links: f.c, anchors: ['team','portfolio','blog','careers'] },
    { title: f.legal, links: f.l, anchors: ['#','#','#','#'] },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo footer-logo" onClick={e=>{e.preventDefault();scrollTo('home')}}>
            Tech<span>Vision</span>
          </a>
          <p>{f.desc}</p>
          <div className="footer-socials">
            {['in','𝕏','gh','yt'].map(s => <div key={s} className="social-dot">{s}</div>)}
          </div>
        </div>
        {cols.map((col, i) => (
          <div key={i} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link, j) => (
                <li key={j}>
                  <button onClick={() => scrollTo(col.anchors[j])}>{link}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>{f.copy}</span>
        <div className="footer-status">
          <span className="status-dot">●</span>
          <span>{f.status}</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
