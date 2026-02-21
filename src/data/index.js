export const portfolioData = [
  { id:1, cat:'web', emoji:'🛒', bg:'linear-gradient(135deg,#0d2137,#0d4a6b)',
    title:{ ar:'منصة تجارة إلكترونية متكاملة', en:'Full E-commerce Platform', fr:'Plateforme E-commerce Complète' },
    desc:{ ar:'متجر ضخم يضم +50,000 منتج مع نظام دفع آمن', en:'Large online store with 50,000+ products', fr:'Grande boutique avec 50 000+ produits' },
    tags:['React','Node.js','MongoDB'] },
  { id:2, cat:'app', emoji:'💊', bg:'linear-gradient(135deg,#1a0d37,#4a1d96)',
    title:{ ar:'تطبيق صحة وعافية ذكي', en:'Smart Health & Wellness App', fr:'App Santé & Bien-être Intelligente' },
    desc:{ ar:'تطبيق جوال يتابع الصحة بالذكاء الاصطناعي', en:'AI-powered mobile health application', fr:'Application mobile santé avec IA' },
    tags:['React Native','Express','Firebase'] },
  { id:3, cat:'ai', emoji:'🤖', bg:'linear-gradient(135deg,#0d3718,#065f46)',
    title:{ ar:'نظام تحليل المشاعر', en:'Sentiment Analysis System', fr:'Système d\'Analyse de Sentiments' },
    desc:{ ar:'منصة AI لتحليل مشاعر العملاء', en:'AI platform for customer sentiment analysis', fr:'Plateforme IA pour analyse client' },
    tags:['Python','TensorFlow','API'] },
  { id:4, cat:'web', emoji:'🏦', bg:'linear-gradient(135deg,#370d0d,#7f1d1d)',
    title:{ ar:'منصة فينتك مصرفية', en:'FinTech Banking Platform', fr:'Plateforme FinTech Bancaire' },
    desc:{ ar:'تطبيق بنكي رقمي آمن مع تحويلات فورية', en:'Secure digital banking with instant transfers', fr:'Application bancaire numérique sécurisée' },
    tags:['Next.js','PostgreSQL','AWS'] },
  { id:5, cat:'app', emoji:'📚', bg:'linear-gradient(135deg,#1a1a0d,#713f12)',
    title:{ ar:'منصة تعليم إلكترونية', en:'E-Learning Platform', fr:'Plateforme E-Learning' },
    desc:{ ar:'تطبيق تعليمي تفاعلي مع شهادات معتمدة', en:'Interactive learning with certifications', fr:'Apprentissage interactif avec certifications' },
    tags:['Flutter','Firebase','Node.js'] },
  { id:6, cat:'ai', emoji:'📈', bg:'linear-gradient(135deg,#0d0d37,#1e1b4b)',
    title:{ ar:'نظام تنبؤ بالمبيعات', en:'Sales Prediction System', fr:'Système de Prévision des Ventes' },
    desc:{ ar:'نموذج تعلم آلي يتنبأ بالمبيعات', en:'ML model for sales forecasting', fr:'Modèle ML pour prévisions des ventes' },
    tags:['Python','ML','Dashboard'] },
];

export const teamData = [
  { id:1, emoji:'👨‍💼', gradient:'linear-gradient(135deg,#00d4ff,#7b5ea7)',
    name:{ ar:'أحمد المنصوري', en:'Ahmed Al-Mansouri', fr:'Ahmed Al-Mansouri' },
    role:{ ar:'الرئيس التنفيذي & المؤسس', en:'CEO & Founder', fr:'PDG & Fondateur' },
    bio:{ ar:'15+ سنة في قيادة مشاريع التحول الرقمي', en:'15+ years leading digital transformation', fr:'15+ ans de direction de projets numériques' },
  },
  { id:2, emoji:'👩‍💻', gradient:'linear-gradient(135deg,#ff6b6b,#ffd166)',
    name:{ ar:'سارة بن علي', en:'Sara Ben Ali', fr:'Sara Ben Ali' },
    role:{ ar:'مديرة التقنية (CTO)', en:'Chief Technology Officer', fr:'Directrice Technique' },
    bio:{ ar:'متخصصة في هندسة الأنظمة الموزعة والسحابية', en:'Distributed systems & cloud infrastructure expert', fr:'Spécialiste en systèmes distribués et cloud' },
  },
  { id:3, emoji:'👨‍🎨', gradient:'linear-gradient(135deg,#4ade80,#22c55e)',
    name:{ ar:'كريم طاهر', en:'Karim Taher', fr:'Karim Taher' },
    role:{ ar:'مدير التصميم (CDO)', en:'Chief Design Officer', fr:'Directeur Design' },
    bio:{ ar:'خبرة 10 سنوات في تصميم UX وهوية العلامات', en:'10 years UX design & brand identity experience', fr:'10 ans d\'expérience en UX et identité de marque' },
  },
  { id:4, emoji:'👩‍🔬', gradient:'linear-gradient(135deg,#c084fc,#7c3aed)',
    name:{ ar:'نور الهدى', en:'Nour El-Huda', fr:'Nour El-Huda' },
    role:{ ar:'رئيسة قسم الذكاء الاصطناعي', en:'Head of Artificial Intelligence', fr:'Responsable IA' },
    bio:{ ar:'دكتوراه في تعلم الآلة، 20+ ورقة بحثية', en:'PhD in ML, 20+ published research papers', fr:'Doctorat en ML, 20+ articles publiés' },
  },
];

