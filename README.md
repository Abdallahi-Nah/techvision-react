# 🚀 TechVision — Modern Tech Company Website

<div align="center">

![TechVision Banner](https://img.shields.io/badge/TechVision-React%20App-00d4ff?style=for-the-badge&logo=react&logoColor=white)
![Version](https://img.shields.io/badge/version-1.0.0-ffd166?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-4ade80?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Deployed](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A fully responsive, multilingual tech company website built with React 18**

[🌐 Live Demo](https://techvision-react.vercel.app/) · [📂 Source Code](#) · [🐛 Report Bug](#) · [💡 Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Sections](#-sections)
- [Multilingual Support](#-multilingual-support)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Author](#-author)
- [License](#-license)

---

## 🎯 About The Project

**TechVision** is a production-grade, fully responsive company website for a technology & software development firm. Built entirely with **React 18** (no backend required), it showcases modern web design practices including scroll animations, multilingual support, interactive components, and a stunning dark theme UI.

> Designed and developed by **Abdallahi Nah** as a complete frontend solution that can be adapted for any tech company.

---

## 🌐 Live Demo

<div align="center">

### 👉 [https://techvision-react.vercel.app/](https://techvision-react.vercel.app/)

</div>

---

## ✨ Features

### 🎨 Design & UI
- ✅ **Dark theme** with cohesive cyan/purple/gold color palette
- ✅ **Fully responsive** — works perfectly on all screen sizes (mobile, tablet, desktop)
- ✅ **Smooth scroll animations** with Intersection Observer API
- ✅ **Animated counter** stats that trigger on scroll
- ✅ **Typing animation** in the hero section
- ✅ **Portfolio filter** — filter projects by category
- ✅ **FAQ accordion** with smooth open/close transitions
- ✅ **Floating particle orbs** background effect
- ✅ **Animated grid background** in hero
- ✅ **Progress bar** that tracks scroll position
- ✅ **Scroll-to-top button**
- ✅ **CSS variables** for easy theming

### 🌍 Multilingual
- ✅ **Arabic (AR)** — RTL layout
- ✅ **English (EN)** — LTR layout
- ✅ **French (FR)** — LTR layout
- ✅ Instant language switching with full content translation
- ✅ Font and direction automatically adjust per language

### ⚙️ Technical
- ✅ **React 18** with functional components & hooks
- ✅ **Context API** for global language state management
- ✅ **Custom hooks** (useScrollReveal)
- ✅ **Zero backend** — runs entirely on the frontend
- ✅ **Form validation** without external libraries
- ✅ **Modular component architecture** — easy to maintain & extend
- ✅ **Optimized performance** — no unnecessary re-renders

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Framework |
| **React DOM** | 18.2.0 | DOM Rendering |
| **React Router DOM** | 6.21.0 | Navigation |
| **React Type Animation** | 3.2.0 | Typing effect in Hero |
| **React Intersection Observer** | 9.5.3 | Scroll reveal animations |
| **CSS3** | — | Styling, animations, responsive design |
| **Google Fonts** | — | Cairo, Sora, Playfair Display |
| **Vercel** | — | Hosting & Deployment |

---

## 📁 Project Structure

```
techvision-react/
│
├── 📄 public/
│   └── index.html                    # HTML entry point
│
├── 📂 src/
│   ├── index.js                      # React entry point
│   ├── index.css                     # Global styles & CSS variables
│   ├── App.jsx                       # Root component
│   │
│   ├── 📂 context/
│   │   └── LangContext.jsx           # Language state + all translations (AR/EN/FR)
│   │
│   ├── 📂 data/
│   │   └── index.js                  # All static data (projects, team, pricing...)
│   │
│   ├── 📂 hooks/
│   │   └── useScrollReveal.js        # Custom hook for scroll animations
│   │
│   └── 📂 components/
│       ├── Navbar/                   # Navigation bar + language switcher
│       ├── Hero/                     # Landing section with typing animation
│       ├── Services/                 # 6 service cards
│       ├── Portfolio/                # Projects grid with filter
│       ├── Stats/                    # Animated statistics counters
│       ├── Team/                     # Team members cards
│       ├── Pricing/                  # 3-tier pricing plans
│       ├── Testimonials/             # Client reviews
│       ├── FAQ/                      # Accordion FAQ
│       ├── Blog/                     # Blog/articles cards
│       ├── Careers/                  # Job listings
│       ├── Contact/                  # Contact form + info
│       ├── Footer/                   # Footer with links
│       └── UI/
│           └── ScrollToTop/          # Scroll to top button
│
└── 📄 package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js v18+** installed:
- Download from [nodejs.org](https://nodejs.org) — choose **LTS version**
- Verify installation: `node --version`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AbdallahiNah/techvision-react.git

# 2. Navigate to the project directory
cd techvision-react

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open automatically at **http://localhost:3000** 🎉

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the app in development mode |
| `npm run build` | Build the app for production |
| `npm test` | Launch the test runner |

---

## 📑 Sections

The website contains **12 fully designed sections**:

| # | Section | Description |
|---|---------|-------------|
| 1 | **🏠 Hero** | Full-screen landing with typing animation, floating code card & stats |
| 2 | **⚙️ Services** | 6 service cards (Web, Mobile, AI, Cloud, Security, Data) |
| 3 | **💼 Portfolio** | Project showcase with category filter (All / Web / Apps / AI) |
| 4 | **📊 Stats** | Animated counters — projects, clients, team size, years |
| 5 | **👥 Team** | Team member cards with roles and social links |
| 6 | **💰 Pricing** | 3-tier pricing plans (Starter / Professional / Enterprise) |
| 7 | **⭐ Testimonials** | Client reviews with star ratings |
| 8 | **❓ FAQ** | Accordion-style frequently asked questions |
| 9 | **📝 Blog** | Latest tech articles with read-time indicators |
| 10 | **💼 Careers** | Job listings with type, location and salary info |
| 11 | **📧 Contact** | Contact form with validation + company info |
| 12 | **🦶 Footer** | Links, social media, and status indicator |

---

## 🌍 Multilingual Support

The app supports **3 languages** with instant switching:

```
AR  →  Arabic   (العربية)   — RTL direction — Cairo font
EN  →  English              — LTR direction — Sora font
FR  →  Français             — LTR direction — Sora font
```

All translations are managed in a single file:

```
src/context/LangContext.jsx
```

To add a new language, simply add a new key to the `translations` object:

```js
const translations = {
  ar: { ... },
  en: { ... },
  fr: { ... },
  es: { ... }  // ← Add Spanish (or any language) here
};
```

---

## 🎨 Customization

### Change Colors
Edit the CSS variables in `src/index.css`:

```css
:root {
  --bg:      #070b14;   /* Main background */
  --accent:  #00d4ff;   /* Primary accent (cyan) */
  --accent2: #7b5ea7;   /* Secondary accent (purple) */
  --gold:    #ffd166;   /* Highlight color */
  --text:    #e8f0fe;   /* Primary text */
  --text2:   #8ba3c7;   /* Secondary text */
}
```

### Change Content
Edit `src/data/index.js` to update:
- Portfolio projects
- Team members
- Pricing plans
- Testimonials
- Blog posts
- Job listings

### Change Translations
Edit `src/context/LangContext.jsx` to update all text content in all 3 languages.

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

### Netlify

```bash
npm run build
netlify deploy --prod --dir=build
```

### Build for Production

```bash
npm run build
# Output is in the /build folder — ready to upload to any hosting
```

---

## 👤 Author

<div align="center">

**Abdallahi Nah**

[![Portfolio](https://img.shields.io/badge/Portfolio-techvision--react.vercel.app-00d4ff?style=for-the-badge&logo=vercel)](https://techvision-react.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-AbdallahiNah-181717?style=for-the-badge&logo=github)](https://github.com/AbdallahiNah)

> *"Building the digital future, one component at a time."*

</div>

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for personal or commercial projects.

```
MIT License

Copyright (c) 2025 Abdallahi Nah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

⭐ **If you found this project useful, please give it a star!** ⭐

Made with ❤️ by **Abdallahi Nah**

</div>
