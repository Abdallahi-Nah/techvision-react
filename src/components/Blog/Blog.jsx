import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLang } from '../../context/LangContext';
import { blogData } from '../../data';
import './Blog.css';

const Blog = () => {
  const { t, lang } = useLang();
  const b = t.blog;
  const { ref, visible } = useScrollReveal();

  return (
    <section id="blog" className="blog-section">
      <div ref={ref} className={`section-header reveal ${visible?'visible':''}`}>
        <div className="section-tag">{b.tag}</div>
        <h2 className="section-title"><span>{b.title}</span></h2>
        <p className="section-subtitle">{b.subtitle}</p>
      </div>
      <div className="blog-grid">
        {blogData.map((post, i) => {
          const { ref: r, visible: v } = useBlogRef();
          return (
            <div key={post.id} ref={r} className={`blog-card reveal d${i+1} ${v?'visible':''}`}>
              <div className="blog-img" style={{ background: post.bg }}>
                <span className="blog-emoji">{post.emoji}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span>🗓 {post.date[lang]}</span>
                  <span>⏱ {post.readTime[lang]}</span>
                </div>
                <h3>{post.title[lang]}</h3>
                <p>{post.desc[lang]}</p>
                <button className="read-more">{b.read} →</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

function useBlogRef() { return useScrollReveal(0.1); }

export default Blog;
