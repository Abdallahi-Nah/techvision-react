import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  ar: {
    nav: { home:'الرئيسية', services:'الخدمات', portfolio:'أعمالنا', team:'الفريق', pricing:'الأسعار', blog:'المدونة', careers:'وظائف', contact:'تواصل' },
    hero: {
      badge: '🚀 شركة رائدة في التكنولوجيا',
      title1: 'نبني مستقبل',
      title2: 'التكنولوجيا الرقمية',
      desc: 'نحن نطور حلولاً برمجية مبتكرة تحوّل أفكارك إلى واقع رقمي متكامل. فريقنا من الخبراء مستعد لمساعدتك في تحقيق أهدافك التقنية.',
      cta1: 'ابدأ مشروعك',
      cta2: 'اكتشف أعمالنا',
      stat1: 'مشروع منجز',
      stat2: 'عميل راضٍ',
      stat3: 'سنوات خبرة',
    },
    services: {
      tag: 'خدماتنا',
      title: 'ماذا نقدم لك',
      subtitle: 'نوفر حلولاً تقنية شاملة تلبي احتياجات عملك وتتجاوز توقعاتك',
      more: 'اعرف أكثر',
      items: [
        { icon:'🌐', title:'تطوير المواقع الإلكترونية', desc:'نصمم ونطور مواقع احترافية سريعة ومتجاوبة باستخدام React وNext.js وNode.js' },
        { icon:'📱', title:'تطوير تطبيقات الجوال', desc:'نبني تطبيقات iOS وAndroid أصلية وهجينة بتجربة مستخدم استثنائية وأداء عالٍ' },
        { icon:'🤖', title:'الذكاء الاصطناعي وML', desc:'ندمج حلول الذكاء الاصطناعي وتعلم الآلة في منتجاتك لأتمتة العمليات وتحليل البيانات' },
        { icon:'☁️', title:'الحوسبة السحابية وDevOps', desc:'نقدم حلول AWS وAzure وGoogle Cloud مع خطوط CI/CD وبنية تحتية قابلة للتوسع' },
        { icon:'🔒', title:'الأمن السيبراني', desc:'نحمي أصولك الرقمية باختبار الاختراق وتدقيق الأمان وإدارة المخاطر الإلكترونية' },
        { icon:'📊', title:'تحليل البيانات والـ BI', desc:'نحول بياناتك الخام إلى رؤى استراتيجية عبر لوحات تحكم تفاعلية متقدمة' },
      ]
    },
    portfolio: {
      tag: 'أعمالنا',
      title: 'مشاريعنا المتميزة',
      subtitle: 'نماذج من أفضل ما أنجزناه لعملائنا حول العالم',
      filters: ['الكل','مواقع','تطبيقات','ذكاء اصطناعي'],
      filterKeys: ['all','web','app','ai'],
    },
    stats: { items: ['مشروع منجز','عميل راضٍ حول العالم','مطور وخبير','سنوات ابتكار'] },
    team: {
      tag: 'فريقنا',
      title: 'العقول المبدعة',
      subtitle: 'فريق من الخبراء المتحمسين لبناء المستقبل الرقمي',
    },
    pricing: {
      tag: 'الأسعار',
      title: 'خطط تناسب جميع الاحتياجات',
      subtitle: 'اختر الخطة المناسبة لمشروعك، يمكنك الترقية في أي وقت',
      perMonth: '/شهر',
      popular: 'الأكثر شيوعاً',
      cta: 'ابدأ الآن',
      ctaEnterprise: 'تواصل معنا',
      custom: 'مخصص',
    },
    testimonials: {
      tag: 'آراء العملاء',
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'ثقة عملائنا هي أعظم إنجازاتنا',
    },
    faq: {
      tag: 'الأسئلة الشائعة',
      title: 'أسئلة يسألها الجميع',
    },
    blog: {
      tag: 'مدونتنا',
      title: 'آخر المقالات التقنية',
      subtitle: 'نشارك معرفتنا لمساعدتك في مواكبة عالم التكنولوجيا',
      read: 'اقرأ المزيد',
    },
    careers: {
      tag: 'وظائف',
      title: 'انضم إلى فريق الابتكار',
      subtitle: 'نبحث عن عقول متميزة شغوفة ببناء مستقبل التكنولوجيا',
      apply: 'تقدم الآن',
      fullTime: 'دوام كامل',
      partTime: 'دوام جزئي',
      remote: 'عن بُعد',
      hybrid: 'هجين',
    },
    contact: {
      tag: 'تواصل معنا',
      title: 'لنبني مشروعك معاً',
      subtitle: 'فريقنا مستعد للاستماع إليك والإجابة عن استفساراتك',
      infoTitle: 'معلومات التواصل',
      infoDesc: 'نحن هنا لمساعدتك. تواصل معنا عبر أي من القنوات التالية.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      address: 'العنوان',
      hours: 'ساعات العمل',
      location: 'الجزائر العاصمة، الجزائر',
      workHours: 'الأحد – الخميس: ٨ص – ٦م',
      namePh: 'الاسم الكامل',
      emailPh: 'بريدك الإلكتروني',
      phonePh: 'رقم هاتفك',
      serviceLabel: 'نوع الخدمة',
      messagePh: 'أخبرنا عن مشروعك...',
      send: 'إرسال الرسالة',
      success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً. 🎉',
      services: ['اختر الخدمة...','تطوير موقع ويب','تطبيق جوال','حلول AI','استشارة تقنية'],
    },
    footer: {
      desc: 'نحن شركة تقنية متخصصة في بناء المستقبل الرقمي لعملائنا حول العالم.',
      services: 'الخدمات',
      company: 'الشركة',
      legal: 'قانوني',
      copy: '© 2025 TechVision. جميع الحقوق محفوظة.',
      status: 'جميع الأنظمة تعمل',
      s: ['تطوير الويب','تطبيقات الجوال','الذكاء الاصطناعي','السحابة'],
      c: ['من نحن','أعمالنا','المدونة','وظائف'],
      l: ['سياسة الخصوصية','شروط الاستخدام','اتفاقية الخدمة','الأمان'],
    },
  },
  en: {
    nav: { home:'Home', services:'Services', portfolio:'Portfolio', team:'Team', pricing:'Pricing', blog:'Blog', careers:'Careers', contact:'Contact' },
    hero: {
      badge: '🚀 Leading Technology Company',
      title1: 'We Build the Future of',
      title2: 'Digital Technology',
      desc: 'We develop innovative software solutions that turn your ideas into complete digital reality. Our team of experts is ready to help you achieve your technical goals.',
      cta1: 'Start Your Project',
      cta2: 'Explore Our Work',
      stat1: 'Projects Done',
      stat2: 'Happy Clients',
      stat3: 'Years Experience',
    },
    services: {
      tag: 'OUR SERVICES',
      title: 'What We Offer You',
      subtitle: 'We provide comprehensive technical solutions that meet your business needs and exceed your expectations',
      more: 'Learn More',
      items: [
        { icon:'🌐', title:'Web Development', desc:'We design and develop fast, responsive professional websites using React, Next.js and Node.js' },
        { icon:'📱', title:'Mobile App Development', desc:'We build native and hybrid iOS & Android apps with exceptional UX and high performance' },
        { icon:'🤖', title:'AI & Machine Learning', desc:'We integrate AI and ML solutions into your products to automate processes and analyze data' },
        { icon:'☁️', title:'Cloud & DevOps', desc:'We provide AWS, Azure and Google Cloud solutions with CI/CD pipelines and scalable infrastructure' },
        { icon:'🔒', title:'Cybersecurity', desc:'We protect your digital assets through penetration testing, security auditing and cyber risk management' },
        { icon:'📊', title:'Data Analytics & BI', desc:'We transform your raw data into actionable strategic insights through advanced interactive dashboards' },
      ]
    },
    portfolio: {
      tag: 'OUR WORK',
      title: 'Our Outstanding Projects',
      subtitle: 'Samples of our best work delivered to clients worldwide',
      filters: ['All','Web','Apps','AI'],
      filterKeys: ['all','web','app','ai'],
    },
    stats: { items: ['Successful Projects','Happy Clients Worldwide','Developers & Experts','Years of Innovation'] },
    team: {
      tag: 'OUR TEAM',
      title: 'The Creative Minds',
      subtitle: 'A team of passionate experts building the digital future',
    },
    pricing: {
      tag: 'PRICING',
      title: 'Plans for Every Need',
      subtitle: 'Choose the right plan for your project, upgrade anytime',
      perMonth: '/mo',
      popular: 'Most Popular',
      cta: 'Get Started',
      ctaEnterprise: 'Contact Us',
      custom: 'Custom',
    },
    testimonials: {
      tag: 'TESTIMONIALS',
      title: 'What Our Clients Say',
      subtitle: 'Client trust is our greatest achievement',
    },
    faq: {
      tag: 'FAQ',
      title: 'Frequently Asked Questions',
    },
    blog: {
      tag: 'BLOG',
      title: 'Latest Tech Articles',
      subtitle: 'We share our knowledge to help you keep up with the technology world',
      read: 'Read More',
    },
    careers: {
      tag: 'CAREERS',
      title: 'Join the Innovation Team',
      subtitle: 'We seek exceptional minds passionate about building the future',
      apply: 'Apply Now',
      fullTime: 'Full-time',
      partTime: 'Part-time',
      remote: 'Remote',
      hybrid: 'Hybrid',
    },
    contact: {
      tag: 'CONTACT US',
      title: "Let's Build Your Project Together",
      subtitle: 'Our team is ready to listen and answer your questions',
      infoTitle: 'Contact Information',
      infoDesc: 'We are here to help you. Reach us through any of the following channels.',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Address',
      hours: 'Working Hours',
      location: 'Algiers, Algeria',
      workHours: 'Sun – Thu: 8AM – 6PM',
      namePh: 'Full Name',
      emailPh: 'Your email address',
      phonePh: 'Your phone number',
      serviceLabel: 'Service Type',
      messagePh: 'Tell us about your project...',
      send: 'Send Message',
      success: 'Message sent successfully! We\'ll get back to you soon. 🎉',
      services: ['Select a service...','Web Development','Mobile App','AI Solutions','Tech Consulting'],
    },
    footer: {
      desc: 'We are a tech company specialized in building the digital future for our clients worldwide.',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      copy: '© 2025 TechVision. All rights reserved.',
      status: 'All systems operational',
      s: ['Web Development','Mobile Apps','AI Solutions','Cloud'],
      c: ['About Us','Portfolio','Blog','Careers'],
      l: ['Privacy Policy','Terms of Use','Service Agreement','Security'],
    },
  },
  fr: {
    nav: { home:'Accueil', services:'Services', portfolio:'Portfolio', team:'Équipe', pricing:'Tarifs', blog:'Blog', careers:'Emplois', contact:'Contact' },
    hero: {
      badge: '🚀 Entreprise Technologique Leader',
      title1: 'Nous Construisons l\'Avenir de la',
      title2: 'Technologie Numérique',
      desc: 'Nous développons des solutions logicielles innovantes qui transforment vos idées en réalité numérique. Notre équipe d\'experts est prête à vous aider.',
      cta1: 'Démarrer votre projet',
      cta2: 'Découvrir nos travaux',
      stat1: 'Projets réalisés',
      stat2: 'Clients satisfaits',
      stat3: 'Ans d\'expérience',
    },
    services: {
      tag: 'NOS SERVICES',
      title: 'Ce que nous offrons',
      subtitle: 'Nous fournissons des solutions techniques complètes qui répondent à vos besoins',
      more: 'En savoir plus',
      items: [
        { icon:'🌐', title:'Développement Web', desc:'Sites professionnels rapides avec React, Next.js et Node.js' },
        { icon:'📱', title:'Développement Mobile', desc:'Apps iOS & Android natives et hybrides avec UX exceptionnelle' },
        { icon:'🤖', title:'IA & Machine Learning', desc:'Intégration de solutions IA dans vos produits pour automatiser les processus' },
        { icon:'☁️', title:'Cloud & DevOps', desc:'Solutions AWS, Azure et Google Cloud avec pipelines CI/CD' },
        { icon:'🔒', title:'Cybersécurité', desc:'Protection de vos actifs numériques par tests de pénétration et audit' },
        { icon:'📊', title:'Analyse de Données & BI', desc:'Transformez vos données en insights stratégiques via des dashboards avancés' },
      ]
    },
    portfolio: {
      tag: 'NOS TRAVAUX',
      title: 'Nos Projets Remarquables',
      subtitle: 'Exemples de nos meilleurs travaux livrés à travers le monde',
      filters: ['Tous','Web','Apps','IA'],
      filterKeys: ['all','web','app','ai'],
    },
    stats: { items: ['Projets Réalisés','Clients Satisfaits','Développeurs & Experts','Années d\'Innovation'] },
    team: {
      tag: 'NOTRE ÉQUIPE',
      title: 'Les Esprits Créatifs',
      subtitle: 'Une équipe d\'experts passionnés par la construction du futur numérique',
    },
    pricing: {
      tag: 'TARIFS',
      title: 'Plans pour Tous les Besoins',
      subtitle: 'Choisissez le plan adapté, évoluez à tout moment',
      perMonth: '/mois',
      popular: 'Le Plus Populaire',
      cta: 'Commencer',
      ctaEnterprise: 'Nous contacter',
      custom: 'Sur Mesure',
    },
    testimonials: {
      tag: 'TÉMOIGNAGES',
      title: 'Ce que Disent Nos Clients',
      subtitle: 'La confiance de nos clients est notre plus grande réalisation',
    },
    faq: {
      tag: 'FAQ',
      title: 'Questions Fréquemment Posées',
    },
    blog: {
      tag: 'BLOG',
      title: 'Derniers Articles Tech',
      subtitle: 'Nous partageons notre savoir pour vous aider à suivre le monde technologique',
      read: 'Lire la suite',
    },
    careers: {
      tag: 'EMPLOIS',
      title: "Rejoignez l'Équipe Innovation",
      subtitle: 'Nous recherchons des esprits brillants passionnés par la technologie',
      apply: 'Postuler',
      fullTime: 'Temps plein',
      partTime: 'Mi-temps',
      remote: 'À distance',
      hybrid: 'Hybride',
    },
    contact: {
      tag: 'CONTACT',
      title: 'Construisons Votre Projet Ensemble',
      subtitle: 'Notre équipe est prête à vous écouter et répondre à vos questions',
      infoTitle: 'Informations de Contact',
      infoDesc: 'Nous sommes là pour vous aider via les canaux suivants.',
      email: 'Email',
      phone: 'Téléphone',
      address: 'Adresse',
      hours: 'Heures de Travail',
      location: 'Alger, Algérie',
      workHours: 'Dim – Jeu : 8h – 18h',
      namePh: 'Nom Complet',
      emailPh: 'Votre adresse email',
      phonePh: 'Votre numéro de téléphone',
      serviceLabel: 'Type de Service',
      messagePh: 'Parlez-nous de votre projet...',
      send: 'Envoyer le Message',
      success: 'Message envoyé avec succès ! Nous vous contacterons bientôt. 🎉',
      services: ['Choisir un service...','Développement Web','App Mobile','Solutions IA','Conseil Tech'],
    },
    footer: {
      desc: 'Société tech spécialisée dans la construction de l\'avenir numérique pour nos clients.',
      services: 'Services',
      company: 'Entreprise',
      legal: 'Légal',
      copy: '© 2025 TechVision. Tous droits réservés.',
      status: 'Tous les systèmes opérationnels',
      s: ['Développement Web','Apps Mobiles','Solutions IA','Cloud'],
      c: ['À Propos','Portfolio','Blog','Emplois'],
      l: ['Politique de Confidentialité','Conditions d\'Utilisation','Accord de Service','Sécurité'],
    },
  }
};

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.style.fontFamily = isRTL
      ? "'Cairo', 'Sora', sans-serif"
      : "'Sora', 'Cairo', sans-serif";
  }, [lang, isRTL]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
export default LangContext;
