import React, { useState, useEffect } from 'react';
import { useLang } from '../../context/LangContext';
import './Navbar.css';

const Navbar = () => {
  const { lang, setLang, t, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrolled > 50);
      setProgress((scrolled / max) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['home','services','portfolio','team','pricing','blog','careers','contact'];
  const anchors  = ['home','services','portfolio','team','pricing','blog','careers','contact'];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="logo" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
          Tech<span>Vision</span>
        </a>
        <ul className="nav-links">
          {navItems.map((item, i) => (
            <li key={item}>
              <button onClick={() => scrollTo(anchors[i])}>{t.nav[item]}</button>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="lang-switcher">
            {['ar','en','fr'].map(l => (
              <button key={l} className={`lang-btn ${lang === l ? 'active' : ''}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className={`menu-btn ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item, i) => (
          <button key={item} onClick={() => scrollTo(anchors[i])}>{t.nav[item]}</button>
        ))}
        <div className="lang-switcher mobile-lang">
          {['ar','en','fr'].map(l => (
            <button key={l} className={`lang-btn ${lang === l ? 'active' : ''}`} onClick={() => { setLang(l); }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