export const pricingData = [
  {
    id:1, featured:false,
    name:{ ar:'المبتدئ', en:'Starter', fr:'Débutant' },
    price:'$999',
    features:[
      { ar:'موقع ويب احترافي', en:'Professional Website', fr:'Site Web Professionnel', included:true },
      { ar:'تصميم متجاوب', en:'Responsive Design', fr:'Design Responsive', included:true },
      { ar:'5 صفحات', en:'5 Pages', fr:'5 Pages', included:true },
      { ar:'نطاق واستضافة', en:'Domain & Hosting', fr:'Domaine & Hébergement', included:true },
      { ar:'لوحة إدارة', en:'Admin Panel', fr:'Panel Admin', included:false },
      { ar:'تكامل API', en:'API Integration', fr:'Intégration API', included:false },
    ]
  },
  {
    id:2, featured:true,
    name:{ ar:'المحترف', en:'Professional', fr:'Professionnel' },
    price:'$2,999',
    features:[
      { ar:'تطبيق ويب كامل', en:'Full Web Application', fr:'Application Web Complète', included:true },
      { ar:'لوحة إدارة متقدمة', en:'Advanced Admin Panel', fr:'Panel Admin Avancé', included:true },
      { ar:'تكامل APIs', en:'API Integrations', fr:'Intégrations API', included:true },
      { ar:'قاعدة بيانات MongoDB', en:'MongoDB Database', fr:'Base de Données MongoDB', included:true },
      { ar:'استضافة سحابية', en:'Cloud Hosting', fr:'Hébergement Cloud', included:true },
      { ar:'خدمات AI', en:'AI Services', fr:'Services IA', included:false },
    ]
  },
  {
    id:3, featured:false,
    name:{ ar:'المؤسسات', en:'Enterprise', fr:'Entreprise' },
    price:null,
    features:[
      { ar:'حلول مؤسسية كاملة', en:'Full Enterprise Solutions', fr:'Solutions Entreprise Complètes', included:true },
      { ar:'تكامل ذكاء اصطناعي', en:'AI Integration', fr:'Intégration IA', included:true },
      { ar:'دعم 24/7 مخصص', en:'24/7 Dedicated Support', fr:'Support 24/7 Dédié', included:true },
      { ar:'SLA مضمون 99.9%', en:'99.9% SLA Guarantee', fr:'Garantie SLA 99,9%', included:true },
      { ar:'أمان مؤسسي متقدم', en:'Advanced Enterprise Security', fr:'Sécurité Avancée', included:true },
      { ar:'تدريب الفريق', en:'Team Training', fr:'Formation d\'Équipe', included:true },
    ]
  },
];

