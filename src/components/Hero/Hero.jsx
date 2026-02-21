import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useLang } from "../../context/LangContext";
import "./Hero.css";

const Hero = () => {
  const { t, lang } = useLang();
  const h = t.hero;

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const typeSequence =
    lang === "ar"
      ? [
          "نطور المواقع",
          2000,
          "نبني التطبيقات",
          2000,
          "ندمج الذكاء الاصطناعي",
          2000,
          "نحقق أحلامك",
          2000,
        ]
      : lang === "fr"
      ? [
          "Développons des sites",
          2000,
          "Créons des apps",
          2000,
          "Intégrons l'IA",
          2000,
          "Réalisons vos rêves",
          2000,
        ]
      : [
          "Build Websites",
          2000,
          "Create Mobile Apps",
          2000,
          "Integrate AI",
          2000,
          "Achieve Your Goals",
          2000,
        ];

  return (
    <section id="home" className="hero">
      {/* Backgrounds */}
      <div className="hero-bg" />
      <div className="grid-bg" />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          {h.badge}
        </div>

        <h1 className="hero-title">
          <span className="line1">{h.title1}</span>
          <span className="line2">{h.title2}</span>
        </h1>

        <div className="hero-type">
          <span className="type-prefix">
            {lang === "ar" ? "نحن " : lang === "fr" ? "Nous " : "We "}
          </span>
          <TypeAnimation
            key={lang}
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="type-text"
          />
        </div>

        <p className="hero-desc">{h.desc}</p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            {h.cta1} <span className="arrow">→</span>
          </button>
          <button className="btn-outline" onClick={() => scrollTo("portfolio")}>
            {h.cta2}
          </button>
        </div>

        <div className="hero-stats">
          <div className="h-stat">
            <span className="h-num">+200</span>
            <span className="h-label">{h.stat1}</span>
          </div>
          <div className="h-stat-divider" />
          <div className="h-stat">
            <span className="h-num">+150</span>
            <span className="h-label">{h.stat2}</span>
          </div>
          <div className="h-stat-divider" />
          <div className="h-stat">
            <span className="h-num">8+</span>
            <span className="h-label">{h.stat3}</span>
          </div>
        </div>
      </div>

      {/* Visual card */}
      <div className="hero-visual">
        <div className="hero-card">
          <div className="card-top-bar" />
          <div className="fb fb1">⚡ Real-time API</div>
          <div className="fb fb2">🔒 Secure & Scalable</div>
          <div className="code-block">
            <div className="code-line">
              <span className="c-purple">const</span>{" "}
              <span className="c-blue">app</span> ={" "}
              <span className="c-green">TechVision</span>.
              <span className="c-yellow">init</span>({"{"}
            </div>
            <div className="code-line pl">
              <span className="c-blue">stack</span>:{" "}
              <span className="c-green">'MERN'</span>,
            </div>
            <div className="code-line pl">
              <span className="c-blue">design</span>:{" "}
              <span className="c-green">'Modern'</span>,
            </div>
            <div className="code-line pl">
              <span className="c-blue">performance</span>:{" "}
              <span className="c-yellow">99.9</span>,
            </div>
            <div className="code-line pl">
              <span className="c-blue">clients</span>:{" "}
              <span className="c-purple">Infinity</span>
            </div>
            <div className="code-line">{"}"});</div>
            <div className="code-line mt">
              <span className="c-gray">{"// ✓ Build successful in 0.3s"}</span>
            </div>
          </div>
          <div className="progress-bars">
            <div className="pb-fill" />
            <div className="pb-empty" />
          </div>
          <div className="tech-pills">
            {["React", "Node.js", "MongoDB", "Express"].map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
};

export default Hero;
