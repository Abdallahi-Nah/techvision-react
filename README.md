# 🚀 TechVision React App

موقع شركة تكنولوجيا مبني بـ **React** بالكامل — بدون backend.

---

## 📁 هيكل المشروع

```
src/
├── index.js                  ← نقطة الدخول
├── index.css                 ← الأنماط العامة
├── App.jsx                   ← المكون الرئيسي
├── context/
│   └── LangContext.jsx       ← إدارة اللغات (AR/EN/FR)
├── data/
│   └── index.js              ← جميع البيانات الثابتة
├── hooks/
│   └── useScrollReveal.js    ← hook للانيميشن عند التمرير
└── components/
    ├── Navbar/               ← شريط التنقل + اللغات
    ├── Hero/                 ← الصفحة الرئيسية
    ├── Services/             ← الخدمات (6 بطاقات)
    ├── Portfolio/            ← أعمالنا + فلتر
    ├── Stats/                ← إحصائيات + counter animation
    ├── Team/                 ← فريق العمل
    ├── Pricing/              ← خطط الأسعار
    ├── Testimonials/         ← آراء العملاء
    ├── FAQ/                  ← أسئلة شائعة accordion
    ├── Blog/                 ← مقالات المدونة
    ├── Careers/              ← الوظائف
    ├── Contact/              ← نموذج التواصل
    ├── Footer/               ← تذييل الصفحة
    └── UI/
        └── ScrollToTop       ← زر العودة للأعلى
```

---

## 🚀 خطوات التشغيل

### المتطلبات
- **Node.js v18+** من [nodejs.org](https://nodejs.org)

### التثبيت والتشغيل

```bash
# 1. افتح المجلد
cd techvision-react

# 2. ثبّت الحزم (مرة واحدة فقط)
npm install

# 3. شغّل السيرفر المحلي
npm start
```

سيفتح المتصفح تلقائياً على `http://localhost:3000` 🎉

### بناء النسخة النهائية للإنتاج

```bash
npm run build
```
سينشئ مجلد `build/` جاهز للرفع على أي استضافة.

---

## 🌍 اللغات المدعومة

| اللغة | الاتجاه | التبديل |
|-------|---------|---------|
| 🇸🇦 العربية | RTL | زر AR |
| 🇬🇧 English | LTR | زر EN |
| 🇫🇷 Français | LTR | زر FR |

---

## ✨ المزايا

- ✅ **React 18** مع Hooks حديثة
- ✅ **Context API** لإدارة اللغة
- ✅ **Scroll Reveal** بـ IntersectionObserver
- ✅ **Counter Animation** للإحصائيات
- ✅ **TypeAnimation** في Hero
- ✅ **Portfolio Filter** تفاعلي
- ✅ **FAQ Accordion**
- ✅ **Form Validation** بدون مكتبات خارجية
- ✅ **Dark Theme** احترافي
- ✅ **Fully Responsive** لجميع الشاشات
- ✅ **CSS Variables** لتناسق الألوان
- ✅ **Performance Optimized** بدون re-renders غير ضرورية

---

## 🎨 تخصيص المحتوى

لتغيير المحتوى (المشاريع، الفريق، المدونة...):
- عدّل ملف `src/data/index.js`

لتغيير الترجمات:
- عدّل ملف `src/context/LangContext.jsx`

لتغيير الألوان:
- عدّل المتغيرات في `src/index.css` (القسم `:root`)

---

## 📦 الحزم المستخدمة

| الحزمة | الاستخدام |
|--------|-----------|
| `react` + `react-dom` | الأساس |
| `react-router-dom` | التنقل |
| `react-type-animation` | تأثير الكتابة في Hero |
| `react-intersection-observer` | كشف عناصر الشاشة |

---

Made with ❤️ using React