export const testimonialsData = [
  {
    id:1, rating:5, emoji:'👨‍💼', gradient:'linear-gradient(135deg,#00d4ff,#7b5ea7)',
    text:{ ar:'"تجربة استثنائية! قدم فريق TechVision حلاً رقمياً تجاوز توقعاتنا بأمد بعيد. الاحترافية والالتزام بالمواعيد كانا رائعَين."', en:'"An exceptional experience! TechVision delivered a digital solution that far exceeded our expectations. The professionalism was remarkable."', fr:'"Une expérience exceptionnelle ! TechVision a livré une solution qui a largement dépassé nos attentes. Le professionnalisme était remarquable."' },
    name:{ ar:'محمد العمراني', en:'Mohammed Al-Omrani', fr:'Mohammed Al-Omrani' },
    title:{ ar:'CEO, شركة الأفق للاستثمار', en:'CEO, Al-Ufuq Investment Group', fr:'PDG, Groupe Al-Ufuq' },
  },
  {
    id:2, rating:5, emoji:'👩‍💼', gradient:'linear-gradient(135deg,#ff6b6b,#ffd166)',
    text:{ ar:'"طوّروا تطبيقنا في وقت قياسي مع جودة عالية. المستخدمون أحبوا الواجهة وارتفعت تقييماتنا من 3.2 إلى 4.8 نجوم!"', en:'"They developed our app in record time with high quality. Users loved the interface and our ratings jumped from 3.2 to 4.8 stars!"', fr:'"Ils ont développé notre app en un temps record. Les utilisateurs adorent l\'interface et nos notes sont passées de 3,2 à 4,8 !"' },
    name:{ ar:'ليلى بوعلام', en:'Leila Boualam', fr:'Leila Boualam' },
    title:{ ar:'مديرة المنتج، HealthApp', en:'Product Manager, HealthApp', fr:'Chef de Produit, HealthApp' },
  },
  {
    id:3, rating:5, emoji:'👨‍🔬', gradient:'linear-gradient(135deg,#4ade80,#059669)',
    text:{ ar:'"نظام الذكاء الاصطناعي الذي بنوه لنا وفّر 40% من تكاليف العمليات. استثمار يستحق كل قرش بكل تأكيد."', en:'"The AI system they built saved 40% of our operational costs. An investment worth every penny without a doubt."', fr:'"Le système IA qu\'ils ont construit a économisé 40% de nos coûts opérationnels. Un investissement qui vaut chaque centime."' },
    name:{ ar:'يوسف المراكشي', en:'Youssef Al-Marrakshi', fr:'Youssef Al-Marrakshi' },
    title:{ ar:'مدير العمليات، LogiTech SA', en:'Operations Manager, LogiTech SA', fr:'Directeur des Opérations, LogiTech SA' },
  },
];

export const faqData = [
  {
    id:1,
    q:{ ar:'كم يستغرق تطوير موقع ويب احترافي؟', en:'How long does it take to develop a professional website?', fr:'Combien de temps prend le développement d\'un site web professionnel ?' },
    a:{ ar:'يتراوح وقت التطوير بين 4 إلى 12 أسبوعاً حسب التعقيد. موقع بسيط قد يستغرق 4 أسابيع، بينما منصة متكاملة قد تحتاج 3-6 أشهر.', en:'Development time ranges from 4 to 12 weeks depending on complexity. A simple site may take 4 weeks, while a full platform may need 3-6 months.', fr:'Le délai varie de 4 à 12 semaines selon la complexité. Un site simple peut prendre 4 semaines, une plateforme complète 3 à 6 mois.' },
  },
  {
    id:2,
    q:{ ar:'هل تدعمون مشاريع الذكاء الاصطناعي للشركات الصغيرة؟', en:'Do you support AI projects for small businesses?', fr:'Supportez-vous les projets IA pour les petites entreprises ?' },
    a:{ ar:'نعم! نقدم حلول AI مخصصة بأسعار تناسب الشركات الصغيرة والمتوسطة. نبدأ بحلول بسيطة وتوسيعها تدريجياً مع نمو عملك.', en:'Yes! We offer custom AI solutions priced for SMEs. We start with simple solutions and scale them as your business grows.', fr:'Oui ! Nous proposons des solutions IA personnalisées adaptées aux PME. Nous commençons simplement et évoluons avec votre croissance.' },
  },
  {
    id:3,
    q:{ ar:'ما هي التقنيات التي تستخدمونها في التطوير؟', en:'What technologies do you use in development?', fr:'Quelles technologies utilisez-vous dans le développement ?' },
    a:{ ar:'نستخدم أحدث التقنيات: React, Next.js, Node.js, Express, MongoDB, PostgreSQL, React Native, Flutter, Python, TensorFlow, AWS, Azure وغيرها.', en:'We use the latest technologies: React, Next.js, Node.js, Express, MongoDB, PostgreSQL, React Native, Flutter, Python, TensorFlow, AWS, Azure and more.', fr:'Nous utilisons les dernières technologies : React, Next.js, Node.js, Express, MongoDB, PostgreSQL, React Native, Flutter, Python, TensorFlow, AWS, Azure et plus.' },
  },
  {
    id:4,
    q:{ ar:'هل تقدمون دعماً بعد إطلاق المشروع؟', en:'Do you offer support after project launch?', fr:'Proposez-vous un support après le lancement du projet ?' },
    a:{ ar:'بالتأكيد! نقدم دعماً فنياً متواصلاً وصيانة دورية وتحديثات أمنية. لدينا خطط دعم متعددة تناسب احتياجاتك.', en:'Absolutely! We provide ongoing technical support, regular maintenance, and security updates. We have multiple support plans to suit your needs.', fr:'Absolument ! Nous fournissons un support technique continu, une maintenance régulière et des mises à jour de sécurité.' },
  },
  {
    id:5,
    q:{ ar:'كيف يتم التواصل خلال مراحل التطوير؟', en:'How do you communicate during development stages?', fr:'Comment communiquez-vous pendant les phases de développement ?' },
    a:{ ar:'نعتمد منهجية Agile مع اجتماعات أسبوعية واستخدام Jira لتتبع التقدم وSlack للتواصل اليومي. مدير مشروع مخصص يكون نقطة التواصل الرئيسية.', en:'We use Agile methodology with weekly meetings, Jira for progress tracking and Slack for daily communication. A dedicated project manager is your main point of contact.', fr:'Nous utilisons la méthodologie Agile avec des réunions hebdomadaires, Jira pour le suivi et Slack pour la communication quotidienne.' },
  },
];

