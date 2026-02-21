import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import './Contact.css';

const Contact = () => {
  const { t, lang } = useLang();
  const c = t.contact;
  const { ref, visible } = useScrollReveal();
  const { ref: rLeft, visible: vLeft } = useScrollReveal(0.15);
  const { ref: rForm, visible: vForm } = useScrollReveal(0.1);

  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', message:'' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(lang === 'ar' ? 'يرجى ملء الحقول المطلوبة' : lang === 'fr' ? 'Veuillez remplir les champs requis' : 'Please fill required fields');
      return;
    }
    setError('');
    setSent(true);
    setForm({ name:'', email:'', phone:'', service:'', message:'' });
    setTimeout(() => setSent(false), 6000);
  };

  const infoItems = [
    { icon:'📧', label: c.email, value: 'hello@techvision.dev' },
    { icon:'📞', label: c.phone, value: '+213 555 123 456' },
    { icon:'📍', label: c.address, value: c.location },
    { icon:'⏰', label: c.hours, value: c.workHours },
  ];

  return (
    <section id="contact" className="contact-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{c.tag}</div>
        <h2 className="section-title"><span>{c.title}</span></h2>
        <p className="section-subtitle">{c.subtitle}</p>
      </div>

      <div className="contact-wrapper">
        <div ref={rLeft} className={`contact-info reveal-left ${vLeft?'visible':''}`}>
          <h3>{c.infoTitle}</h3>
          <p>{c.infoDesc}</p>
          {infoItems.map((item, i) => (
            <div key={i} className="info-item">
              <div className="info-icon">{item.icon}</div>
              <div>
                <div className="info-label">{item.label}</div>
                <div className="info-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form ref={rForm} className={`contact-form reveal ${vForm?'visible':''}`} onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label>{c.namePh}</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder={c.namePh} />
            </div>
            <div className="form-group">
              <label>{c.emailPh}</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder={c.emailPh} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{c.phonePh}</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder={c.phonePh} />
            </div>
            <div className="form-group">
              <label>{c.serviceLabel}</label>
              <select name="service" value={form.service} onChange={handleChange}>
                {c.services.map((s, i) => <option key={i} value={i===0?'':s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>{c.messagePh}</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder={c.messagePh} rows={5} />
          </div>
          {error && <div className="form-error">{error}</div>}
          {sent && <div className="form-success">{c.success}</div>}
          <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center' }}>
            {c.send} ✉️
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
