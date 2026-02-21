import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../../context/LangContext';
import './Stats.css';

const statValues = [200, 150, 45, 8];
const statSuffix = ['+','+','+','+'];

const Counter = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        let cur = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          cur += step;
          if (cur >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(cur));
        }, 2000/60);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started, target]);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-num">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => {
  const { t } = useLang();
  return (
    <section id="stats" className="stats-section">
      <div className="stats-grid">
        {statValues.map((v, i) => (
          <Counter key={i} target={v} suffix={statSuffix[i]} label={t.stats.items[i]} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