export const blogData = [
  { id:1, emoji:'⚡', bg:'linear-gradient(135deg,#0d2137,#0d4a6b)',
    date:{ ar:'١٥ يناير ٢٠٢٥', en:'Jan 15, 2025', fr:'15 Jan 2025' },
    readTime:{ ar:'٥ دقائق', en:'5 min', fr:'5 min' },
    title:{ ar:'مستقبل تطوير الويب مع React 19', en:'Future of Web Development with React 19', fr:'L\'Avenir du Développement Web avec React 19' },
    desc:{ ar:'استكشف أبرز مزايا React 19 وكيف ستغير طريقة بناء تطبيقات الويب...', en:'Explore the key features of React 19 and how it will change web app development...', fr:'Découvrez les fonctionnalités clés de React 19 et comment elles transformeront le développement web...' },
  },
  { id:2, emoji:'🤖', bg:'linear-gradient(135deg,#1a0d37,#4a1d96)',
    date:{ ar:'١٠ يناير ٢٠٢٥', en:'Jan 10, 2025', fr:'10 Jan 2025' },
    readTime:{ ar:'٨ دقائق', en:'8 min', fr:'8 min' },
    title:{ ar:'دمج GPT-4 في تطبيقاتك التجارية', en:'Integrating GPT-4 in Your Business Apps', fr:'Intégrer GPT-4 dans vos Applications' },
    desc:{ ar:'دليل عملي شامل لكيفية تكامل نماذج اللغة الكبيرة في منتجاتك...', en:'A comprehensive practical guide to integrating large language models into your products...', fr:'Guide pratique complet pour intégrer les grands modèles de langage dans vos produits...' },
  },
  { id:3, emoji:'☁️', bg:'linear-gradient(135deg,#0d3718,#065f46)',
    date:{ ar:'٥ يناير ٢٠٢٥', en:'Jan 5, 2025', fr:'5 Jan 2025' },
    readTime:{ ar:'٦ دقائق', en:'6 min', fr:'6 min' },
    title:{ ar:'معمارية Microservices: متى تستخدمها؟', en:'Microservices Architecture: When to Use It?', fr:'Architecture Microservices : Quand l\'Utiliser ?' },
    desc:{ ar:'تحليل عميق لمزايا وعيوب بنية الخدمات المصغرة ومتى يجب اعتمادها...', en:'Deep analysis of microservices pros and cons and when to adopt this architecture...', fr:'Analyse approfondie des avantages et inconvénients des microservices et quand les adopter...' },
  },
];

export const jobsData = [
  { id:1, type:'fullTime', location:'remote', salary:'$4k – $7k', exp:5,
    title:{ ar:'Senior Full-Stack Developer', en:'Senior Full-Stack Developer', fr:'Senior Full-Stack Developer' },
    dept:{ ar:'💻 قسم الهندسة', en:'💻 Engineering', fr:'💻 Ingénierie' },
  },
  { id:2, type:'fullTime', location:'hybrid', salary:'$5k – $9k', exp:3,
    title:{ ar:'AI/ML Engineer', en:'AI/ML Engineer', fr:'Ingénieur IA/ML' },
    dept:{ ar:'🤖 قسم الذكاء الاصطناعي', en:'🤖 Artificial Intelligence', fr:'🤖 Intelligence Artificielle' },
  },
  { id:3, type:'partTime', location:'remote', salary:'$2k – $4k', exp:2,
    title:{ ar:'UX/UI Designer', en:'UX/UI Designer', fr:'Designer UX/UI' },
    dept:{ ar:'🎨 قسم التصميم', en:'🎨 Design', fr:'🎨 Design' },
  },
];
