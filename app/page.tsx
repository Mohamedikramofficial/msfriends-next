'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const WA_NUMBER = '97477430206';
const SUPPORT_EMAIL = 'info@msffrieds.qa';

type Lang = 'en' | 'ar';

const dict: Record<Lang, Record<string, string>> = {
  en: {
    brand: 'Ms Friends Trading & Contracting',
    tagline: 'Cleaning & Pest Control • Open 24/7',
    toggleBugs: 'Show pests animation',
    heroTitle: 'Sparkling Cleaning & Pest Control in Doha',
    heroSub: 'Trained & insured staff, family-safe materials, and before/after proof photos. 24/7 same-day & emergency service.',
    chip1: '24/7 Available',
    chip2: 'Safe for Family & Pets',
    chip3: 'Same-day Response',
    ctaWhatsApp: 'WhatsApp Us',
    bookService: 'Book a Service',
    aboutTitle: 'About Us',
    aboutWho: 'Ms Friends is a Doha-based cleaning and pest control company delivering reliable, eco-friendly services for homes, offices, and facilities...',
    aboutDiffTitle: 'What makes us different',
    diff1: '24/7 availability for cleaning & pest emergencies',
    diff2: 'Trained & insured staff',
    diff3: 'Family & pet-safe materials',
    diff4: 'Transparent pricing, no surprises',
    diff5: 'Proof-of-work photos after every job',
    diff6: '100% satisfaction guarantee',
    bookTitle: 'Book a Service (24/7)',
    lblName: 'Name',
    lblPhone: 'WhatsApp',
    lblService: 'Service',
    lblDate: 'Preferred Date',
    lblTime: 'Preferred Time',
    lblPlace: 'Location / Address',
    lblNotes: 'Notes',
    sendBtn: 'Send via WhatsApp',
    servicesTitle: 'Services',
    catRes: 'Residential Cleaning',
    catCom: 'Commercial Cleaning',
    catSpec: 'Specialized Cleaning',
    catPest: 'Pest Control',
    res1: 'Regular apartment & villa cleaning (daily / weekly / monthly)',
    res2: 'Deep cleaning (spring, move-in/move-out)',
    res3: 'Kitchen & bathroom deep cleaning',
    res4: 'Sofa, carpet & curtain shampooing',
    res5: 'Mattress & upholstery cleaning (dust mites, stains)',
    com1: 'Office cleaning (daily / scheduled)',
    com2: 'Shops & showrooms',
    com3: 'Schools & nurseries',
    com4: 'Restaurants & cafés hygiene cleaning',
    com5: 'Hotel housekeeping support',
    sp1: 'Post-construction / renovation cleaning',
    sp2: 'Glass & window cleaning (interior/exterior, low/high areas)',
    sp3: 'Floor care: marble polishing, tile scrubbing, wood care',
    sp4: 'Water tank cleaning',
    sp5: 'AC duct cleaning',
    pc1: 'Cockroach & bedbug treatment (inspection + targeted treatment + follow-up)',
    pc2: 'Rodent control (proofing & traps)',
    pc3: 'Ant & termite treatment',
    pc4: 'Mosquito & fly control (ULV fogging / misting; larvicide for stagnant water)',
    pc5: 'Disinfection & sanitization',
    whyTitle: 'Why Choose Ms Friends?',
    why1: '24/7 service — we never close',
    why2: 'Same-day and emergency call-outs',
    why3: 'Eco-friendly & family-safe materials',
    why4: 'Trained, uniformed, insured staff',
    why5: 'WhatsApp updates + proof photos',
    why6: 'Clear pricing & written scope before we start',
    why7: '100% satisfaction guarantee',
    areasTitle: 'Service Areas',
    areasText: 'Doha • Lusail • Al Wakrah • Al Khor • The Pearl • West Bay • and all nearby areas across Qatar.',
    hoursTitle: 'Working Hours',
    hoursText: '24 Hours • 7 Days a Week • Emergency Service Available',
    safetyTitle: 'Safety & Standards',
    safe1: 'Family & pet-safe chemicals (MSDS available)',
    safe2: 'Staff ID & uniforms, background-checked',
    safe3: 'Tools sanitized between jobs',
    safe4: 'Proper ventilation & PPE during treatments',
    faqTitle: 'FAQs',
    q1: 'Are your chemicals safe for kids and pets?',
    a1: 'Yes. We only use MOI-approved, eco-friendly materials. Short ventilation is advised after treatment for maximum safety.',
    q2: 'How fast can you respond?',
    a2: 'We operate 24/7. Most bookings are same-day, and emergency pest control can arrive within 1–2 hours inside Doha.',
    q3: 'Do I need to leave my home during pest treatment?',
    a3: 'Light treatments don’t require it, but for strong cockroach/bedbug work we recommend stepping out 2–4 hours. Our team advises case by case.',
    contactTitle: 'Contact',
    waLabel: 'WhatsApp / Call:',
    emailLabel: 'Email:',
    locLabel: 'Location:',
    locText: 'Doha, Qatar',
    ctaTitle: 'Ready to book?',
    ctaText: 'Message us on WhatsApp anytime—day or night. We’ll confirm your time and send a team fast.',
    footerCity: 'Cleaning & Pest Control, Doha, Qatar',
    footerOpen: 'Open 24/7'
  },
  ar: {
    brand: 'إم إس فريندز للتجارة والمقاولات',
    tagline: 'تنظيف ومكافحة حشرات • متاحون 24/7',
    toggleBugs: 'إظهار حركة الحشرات',
    heroTitle: 'تنظيف ومكافحة حشرات باحتراف في الدوحة',
    heroSub: 'فريق مدرّب ومؤمّن، مواد آمنة للعائلة، وصور قبل/بعد. خدمات فورية وطوارئ 24/7.',
    chip1: 'متاحون 24/7',
    chip2: 'آمن للعائلة والحيوانات الأليفة',
    chip3: 'استجابة في نفس اليوم',
    ctaWhatsApp: 'راسلنا واتساب',
    bookService: 'احجز خدمة',
    aboutTitle: 'من نحن',
    aboutWho: 'شركة تنظيف ومكافحة حشرات في الدوحة نقدم خدمات موثوقة وصديقة للبيئة للمنازل والمكاتب والمنشآت...',
    aboutDiffTitle: 'لماذا نتميز',
    diff1: 'متاحون على مدار الساعة للطوارئ',
    diff2: 'فريق مدرب ومؤمّن',
    diff3: 'مواد آمنة للعائلة والحيوانات الأليفة',
    diff4: 'أسعار واضحة بلا مفاجآت',
    diff5: 'صور توثيق بعد كل عمل',
    diff6: 'ضمان رضا 100%',
    bookTitle: 'احجز خدمة (24/7)',
    lblName: 'الاسم',
    lblPhone: 'واتساب',
    lblService: 'الخدمة',
    lblDate: 'التاريخ المفضل',
    lblTime: 'الوقت المفضل',
    lblPlace: 'الموقع / العنوان',
    lblNotes: 'ملاحظات',
    sendBtn: 'إرسال عبر واتساب',
    servicesTitle: 'الخدمات',
    catRes: 'تنظيف سكني',
    catCom: 'تنظيف تجاري',
    catSpec: 'تنظيف متخصص',
    catPest: 'مكافحة الحشرات',
    res1: 'تنظيف الشقق والفلل (يومي/أسبوعي/شهري)',
    res2: 'تنظيف عميق (ربيعي/انتقال)',
    res3: 'تنظيف عميق للمطبخ والحمام',
    res4: 'غسيل السجاد والأرائك والستائر',
    res5: 'تنظيف المراتب والكنب (عث الغبار/البقع)',
    com1: 'تنظيف المكاتب (يومي/مجدول)',
    com2: 'المتاجر وصالات العرض',
    com3: 'المدارس والحضانات',
    com4: 'نظافة المطاعم والمقاهي',
    com5: 'دعم الضيافة الفندقية',
    sp1: 'تنظيف ما بعد الإنشاء/التجديد',
    sp2: 'تنظيف الزجاج والنوافذ (داخلي/خارجي)',
    sp3: 'العناية بالأرضيات: رخام/سيراميك/خشب',
    sp4: 'تنظيف خزانات المياه',
    sp5: 'تنظيف مجاري الهواء (التكييف)',
    pc1: 'مكافحة الصراصير وبقّ الفراش (فحص + علاج مستهدف + متابعة)',
    pc2: 'مكافحة القوارض (سدّ الفتحات والفخاخ)',
    pc3: 'مكافحة النمل والنمل الأبيض',
    pc4: 'مكافحة البعوض والذباب (تعفير/ضباب؛ معالجة يرقات المياه الراكدة)',
    pc5: 'التعقيم والتطهير',
    whyTitle: 'لماذا تختار إم إس فريندز؟',
    why1: 'خدمة 24/7 — لا نتوقف',
    why2: 'استجابة فورية وحالات الطوارئ',
    why3: 'مواد صديقة للبيئة وآمنة للعائلة',
    why4: 'فريق مدرّب بزي رسمي ومؤمّن',
    why5: 'تحديثات واتساب وصور توثيق',
    why6: 'أسعار واضحة ونطاق عمل مكتوب',
    why7: 'ضمان رضا 100٪',
    areasTitle: 'نطاق الخدمة',
    areasText: 'الدوحة • لوسيل • الوكرة • الخور • اللؤلؤة • الخليج الغربي • وجميع المناطق القريبة في قطر.',
    hoursTitle: 'ساعات العمل',
    hoursText: '24 ساعة • 7 أيام في الأسبوع • خدمة طوارئ',
    safetyTitle: 'السلامة والمعايير',
    safe1: 'مواد آمنة للعائلة والحيوانات الأليفة (نشرات MSDS متاحة)',
    safe2: 'بطاقات تعريف وزي رسمي وفحص خلفيات',
    safe3: 'تعقيم الأدوات بين الأعمال',
    safe4: 'تهوية ومعدات وقاية أثناء المعالجات',
    faqTitle: 'الأسئلة الشائعة',
    q1: 'هل المواد آمنة للأطفال والحيوانات الأليفة؟',
    a1: 'نعم. نستخدم مواد معتمدة وصديقة للبيئة. ينصح بتهوية قصيرة بعد المعالجة لسلامة أكبر.',
    q2: 'كم هي سرعة الاستجابة؟',
    a2: 'نعمل 24/7. غالبية الحجوزات في نفس اليوم، والطوارئ خلال 1–2 ساعة داخل الدوحة.',
    q3: 'هل يجب مغادرة المنزل أثناء المعالجة؟',
    a3: 'المعالجات الخفيفة لا تتطلب ذلك؛ وفي الحالات القوية ننصح بالخروج 2–4 ساعات. يحدد الفريق حسب الحالة.',
    contactTitle: 'تواصل معنا',
    waLabel: 'واتساب / اتصال:',
    emailLabel: 'البريد الإلكتروني:',
    locLabel: 'الموقع:',
    locText: 'الدوحة، قطر',
    ctaTitle: 'جاهز للحجز؟',
    ctaText: 'راسلنا عبر واتساب في أي وقت. نؤكد الموعد ونرسل الفريق بسرعة.',
    footerCity: 'تنظيف ومكافحة حشرات، الدوحة، قطر',
    footerOpen: 'متاحون 24/7'
  }
};

function useT(lang: Lang) {
  return (k: string) => dict[lang][k] ?? dict.en[k] ?? k;
}

function waLink(text = 'Hi! I need a service.') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useT(lang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const heroWa = useMemo(
    () => waLink(lang === 'ar'
      ? 'مرحباً! أحتاج خدمة تنظيف/مكافحة حشرات. هل أنتم متاحون الآن؟'
      : 'Hi! I need cleaning/pest control. Are you available now?'),
    [lang]
  );

  const contactWa = useMemo(
    () => waLink(lang === 'ar'
      ? 'مرحباً! أريد الاستفسار عن خدماتكم المتاحة 24/7.'
      : 'Hello! I’d like to ask about your 24/7 services.'),
    [lang]
  );

  // Background bubbles + sparkles
  const bubblesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const host = bubblesRef.current;
    if (!host) return;
    const spawn = () => {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = 8 + Math.random() * 26;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.animationDuration = `${10 + Math.random() * 12}s`;
      host.appendChild(b);
      setTimeout(() => b.remove(), 24000);
    };
    const sparkle = () => {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
      host.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    };
    const bi = setInterval(spawn, 500);
    const si = setInterval(sparkle, 700);
    return () => { clearInterval(bi); clearInterval(si); };
  }, []);

  // Spray mist animation (fires every few seconds)
  const mistRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const box = mistRef.current;
    if (!box) return;
    const run = () => {
      for (let i = 0; i < 10; i++) {
        const p = document.createElement('span');
        p.style.left = '0px';
        p.style.bottom = '18px';
        p.style.animationDelay = `${i * 0.06}s`;
        box.appendChild(p);
        setTimeout(() => p.remove(), 1500);
      }
    };
    run();
    const id = setInterval(run, 3500);
    return () => clearInterval(id);
  }, []);

  // Pests layer toggle
  const [showBugs, setShowBugs] = useState(true);
  const bugsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const layer = bugsRef.current;
    if (!layer || !showBugs) {
      if (layer) layer.innerHTML = '';
      return;
    }
    layer.innerHTML = '';

    // simple SVG roach
    const makeRoach = () => {
      const wrap = document.createElement('div');
      wrap.className = 'bug roach';
      wrap.style.left = `${Math.random() * 90 + 5}%`;
      wrap.style.top = `${Math.random() * 80 + 10}%`;
      wrap.innerHTML = `
        <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
          <ellipse cx="32" cy="32" rx="10" ry="14" fill="#3f3f46"/>
          <line class="leg" x1="22" y1="30" x2="8" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="22" y1="34" x2="8" y2="38" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="30" x2="56" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="34" x2="56" y2="38" stroke="#111827" stroke-width="2"/>
        </svg>`;
      layer.appendChild(wrap);
    };

    for (let i = 0; i < 4; i++) makeRoach();

    return () => { if (layer) layer.innerHTML = ''; };
  }, [showBugs]);

  // Booking -> WhatsApp
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      'New Booking (Website)',
      `• Name: ${String(f.get('name') || '')}`,
      `• WhatsApp: ${String(f.get('phone') || '')}`,
      `• Service: ${String(f.get('service') || '')}`,
      `• Date: ${String(f.get('date') || '')}`,
      `• Time: ${String(f.get('time') || '')}`,
      `• Location: ${String(f.get('place') || '')}`,
      String(f.get('notes') || '') ? `• Notes: ${String(f.get('notes'))}` : '',
      `• Email: ${SUPPORT_EMAIL}`
    ].filter(Boolean).join('\n');

    window.open(waLink(lines), '_blank');
  }

  return (
    <html lang={lang} dir={dir}>
      <body>
        <div className="bg-bubbles" ref={bubblesRef} />

        {/* Header */}
        <div className="header">
          <div className="h-in">
            <div className="logo">MF</div>
            <div>
              <div className="brandname">{t('brand')}</div>
              <div className="tag">{t('tagline')}</div>
            </div>
            <div className="sp" />
            <div className="lang">
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                className={lang === 'ar' ? 'active' : ''}
                onClick={() => setLang('ar')}
              >
                العربية
              </button>
            </div>
          </div>
        </div>

        {/* Pests layer + toggle */}
        <div className="bugs-layer" ref={bugsRef} />
        <label className="toggle-bugs">
          <input
            type="checkbox"
            checked={showBugs}
            onChange={(e) => setShowBugs(e.target.checked)}
          /> 🐞 <span>{t('toggleBugs')}</span>
        </label>

        <main className="wrap">
          {/* HERO */}
          <section className="hero">
            <h1>{t('heroTitle')}</h1>
            <p>{t('heroSub')}</p>
            <div className="chips">
              <span className="chip">{t('chip1')}</span>
              <span className="chip">{t('chip2')}</span>
              <span className="chip">{t('chip3')}</span>
            </div>
            <div className="rowb">
              <a className="btn btn-primary" href={heroWa}>{t('ctaWhatsApp')}</a>
              <a className="btn" href="#booking">{t('bookService')}</a>
            </div>
          </section>

          {/* ABOUT */}
          <section className="card" id="about">
            <h2>{t('aboutTitle')}</h2>
            <p>{t('aboutWho')}</p>
            <h3>{t('aboutDiffTitle')}</h3>
            <ul style={{ margin: '0 0 0 18px' }}>
              <li>{t('diff1')}</li>
              <li>{t('diff2')}</li>
              <li>{t('diff3')}</li>
              <li>{t('diff4')}</li>
              <li>{t('diff5')}</li>
              <li>{t('diff6')}</li>
            </ul>
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const WA_NUMBER = '97477430206';
const SUPPORT_EMAIL = 'info@msffrieds.qa';

type Lang = 'en' | 'ar';

const dict: Record<Lang, Record<string, string>> = {
  en: {
    brand: 'Ms Friends Trading & Contracting',
    tagline: 'Cleaning & Pest Control • Open 24/7',
    toggleBugs: 'Show pests animation',
    heroTitle: 'Sparkling Cleaning & Pest Control in Doha',
    heroSub:
      'Trained & insured staff, family-safe materials, and before/after proof photos. 24/7 same-day & emergency service.',
    chip1: '24/7 Available',
    chip2: 'Safe for Family & Pets',
    chip3: 'Same-day Response',
    ctaWhatsApp: 'WhatsApp Us',
    bookService: 'Book a Service',
    aboutTitle: 'About Us',
    aboutWho:
      'Ms Friends is a Doha-based cleaning and pest control company delivering reliable, eco-friendly services for homes, offices, and facilities...',
    aboutDiffTitle: 'What makes us different',
    diff1: '24/7 availability for cleaning & pest emergencies',
    diff2: 'Trained & insured staff',
    diff3: 'Family & pet-safe materials',
    diff4: 'Transparent pricing, no surprises',
    diff5: 'Proof-of-work photos after every job',
    diff6: '100% satisfaction guarantee',
    bookTitle: 'Book a Service (24/7)',
    lblName: 'Name',
    lblPhone: 'WhatsApp',
    lblService: 'Service',
    lblDate: 'Preferred Date',
    lblTime: 'Preferred Time',
    lblPlace: 'Location / Address',
    lblNotes: 'Notes',
    sendBtn: 'Send via WhatsApp',
    servicesTitle: 'Services',
    catRes: 'Residential Cleaning',
    catCom: 'Commercial Cleaning',
    catSpec: 'Specialized Cleaning',
    catPest: 'Pest Control',
    res1: 'Regular apartment & villa cleaning (daily / weekly / monthly)',
    res2: 'Deep cleaning (spring, move-in/move-out)',
    res3: 'Kitchen & bathroom deep cleaning',
    res4: 'Sofa, carpet & curtain shampooing',
    res5: 'Mattress & upholstery cleaning (dust mites, stains)',
    com1: 'Office cleaning (daily / scheduled)',
    com2: 'Shops & showrooms',
    com3: 'Schools & nurseries',
    com4: 'Restaurants & cafés hygiene cleaning',
    com5: 'Hotel housekeeping support',
    sp1: 'Post-construction / renovation cleaning',
    sp2: 'Glass & window cleaning (interior/exterior, low/high areas)',
    sp3: 'Floor care: marble polishing, tile scrubbing, wood care',
    sp4: 'Water tank cleaning',
    sp5: 'AC duct cleaning',
    pc1: 'Cockroach & bedbug treatment (inspection + targeted treatment + follow-up)',
    pc2: 'Rodent control (proofing & traps)',
    pc3: 'Ant & termite treatment',
    pc4: 'Mosquito & fly control (ULV fogging / misting; larvicide for stagnant water)',
    pc5: 'Disinfection & sanitization',
    whyTitle: 'Why Choose Ms Friends?',
    why1: '24/7 service — we never close',
    why2: 'Same-day and emergency call-outs',
    why3: 'Eco-friendly & family-safe materials',
    why4: 'Trained, uniformed, insured staff',
    why5: 'WhatsApp updates + proof photos',
    why6: 'Clear pricing & written scope before we start',
    why7: '100% satisfaction guarantee',
    areasTitle: 'Service Areas',
    areasText:
      'Doha • Lusail • Al Wakrah • Al Khor • The Pearl • West Bay • and all nearby areas across Qatar.',
    hoursTitle: 'Working Hours',
    hoursText: '24 Hours • 7 Days a Week • Emergency Service Available',
    safetyTitle: 'Safety & Standards',
    safe1: 'Family & pet-safe chemicals (MSDS available)',
    safe2: 'Staff ID & uniforms, background-checked',
    safe3: 'Tools sanitized between jobs',
    safe4: 'Proper ventilation & PPE during treatments',
    faqTitle: 'FAQs',
    q1: 'Are your chemicals safe for kids and pets?',
    a1: 'Yes. We only use MOI-approved, eco-friendly materials. Short ventilation is advised after treatment for maximum safety.',
    q2: 'How fast can you respond?',
    a2: 'We operate 24/7. Most bookings are same-day, and emergency pest control can arrive within 1–2 hours inside Doha.',
    q3: 'Do I need to leave my home during pest treatment?',
    a3: 'Light treatments don’t require it, but for strong cockroach/bedbug work we recommend stepping out 2–4 hours. Our team advises case by case.',
    contactTitle: 'Contact',
    waLabel: 'WhatsApp / Call:',
    emailLabel: 'Email:',
    locLabel: 'Location:',
    locText: 'Doha, Qatar',
    ctaTitle: 'Ready to book?',
    ctaText:
      'Message us on WhatsApp anytime—day or night. We’ll confirm your time and send a team fast.',
    footerCity: 'Cleaning & Pest Control, Doha, Qatar',
    footerOpen: 'Open 24/7',
  },
  ar: {
    brand: 'إم إس فريندز للتجارة والمقاولات',
    tagline: 'تنظيف ومكافحة حشرات • متاحون 24/7',
    toggleBugs: 'إظهار حركة الحشرات',
    heroTitle: 'تنظيف ومكافحة حشرات باحتراف في الدوحة',
    heroSub:
      'فريق مدرّب ومؤمّن، مواد آمنة للعائلة، وصور قبل/بعد. خدمات فورية وطوارئ 24/7.',
    chip1: 'متاحون 24/7',
    chip2: 'آمن للعائلة والحيوانات الأليفة',
    chip3: 'استجابة في نفس اليوم',
    ctaWhatsApp: 'راسلنا واتساب',
    bookService: 'احجز خدمة',
    aboutTitle: 'من نحن',
    aboutWho:
      'شركة تنظيف ومكافحة حشرات في الدوحة نقدم خدمات موثوقة وصديقة للبيئة للمنازل والمكاتب والمنشآت...',
    aboutDiffTitle: 'لماذا نتميز',
    diff1: 'متاحون على مدار الساعة للطوارئ',
    diff2: 'فريق مدرب ومؤمّن',
    diff3: 'مواد آمنة للعائلة والحيوانات الأليفة',
    diff4: 'أسعار واضحة بلا مفاجآت',
    diff5: 'صور توثيق بعد كل عمل',
    diff6: 'ضمان رضا 100%',
    bookTitle: 'احجز خدمة (24/7)',
    lblName: 'الاسم',
    lblPhone: 'واتساب',
    lblService: 'الخدمة',
    lblDate: 'التاريخ المفضل',
    lblTime: 'الوقت المفضل',
    lblPlace: 'الموقع / العنوان',
    lblNotes: 'ملاحظات',
    sendBtn: 'إرسال عبر واتساب',
    servicesTitle: 'الخدمات',
    catRes: 'تنظيف سكني',
    catCom: 'تنظيف تجاري',
    catSpec: 'تنظيف متخصص',
    catPest: 'مكافحة الحشرات',
    res1: 'تنظيف الشقق والفلل (يومي/أسبوعي/شهري)',
    res2: 'تنظيف عميق (ربيعي/انتقال)',
    res3: 'تنظيف عميق للمطبخ والحمام',
    res4: 'غسيل السجاد والأرائك والستائر',
    res5: 'تنظيف المراتب والكنب (عث الغبار/البقع)',
    com1: 'تنظيف المكاتب (يومي/مجدول)',
    com2: 'المتاجر وصالات العرض',
    com3: 'المدارس والحضانات',
    com4: 'نظافة المطاعم والمقاهي',
    com5: 'دعم الضيافة الفندقية',
    sp1: 'تنظيف ما بعد الإنشاء/التجديد',
    sp2: 'تنظيف الزجاج والنوافذ (داخلي/خارجي)',
    sp3: 'العناية بالأرضيات: رخام/سيراميك/خشب',
    sp4: 'تنظيف خزانات المياه',
    sp5: 'تنظيف مجاري الهواء (التكييف)',
    pc1:
      'مكافحة الصراصير وبقّ الفراش (فحص + علاج مستهدف + متابعة)',
    pc2: 'مكافحة القوارض (سدّ الفتحات والفخاخ)',
    pc3: 'مكافحة النمل والنمل الأبيض',
    pc4:
      'مكافحة البعوض والذباب (تعفير/ضباب؛ معالجة يرقات المياه الراكدة)',
    pc5: 'التعقيم والتطهير',
    whyTitle: 'لماذا تختار إم إس فريندز؟',
    why1: 'خدمة 24/7 — لا نتوقف',
    why2: 'استجابة فورية وحالات الطوارئ',
    why3: 'مواد صديقة للبيئة وآمنة للعائلة',
    why4: 'فريق مدرّب بزي رسمي ومؤمّن',
    why5: 'تحديثات واتساب وصور توثيق',
    why6: 'أسعار واضحة ونطاق عمل مكتوب',
    why7: 'ضمان رضا 100٪',
    areasTitle: 'نطاق الخدمة',
    areasText:
      'الدوحة • لوسيل • الوكرة • الخور • اللؤلؤة • الخليج الغربي • وجميع المناطق القريبة في قطر.',
    hoursTitle: 'ساعات العمل',
    hoursText: '24 ساعة • 7 أيام في الأسبوع • خدمة طوارئ',
    safetyTitle: 'السلامة والمعايير',
    safe1: 'مواد آمنة للعائلة والحيوانات الأليفة (نشرات MSDS متاحة)',
    safe2: 'بطاقات تعريف وزي رسمي وفحص خلفيات',
    safe3: 'تعقيم الأدوات بين الأعمال',
    safe4: 'تهوية ومعدات وقاية أثناء المعالجات',
    faqTitle: 'الأسئلة الشائعة',
    q1: 'هل المواد آمنة للأطفال والحيوانات الأليفة؟',
    a1:
      'نعم. نستخدم مواد معتمدة وصديقة للبيئة. ينصح بتهوية قصيرة بعد المعالجة لسلامة أكبر.',
    q2: 'كم هي سرعة الاستجابة؟',
    a2:
      'نعمل 24/7. غالبية الحجوزات في نفس اليوم، والطوارئ خلال 1–2 ساعة داخل الدوحة.',
    q3: 'هل يجب مغادرة المنزل أثناء المعالجة؟',
    a3:
      'المعالجات الخفيفة لا تتطلب ذلك؛ وفي الحالات القوية ننصح بالخروج 2–4 ساعات. يحدد الفريق حسب الحالة.',
    contactTitle: 'تواصل معنا',
    waLabel: 'واتساب / اتصال:',
    emailLabel: 'البريد الإلكتروني:',
    locLabel: 'الموقع:',
    locText: 'الدوحة، قطر',
    ctaTitle: 'جاهز للحجز؟',
    ctaText:
      'راسلنا عبر واتساب في أي وقت. نؤكد الموعد ونرسل الفريق بسرعة.',
    footerCity: 'تنظيف ومكافحة حشرات، الدوحة، قطر',
    footerOpen: 'متاحون 24/7',
  },
};

function useT(lang: Lang) {
  return (k: string) => dict[lang][k] ?? dict.en[k] ?? k;
}

function waLink(text = 'Hi! I need a service.') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useT(lang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const heroWa = useMemo(
    () =>
      waLink(
        lang === 'ar'
          ? 'مرحباً! أحتاج خدمة تنظيف/مكافحة حشرات. هل أنتم متاحون الآن؟'
          : 'Hi! I need cleaning/pest control. Are you available now?'
      ),
    [lang]
  );

  const contactWa = useMemo(
    () =>
      waLink(
        lang === 'ar'
          ? 'مرحباً! أريد الاستفسار عن خدماتكم المتاحة 24/7.'
          : 'Hello! I’d like to ask about your 24/7 services.'
      ),
    [lang]
  );

  // Background bubbles + sparkles
  const bubblesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const host = bubblesRef.current;
    if (!host) return;
    const spawn = () => {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = 8 + Math.random() * 26;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.animationDuration = `${10 + Math.random() * 12}s`;
      host.appendChild(b);
      setTimeout(() => b.remove(), 24000);
    };
    const sparkle = () => {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
      host.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    };
    const bi = setInterval(spawn, 500);
    const si = setInterval(sparkle, 700);
    return () => {
      clearInterval(bi);
      clearInterval(si);
    };
  }, []);

  // Spray mist animation
  const mistRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const box = mistRef.current;
    if (!box) return;
    const run = () => {
      for (let i = 0; i < 10; i++) {
        const p = document.createElement('span');
        p.style.left = '0px';
        p.style.bottom = '18px';
        p.style.animationDelay = `${i * 0.06}s`;
        box.appendChild(p);
        setTimeout(() => p.remove(), 1500);
      }
    };
    run();
    const id = setInterval(run, 3500);
    return () => clearInterval(id);
  }, []);

  // Pests layer toggle
  const [showBugs, setShowBugs] = useState(true);
  const bugsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const layer = bugsRef.current;
    if (!layer || !showBugs) {
      if (layer) layer.innerHTML = '';
      return;
    }
    layer.innerHTML = '';
    const makeRoach = () => {
      const wrap = document.createElement('div');
      wrap.className = 'bug roach';
      wrap.style.left = `${Math.random() * 90 + 5}%`;
      wrap.style.top = `${Math.random() * 80 + 10}%`;
      wrap.innerHTML = `
        <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
          <ellipse cx="32" cy="32" rx="10" ry="14" fill="#3f3f46"/>
          <line class="leg" x1="22" y1="30" x2="8" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="22" y1="34" x2="8" y2="38" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="30" x2="56" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="34" x2="56" y2="38" stroke="#111827" stroke-width="2"/>
        </svg>`;
      layer.appendChild(wrap);
    };
    for (let i = 0; i < 4; i++) makeRoach();
    return () => {
      if (layer) layer.innerHTML = '';
    };
  }, [showBugs]);

  // Booking -> WhatsApp
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      'New Booking (Website)',
      `• Name: ${String(f.get('name') || '')}`,
      `• WhatsApp: ${String(f.get('phone') || '')}`,
      `• Service: ${String(f.get('service') || '')}`,
      `• Date: ${String(f.get('date') || '')}`,
      `• Time: ${String(f.get('time') || '')}`,
      `• Location: ${String(f.get('place') || '')}`,
      String(f.get('notes') || '') ? `• Notes: ${String(f.get('notes'))}` : '',
      `• Email: ${SUPPORT_EMAIL}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(waLink(lines), '_blank');
  }

  // NOTE: Since <html> lives in layout.tsx, we'll set dir via a wrapper.
  return (
    <div dir={dir}>
      <div className="bg-bubbles" ref={bubblesRef} />

      {/* Header */}
      <div className="header">
        <div className="h-in">
          <div className="logo">MF</div>
          <div>
            <div className="brandname">{t('brand')}</div>
            <div className="tag">{t('tagline')}</div>
          </div>
          <div className="sp" />
          <div className="lang">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              EN
            </button>
            <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>
              العربية
            </button>
          </div>
        </div>
      </div>

      {/* Pests layer + toggle */}
      <div className="bugs-layer" ref={bugsRef} />
      <label className="toggle-bugs">
        <input
          type="checkbox"
          checked={showBugs}
          onChange={(e) => setShowBugs(e.target.checked)}
        />{' '}
        🐞 <span>{t('toggleBugs')}</span>
      </label>

      <main className="wrap">
        {/* HERO */}
        <section className="hero">
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSub')}</p>
          <div className="chips">
            <span className="chip">{t('chip1')}</span>
            <span className="chip">{t('chip2')}</span>
            <span className="chip">{t('chip3')}</span>
          </div>
          <div className="rowb">
            <a className="btn btn-primary" href={heroWa}>
              {t('ctaWhatsApp')}
            </a>
            <a className="btn" href="#booking">
              {t('bookService')}
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="card" id="about">
          <h2>{t('aboutTitle')}</h2>
          <p>{t('aboutWho')}</p>
          <h3>{t('aboutDiffTitle')}</h3>
          <ul style={{ margin: '0 0 0 18px' }}>
            <li>{t('diff1')}</li>
            <li>{t('diff2')}</li>
            <li>{t('diff3')}</li>
            <li>{t('diff4')}</li>
            <li>{t('diff5')}</li>
            <li>{t('diff6')}</li>
          </ul>
        </section>

        {/* BOOKING */}
        <section id="booking" className="card">
          <h2>{t('bookTitle')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="row two">
              <div>
                <label>{t('lblName')}</label>
                <input name="name" required placeholder={lang === 'ar' ? 'اسمك' : 'Your name'} />
              </div>
              <div>
                <label>{t('lblPhone')}</label>
                <input name="phone" required placeholder="9745xxxxxx" inputMode="tel" />
              </div>
            </div>
            <div className="row two">
              <div>
                <label>{t('lblService')}</label>
                <select name="service" required>
                  <option>{t('pc1')}</option>
                  <option>{lang === 'ar' ? 'مكافحة البعوض والذباب' : 'Mosquito/Fly Control'}</option>
                  <option>{lang === 'ar' ? 'تنظيف منزلي' : 'Home Cleaning'}</option>
                  <option>{t('res2')}</option>
                  <option>{lang === 'ar' ? 'غسيل الأرائك والسجاد' : 'Sofa & Carpet Shampoo'}</option>
                  <option>{t('sp1')}</option>
                  <option>{t('sp2')}</option>
                  <option>{t('sp4')}</option>
                  <option>{t('sp5')}</option>
                  <option>{lang === 'ar' ? 'تنظيف المكاتب / التجاري' : 'Office/Commercial Cleaning'}</option>
                </select>
              </div>
              <div>
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const WA_NUMBER = '97477430206';
const SUPPORT_EMAIL = 'info@msffrieds.qa';

type Lang = 'en' | 'ar';

const dict: Record<Lang, Record<string, string>> = {
  en: {
    brand: 'Ms Friends Trading & Contracting',
    tagline: 'Cleaning & Pest Control • Open 24/7',
    toggleBugs: 'Show pests animation',
    heroTitle: 'Sparkling Cleaning & Pest Control in Doha',
    heroSub: 'Trained & insured staff, family-safe materials, and before/after proof photos. 24/7 same-day & emergency service.',
    chip1: '24/7 Available',
    chip2: 'Safe for Family & Pets',
    chip3: 'Same-day Response',
    ctaWhatsApp: 'WhatsApp Us',
    bookService: 'Book a Service',
    aboutTitle: 'About Us',
    aboutWho: 'Ms Friends is a Doha-based cleaning and pest control company delivering reliable, eco-friendly services for homes, offices, and facilities...',
    aboutDiffTitle: 'What makes us different',
    diff1: '24/7 availability for cleaning & pest emergencies',
    diff2: 'Trained & insured staff',
    diff3: 'Family & pet-safe materials',
    diff4: 'Transparent pricing, no surprises',
    diff5: 'Proof-of-work photos after every job',
    diff6: '100% satisfaction guarantee',
    bookTitle: 'Book a Service (24/7)',
    lblName: 'Name',
    lblPhone: 'WhatsApp',
    lblService: 'Service',
    lblDate: 'Preferred Date',
    lblTime: 'Preferred Time',
    lblPlace: 'Location / Address',
    lblNotes: 'Notes',
    sendBtn: 'Send via WhatsApp',
    servicesTitle: 'Services',
    catRes: 'Residential Cleaning',
    catCom: 'Commercial Cleaning',
    catSpec: 'Specialized Cleaning',
    catPest: 'Pest Control',
    res1: 'Regular apartment & villa cleaning (daily / weekly / monthly)',
    res2: 'Deep cleaning (spring, move-in/move-out)',
    res3: 'Kitchen & bathroom deep cleaning',
    res4: 'Sofa, carpet & curtain shampooing',
    res5: 'Mattress & upholstery cleaning (dust mites, stains)',
    com1: 'Office cleaning (daily / scheduled)',
    com2: 'Shops & showrooms',
    com3: 'Schools & nurseries',
    com4: 'Restaurants & cafés hygiene cleaning',
    com5: 'Hotel housekeeping support',
    sp1: 'Post-construction / renovation cleaning',
    sp2: 'Glass & window cleaning (interior/exterior, low/high areas)',
    sp3: 'Floor care: marble polishing, tile scrubbing, wood care',
    sp4: 'Water tank cleaning',
    sp5: 'AC duct cleaning',
    pc1: 'Cockroach & bedbug treatment (inspection + targeted treatment + follow-up)',
    pc2: 'Rodent control (proofing & traps)',
    pc3: 'Ant & termite treatment',
    pc4: 'Mosquito & fly control (ULV fogging / misting; larvicide for stagnant water)',
    pc5: 'Disinfection & sanitization',
    whyTitle: 'Why Choose Ms Friends?',
    why1: '24/7 service — we never close',
    why2: 'Same-day and emergency call-outs',
    why3: 'Eco-friendly & family-safe materials',
    why4: 'Trained, uniformed, insured staff',
    why5: 'WhatsApp updates + proof photos',
    why6: 'Clear pricing & written scope before we start',
    why7: '100% satisfaction guarantee',
    areasTitle: 'Service Areas',
    areasText: 'Doha • Lusail • Al Wakrah • Al Khor • The Pearl • West Bay • and all nearby areas across Qatar.',
    hoursTitle: 'Working Hours',
    hoursText: '24 Hours • 7 Days a Week • Emergency Service Available',
    safetyTitle: 'Safety & Standards',
    safe1: 'Family & pet-safe chemicals (MSDS available)',
    safe2: 'Staff ID & uniforms, background-checked',
    safe3: 'Tools sanitized between jobs',
    safe4: 'Proper ventilation & PPE during treatments',
    faqTitle: 'FAQs',
    q1: 'Are your chemicals safe for kids and pets?',
    a1: 'Yes. We only use MOI-approved, eco-friendly materials. Short ventilation is advised after treatment for maximum safety.',
    q2: 'How fast can you respond?',
    a2: 'We operate 24/7. Most bookings are same-day, and emergency pest control can arrive within 1–2 hours inside Doha.',
    q3: 'Do I need to leave my home during pest treatment?',
    a3: 'Light treatments don't require it, but for strong cockroach/bedbug work we recommend stepping out 2–4 hours. Our team advises case by case.',
    contactTitle: 'Contact',
    waLabel: 'WhatsApp / Call:',
    emailLabel: 'Email:',
    locLabel: 'Location:',
    locText: 'Doha, Qatar',
    ctaTitle: 'Ready to book?',
    ctaText: 'Message us on WhatsApp anytime—day or night. We'll confirm your time and send a team fast.',
    footerCity: 'Cleaning & Pest Control, Doha, Qatar',
    footerOpen: 'Open 24/7'
  },
  ar: {
    brand: 'إم إس فريندز للتجارة والمقاولات',
    tagline: 'تنظيف ومكافحة حشرات • متاحون 24/7',
    toggleBugs: 'إظهار حركة الحشرات',
    heroTitle: 'تنظيف ومكافحة حشرات باحتراف في الدوحة',
    heroSub: 'فريق مدرّب ومؤمّن، مواد آمنة للعائلة، وصور قبل/بعد. خدمات فورية وطوارئ 24/7.',
    chip1: 'متاحون 24/7',
    chip2: 'آمن للعائلة والحيوانات الأليفة',
    chip3: 'استجابة في نفس اليوم',
    ctaWhatsApp: 'راسلنا واتساب',
    bookService: 'احجز خدمة',
    aboutTitle: 'من نحن',
    aboutWho: 'شركة تنظيف ومكافحة حشرات في الدوحة نقدم خدمات موثوقة وصديقة للبيئة للمنازل والمكاتب والمنشآت...',
    aboutDiffTitle: 'لماذا نتميز',
    diff1: 'متاحون على مدار الساعة للطوارئ',
    diff2: 'فريق مدرب ومؤمّن',
    diff3: 'مواد آمنة للعائلة والحيوانات الأليفة',
    diff4: 'أسعار واضحة بلا مفاجآت',
    diff5: 'صور توثيق بعد كل عمل',
    diff6: 'ضمان رضا 100%',
    bookTitle: 'احجز خدمة (24/7)',
    lblName: 'الاسم',
    lblPhone: 'واتساب',
    lblService: 'الخدمة',
    lblDate: 'التاريخ المفضل',
    lblTime: 'الوقت المفضل',
    lblPlace: 'الموقع / العنوان',
    lblNotes: 'ملاحظات',
    sendBtn: 'إرسال عبر واتساب',
    servicesTitle: 'الخدمات',
    catRes: 'تنظيف سكني',
    catCom: 'تنظيف تجاري',
    catSpec: 'تنظيف متخصص',
    catPest: 'مكافحة الحشرات',
    res1: 'تنظيف الشقق والفلل (يومي/أسبوعي/شهري)',
    res2: 'تنظيف عميق (ربيعي/انتقال)',
    res3: 'تنظيف عميق للمطبخ والحمام',
    res4: 'غسيل السجاد والأرائك والستائر',
    res5: 'تنظيف المراتب والكنب (عث الغبار/البقع)',
    com1: 'تنظيف المكاتب (يومي/مجدول)',
    com2: 'المتاجر وصالات العرض',
    com3: 'المدارس والحضانات',
    com4: 'نظافة المطاعم والمقاهي',
    com5: 'دعم الضيافة الفندقية',
    sp1: 'تنظيف ما بعد الإنشاء/التجديد',
    sp2: 'تنظيف الزجاج والنوافذ (داخلي/خارجي)',
    sp3: 'العناية بالأرضيات: رخام/سيراميك/خشب',
    sp4: 'تنظيف خزانات المياه',
    sp5: 'تنظيف مجاري الهواء (التكييف)',
    pc1: 'مكافحة الصراصير وبقّ الفراش (فحص + علاج مستهدف + متابعة)',
    pc2: 'مكافحة القوارض (سدّ الفتحات والفخاخ)',
    pc3: 'مكافحة النمل والنمل الأبيض',
    pc4: 'مكافحة البعوض والذباب (تعفير/ضباب؛ معالجة يرقات المياه الراكدة)',
    pc5: 'التعقيم والتطهير',
    whyTitle: 'لماذا تختار إم إس فريندز؟',
    why1: 'خدمة 24/7 — لا نتوقف',
    why2: 'استجابة فورية وحالات الطوارئ',
    why3: 'مواد صديقة للبيئة وآمنة للعائلة',
    why4: 'فريق مدرّب بزي رسمي ومؤمّن',
    why5: 'تحديثات واتساب وصور توثيق',
    why6: 'أسعار واضحة ونطاق عمل مكتوب',
    why7: 'ضمان رضا 100٪',
    areasTitle: 'نطاق الخدمة',
    areasText: 'الدوحة • لوسيل • الوكرة • الخور • اللؤلؤة • الخليج الغربي • وجميع المناطق القريبة في قطر.',
    hoursTitle: 'ساعات العمل',
    hoursText: '24 ساعة • 7 أيام في الأسبوع • خدمة طوارئ',
    safetyTitle: 'السلامة والمعايير',
    safe1: 'مواد آمنة للعائلة والحيوانات الأليفة (نشرات MSDS متاحة)',
    safe2: 'بطاقات تعريف وزي رسمي وفحص خلفيات',
    safe3: 'تعقيم الأدوات بين الأعمال',
    safe4: 'تهوية ومعدات وقاية أثناء المعالجات',
    faqTitle: 'الأسئلة الشائعة',
    q1: 'هل المواد آمنة للأطفال والحيوانات الأليفة؟',
    a1: 'نعم. نستخدم مواد معتمدة وصديقة للبيئة. ينصح بتهوية قصيرة بعد المعالجة لسلامة أكبر.',
    q2: 'كم هي سرعة الاستجابة؟',
    a2: 'نعمل 24/7. غالبية الحجوزات في نفس اليوم، والطوارئ خلال 1–2 ساعة داخل الدوحة.',
    q3: 'هل يجب مغادرة المنزل أثناء المعالجة؟',
    a3: 'المعالجات الخفيفة لا تتطلب ذلك؛ وفي الحالات القوية ننصح بالخروج 2–4 ساعات. يحدد الفريق حسب الحالة.',
    contactTitle: 'تواصل معنا',
    waLabel: 'واتساب / اتصال:',
    emailLabel: 'البريد الإلكتروني:',
    locLabel: 'الموقع:',
    locText: 'الدوحة، قطر',
    ctaTitle: 'جاهز للحجز؟',
    ctaText: 'راسلنا عبر واتساب في أي وقت. نؤكد الموعد ونرسل الفريق بسرعة.',
    footerCity: 'تنظيف ومكافحة حشرات، الدوحة، قطر',
    footerOpen: 'متاحون 24/7'
  }
};

function useT(lang: Lang) {
  return (k: string) => dict[lang][k] ?? dict.en[k] ?? k;
}

function waLink(text = 'Hi! I need a service.') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useT(lang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const heroWa = useMemo(
    () => waLink(lang === 'ar'
      ? 'مرحباً! أحتاج خدمة تنظيف/مكافحة حشرات. هل أنتم متاحون الآن؟'
      : 'Hi! I need cleaning/pest control. Are you available now?'),
    [lang]
  );

  const contactWa = useMemo(
    () => waLink(lang === 'ar'
      ? 'مرحباً! أريد الاستفسار عن خدماتكم المتاحة 24/7.'
      : 'Hello! I'd like to ask about your 24/7 services.'),
    [lang]
  );

  // Background bubbles + sparkles
  const bubblesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const host = bubblesRef.current;
    if (!host) return;
    const spawn = () => {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = 8 + Math.random() * 26;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.animationDuration = `${10 + Math.random() * 12}s`;
      host.appendChild(b);
      setTimeout(() => b.remove(), 24000);
    };
    const sparkle = () => {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
      host.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    };
    const bi = setInterval(spawn, 500);
    const si = setInterval(sparkle, 700);
    return () => { clearInterval(bi); clearInterval(si); };
  }, []);

  // Spray mist animation
  const mistRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const box = mistRef.current;
    if (!box) return;
    const run = () => {
      for (let i = 0; i < 10; i++) {
        const p = document.createElement('span');
        p.style.left = '0px';
        p.style.bottom = '18px';
        p.style.animationDelay = `${i * 0.06}s`;
        box.appendChild(p);
        setTimeout(() => p.remove(), 1500);
      }
    };
    run();
    const id = setInterval(run, 3500);
    return () => clearInterval(id);
  }, []);

  // Pests layer toggle
  const [showBugs, setShowBugs] = useState(true);
  const bugsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const layer = bugsRef.current;
    if (!layer || !showBugs) {
      if (layer) layer.innerHTML = '';
      return;
    }
    layer.innerHTML = '';

    const makeRoach = () => {
      const wrap = document.createElement('div');
      wrap.className = 'bug roach';
      wrap.style.left = `${Math.random() * 90 + 5}%`;
      wrap.style.top = `${Math.random() * 80 + 10}%`;
      wrap.innerHTML = `
        <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
          <ellipse cx="32" cy="32" rx="10" ry="14" fill="#3f3f46"/>
          <line class="leg" x1="22" y1="30" x2="8" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="22" y1="34" x2="8" y2="38" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="30" x2="56" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="34" x2="56" y2="38" stroke="#111827" stroke-width="2"/>
        </svg>`;
      layer.appendChild(wrap);
    };

    for (let i = 0; i < 4; i++) makeRoach();

    return () => { if (layer) layer.innerHTML = ''; };
  }, [showBugs]);

  // Booking -> WhatsApp
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      'New Booking (Website)',
      `• Name: ${String(f.get('name') || '')}`,
      `• WhatsApp: ${String(f.get('phone') || '')}`,
      `• Service: ${String(f.get('service') || '')}`,
      `• Date: ${String(f.get('date') || '')}`,
      `• Time: ${String(f.get('time') || '')}`,
      `• Location: ${String(f.get('place') || '')}`,
      String(f.get('notes') || '') ? `• Notes: ${String(f.get('notes'))}` : '',
      `• Email: ${SUPPORT_EMAIL}`
    ].filter(Boolean).join('\n');

    window.open(waLink(lines), '_blank');
  }

  return (
    <div dir={dir}>
      <div className="bg-bubbles" ref={bubblesRef} />

      {/* Header */}
      <div className="header">
        <div className="h-in">
          <div className="logo">MF</div>
          <div>
            <div className="brandname">{t('brand')}</div>
            <div className="tag">{t('tagline')}</div>
          </div>
          <div className="sp" />
          <div className="lang">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>العربية</button>
          </div>
        </div>
      </div>

      {/* Pests layer + toggle */}
      <div className="bugs-layer" ref={bugsRef} />
      <label className="toggle-bugs">
        <input type="checkbox" checked={showBugs} onChange={(e) => setShowBugs(e.target.checked)} />
        {' '}🐞 <span>{t('toggleBugs')}</span>
      </label>

      <main className="wrap">
        {/* HERO */}
        <section className="hero">
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSub')}</p>
          <div className="chips">
            <span className="chip">{t('chip1')}</span>
            <span className="chip">{t('chip2')}</span>
            <span className="chip">{t('chip3')}</span>
          </div>
          <div className="rowb">
            <a className="btn btn-primary" href={heroWa}>{t('ctaWhatsApp')}</a>
            <a className="btn" href="#booking">{t('bookService')}</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="card" id="about">
          <h2>{t('aboutTitle')}</h2>
          <p>{t('aboutWho')}</p>
          <h3>{t('aboutDiffTitle')}</h3>
          <ul style={{ margin: '0 0 0 18px' }}>
            <li>{t('diff1')}</li>
            <li>{t('diff2')}</li>
            <li>{t('diff3')}</li>
            <li>{t('diff4')}</li>
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const WA_NUMBER = '97477430206';
const SUPPORT_EMAIL = 'info@msffrieds.qa';

type Lang = 'en' | 'ar';

const dict: Record<Lang, Record<string, string>> = {
  en: {
    brand: 'Ms Friends Trading & Contracting',
    tagline: 'Cleaning & Pest Control • Open 24/7',
    toggleBugs: 'Show pests animation',
    heroTitle: 'Sparkling Cleaning & Pest Control in Doha',
    heroSub: 'Trained & insured staff, family-safe materials, and before/after proof photos. 24/7 same-day & emergency service.',
    chip1: '24/7 Available',
    chip2: 'Safe for Family & Pets',
    chip3: 'Same-day Response',
    ctaWhatsApp: 'WhatsApp Us',
    bookService: 'Book a Service',
    aboutTitle: 'About Us',
    aboutWho: 'Ms Friends is a Doha-based cleaning and pest control company delivering reliable, eco-friendly services for homes, offices, and facilities...',
    aboutDiffTitle: 'What makes us different',
    diff1: '24/7 availability for cleaning & pest emergencies',
    diff2: 'Trained & insured staff',
    diff3: 'Family & pet-safe materials',
    diff4: 'Transparent pricing, no surprises',
    diff5: 'Proof-of-work photos after every job',
    diff6: '100% satisfaction guarantee',
    bookTitle: 'Book a Service (24/7)',
    lblName: 'Name',
    lblPhone: 'WhatsApp',
    lblService: 'Service',
    lblDate: 'Preferred Date',
    lblTime: 'Preferred Time',
    lblPlace: 'Location / Address',
    lblNotes: 'Notes',
    sendBtn: 'Send via WhatsApp',
    servicesTitle: 'Services',
    catRes: 'Residential Cleaning',
    catCom: 'Commercial Cleaning',
    catSpec: 'Specialized Cleaning',
    catPest: 'Pest Control',
    res1: 'Regular apartment & villa cleaning (daily / weekly / monthly)',
    res2: 'Deep cleaning (spring, move-in/move-out)',
    res3: 'Kitchen & bathroom deep cleaning',
    res4: 'Sofa, carpet & curtain shampooing',
    res5: 'Mattress & upholstery cleaning (dust mites, stains)',
    com1: 'Office cleaning (daily / scheduled)',
    com2: 'Shops & showrooms',
    com3: 'Schools & nurseries',
    com4: 'Restaurants & cafés hygiene cleaning',
    com5: 'Hotel housekeeping support',
    sp1: 'Post-construction / renovation cleaning',
    sp2: 'Glass & window cleaning (interior/exterior, low/high areas)',
    sp3: 'Floor care: marble polishing, tile scrubbing, wood care',
    sp4: 'Water tank cleaning',
    sp5: 'AC duct cleaning',
    pc1: 'Cockroach & bedbug treatment (inspection + targeted treatment + follow-up)',
    pc2: 'Rodent control (proofing & traps)',
    pc3: 'Ant & termite treatment',
    pc4: 'Mosquito & fly control (ULV fogging / misting; larvicide for stagnant water)',
    pc5: 'Disinfection & sanitization',
    whyTitle: 'Why Choose Ms Friends?',
    why1: '24/7 service — we never close',
    why2: 'Same-day and emergency call-outs',
    why3: 'Eco-friendly & family-safe materials',
    why4: 'Trained, uniformed, insured staff',
    why5: 'WhatsApp updates + proof photos',
    why6: 'Clear pricing & written scope before we start',
    why7: '100% satisfaction guarantee',
    areasTitle: 'Service Areas',
    areasText: 'Doha • Lusail • Al Wakrah • Al Khor • The Pearl • West Bay • and all nearby areas across Qatar.',
    hoursTitle: 'Working Hours',
    hoursText: '24 Hours • 7 Days a Week • Emergency Service Available',
    safetyTitle: 'Safety & Standards',
    safe1: 'Family & pet-safe chemicals (MSDS available)',
    safe2: 'Staff ID & uniforms, background-checked',
    safe3: 'Tools sanitized between jobs',
    safe4: 'Proper ventilation & PPE during treatments',
    faqTitle: 'FAQs',
    q1: 'Are your chemicals safe for kids and pets?',
    a1: 'Yes. We only use MOI-approved, eco-friendly materials. Short ventilation is advised after treatment for maximum safety.',
    q2: 'How fast can you respond?',
    a2: 'We operate 24/7. Most bookings are same-day, and emergency pest control can arrive within 1–2 hours inside Doha.',
    q3: 'Do I need to leave my home during pest treatment?',
    a3: 'Light treatments don't require it, but for strong cockroach/bedbug work we recommend stepping out 2–4 hours. Our team advises case by case.',
    contactTitle: 'Contact',
    waLabel: 'WhatsApp / Call:',
    emailLabel: 'Email:',
    locLabel: 'Location:',
    locText: 'Doha, Qatar',
    ctaTitle: 'Ready to book?',
    ctaText: 'Message us on WhatsApp anytime—day or night. We'll confirm your time and send a team fast.',
    footerCity: 'Cleaning & Pest Control, Doha, Qatar',
    footerOpen: 'Open 24/7'
  },
  ar: {
    brand: 'إم إس فريندز للتجارة والمقاولات',
    tagline: 'تنظيف ومكافحة حشرات • متاحون 24/7',
    toggleBugs: 'إظهار حركة الحشرات',
    heroTitle: 'تنظيف ومكافحة حشرات باحتراف في الدوحة',
    heroSub: 'فريق مدرّب ومؤمّن، مواد آمنة للعائلة، وصور قبل/بعد. خدمات فورية وطوارئ 24/7.',
    chip1: 'متاحون 24/7',
    chip2: 'آمن للعائلة والحيوانات الأليفة',
    chip3: 'استجابة في نفس اليوم',
    ctaWhatsApp: 'راسلنا واتساب',
    bookService: 'احجز خدمة',
    aboutTitle: 'من نحن',
    aboutWho: 'شركة تنظيف ومكافحة حشرات في الدوحة نقدم خدمات موثوقة وصديقة للبيئة للمنازل والمكاتب والمنشآت...',
    aboutDiffTitle: 'لماذا نتميز',
    diff1: 'متاحون على مدار الساعة للطوارئ',
    diff2: 'فريق مدرب ومؤمّن',
    diff3: 'مواد آمنة للعائلة والحيوانات الأليفة',
    diff4: 'أسعار واضحة بلا مفاجآت',
    diff5: 'صور توثيق بعد كل عمل',
    diff6: 'ضمان رضا 100%',
    bookTitle: 'احجز خدمة (24/7)',
    lblName: 'الاسم',
    lblPhone: 'واتساب',
    lblService: 'الخدمة',
    lblDate: 'التاريخ المفضل',
    lblTime: 'الوقت المفضل',
    lblPlace: 'الموقع / العنوان',
    lblNotes: 'ملاحظات',
    sendBtn: 'إرسال عبر واتساب',
    servicesTitle: 'الخدمات',
    catRes: 'تنظيف سكني',
    catCom: 'تنظيف تجاري',
    catSpec: 'تنظيف متخصص',
    catPest: 'مكافحة الحشرات',
    res1: 'تنظيف الشقق والفلل (يومي/أسبوعي/شهري)',
    res2: 'تنظيف عميق (ربيعي/انتقال)',
    res3: 'تنظيف عميق للمطبخ والحمام',
    res4: 'غسيل السجاد والأرائك والستائر',
    res5: 'تنظيف المراتب والكنب (عث الغبار/البقع)',
    com1: 'تنظيف المكاتب (يومي/مجدول)',
    com2: 'المتاجر وصالات العرض',
    com3: 'المدارس والحضانات',
    com4: 'نظافة المطاعم والمقاهي',
    com5: 'دعم الضيافة الفندقية',
    sp1: 'تنظيف ما بعد الإنشاء/التجديد',
    sp2: 'تنظيف الزجاج والنوافذ (داخلي/خارجي)',
    sp3: 'العناية بالأرضيات: رخام/سيراميك/خشب',
    sp4: 'تنظيف خزانات المياه',
    sp5: 'تنظيف مجاري الهواء (التكييف)',
    pc1: 'مكافحة الصراصير وبقّ الفراش (فحص + علاج مستهدف + متابعة)',
    pc2: 'مكافحة القوارض (سدّ الفتحات والفخاخ)',
    pc3: 'مكافحة النمل والنمل الأبيض',
    pc4: 'مكافحة البعوض والذباب (تعفير/ضباب؛ معالجة يرقات المياه الراكدة)',
    pc5: 'التعقيم والتطهير',
    whyTitle: 'لماذا تختار إم إس فريندز؟',
    why1: 'خدمة 24/7 — لا نتوقف',
    why2: 'استجابة فورية وحالات الطوارئ',
    why3: 'مواد صديقة للبيئة وآمنة للعائلة',
    why4: 'فريق مدرّب بزي رسمي ومؤمّن',
    why5: 'تحديثات واتساب وصور توثيق',
    why6: 'أسعار واضحة ونطاق عمل مكتوب',
    why7: 'ضمان رضا 100٪',
    areasTitle: 'نطاق الخدمة',
    areasText: 'الدوحة • لوسيل • الوكرة • الخور • اللؤلؤة • الخليج الغربي • وجميع المناطق القريبة في قطر.',
    hoursTitle: 'ساعات العمل',
    hoursText: '24 ساعة • 7 أيام في الأسبوع • خدمة طوارئ',
    safetyTitle: 'السلامة والمعايير',
    safe1: 'مواد آمنة للعائلة والحيوانات الأليفة (نشرات MSDS متاحة)',
    safe2: 'بطاقات تعريف وزي رسمي وفحص خلفيات',
    safe3: 'تعقيم الأدوات بين الأعمال',
    safe4: 'تهوية ومعدات وقاية أثناء المعالجات',
    faqTitle: 'الأسئلة الشائعة',
    q1: 'هل المواد آمنة للأطفال والحيوانات الأليفة؟',
    a1: 'نعم. نستخدم مواد معتمدة وصديقة للبيئة. ينصح بتهوية قصيرة بعد المعالجة لسلامة أكبر.',
    q2: 'كم هي سرعة الاستجابة؟',
    a2: 'نعمل 24/7. غالبية الحجوزات في نفس اليوم، والطوارئ خلال 1–2 ساعة داخل الدوحة.',
    q3: 'هل يجب مغادرة المنزل أثناء المعالجة؟',
    a3: 'المعالجات الخفيفة لا تتطلب ذلك؛ وفي الحالات القوية ننصح بالخروج 2–4 ساعات. يحدد الفريق حسب الحالة.',
    contactTitle: 'تواصل معنا',
    waLabel: 'واتساب / اتصال:',
    emailLabel: 'البريد الإلكتروني:',
    locLabel: 'الموقع:',
    locText: 'الدوحة، قطر',
    ctaTitle: 'جاهز للحجز؟',
    ctaText: 'راسلنا عبر واتساب في أي وقت. نؤكد الموعد ونرسل الفريق بسرعة.',
    footerCity: 'تنظيف ومكافحة حشرات، الدوحة، قطر',
    footerOpen: 'متاحون 24/7'
  }
};

function useT(lang: Lang) {
  return (k: string) => dict[lang][k] ?? dict.en[k] ?? k;
}

function waLink(text = 'Hi! I need a service.') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useT(lang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const heroWa = useMemo(
    () => waLink(lang === 'ar'
      ? 'مرحباً! أحتاج خدمة تنظيف/مكافحة حشرات. هل أنتم متاحون الآن؟'
      : 'Hi! I need cleaning/pest control. Are you available now?'),
    [lang]
  );

  const contactWa = useMemo(
    () => waLink(lang === 'ar'
      ? 'مرحباً! أريد الاستفسار عن خدماتكم المتاحة 24/7.'
      : 'Hello! I'd like to ask about your 24/7 services.'),
    [lang]
  );

  // Background bubbles + sparkles
  const bubblesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const host = bubblesRef.current;
    if (!host) return;
    const spawn = () => {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = 8 + Math.random() * 26;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.animationDuration = `${10 + Math.random() * 12}s`;
      host.appendChild(b);
      setTimeout(() => b.remove(), 24000);
    };
    const sparkle = () => {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
      host.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    };
    const bi = setInterval(spawn, 500);
    const si = setInterval(sparkle, 700);
    return () => { clearInterval(bi); clearInterval(si); };
  }, []);

  // Spray mist animation
  const mistRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const box = mistRef.current;
    if (!box) return;
    const run = () => {
      for (let i = 0; i < 10; i++) {
        const p = document.createElement('span');
        p.style.left = '0px';
        p.style.bottom = '18px';
        p.style.animationDelay = `${i * 0.06}s`;
        box.appendChild(p);
        setTimeout(() => p.remove(), 1500);
      }
    };
    run();
    const id = setInterval(run, 3500);
    return () => clearInterval(id);
  }, []);

  // Pests layer toggle
  const [showBugs, setShowBugs] = useState(true);
  const bugsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const layer = bugsRef.current;
    if (!layer || !showBugs) {
      if (layer) layer.innerHTML = '';
      return;
    }
    layer.innerHTML = '';

    const makeRoach = () => {
      const wrap = document.createElement('div');
      wrap.className = 'bug roach';
      wrap.style.left = `${Math.random() * 90 + 5}%`;
      wrap.style.top = `${Math.random() * 80 + 10}%`;
      wrap.innerHTML = `
        <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
          <ellipse cx="32" cy="32" rx="10" ry="14" fill="#3f3f46"/>
          <line class="leg" x1="22" y1="30" x2="8" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="22" y1="34" x2="8" y2="38" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="30" x2="56" y2="26" stroke="#111827" stroke-width="2"/>
          <line class="leg" x1="42" y1="34" x2="56" y2="38" stroke="#111827" stroke-width="2"/>
        </svg>`;
      layer.appendChild(wrap);
    };

    for (let i = 0; i < 4; i++) makeRoach();

    return () => { if (layer) layer.innerHTML = ''; };
  }, [showBugs]);

  // Booking -> WhatsApp
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      'New Booking (Website)',
      `• Name: ${String(f.get('name') || '')}`,
      `• WhatsApp: ${String(f.get('phone') || '')}`,
      `• Service: ${String(f.get('service') || '')}`,
      `• Date: ${String(f.get('date') || '')}`,
      `• Time: ${String(f.get('time') || '')}`,
      `• Location: ${String(f.get('place') || '')}`,
      String(f.get('notes') || '') ? `• Notes: ${String(f.get('notes'))}` : '',
      `• Email: ${SUPPORT_EMAIL}`
    ].filter(Boolean).join('\n');

    window.open(waLink(lines), '_blank');
  }

  return (
    <div dir={dir}>
      <div className="bg-bubbles" ref={bubblesRef} />

      {/* Header */}
      <div className="header">
        <div className="h-in">
          <div className="logo">MF</div>
          <div>
            <div className="brandname">{t('brand')}</div>
            <div className="tag">{t('tagline')}</div>
          </div>
          <div className="sp" />
          <div className="lang">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>العربية</button>
          </div>
        </div>
      </div>

      {/* Pests layer + toggle */}
      <div className="bugs-layer" ref={bugsRef} />
      <label className="toggle-bugs">
        <input type="checkbox" checked={showBugs} onChange={(e) => setShowBugs(e.target.checked)} />
        {' '}🐞 <span>{t('toggleBugs')}</span>
      </label>

      <main className="wrap">
        {/* HERO */}
        <section className="hero">
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSub')}</p>
          <div className="chips">
            <span className="chip">{t('chip1')}</span>
            <span className="chip">{t('chip2')}</span>
            <span className="chip">{t('chip3')}</span>
          </div>
          <div className="rowb">
            <a className="btn btn-primary" href={heroWa}>{t('ctaWhatsApp')}</a>
            <a className="btn" href="#booking">{t('bookService')}</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="card" id="about">
          <h2>{t('aboutTitle')}</h2>
          <p>{t('aboutWho')}</p>
          <h3>{t('aboutDiffTitle')}</h3>
          <ul style={{ margin: '0 0 0 18px' }}>
            <li>{t('diff1')}</li>
            <li>{t('diff2')}</li>
            <li>{t('diff3')}</li>
            <li>{t('diff4')}</li>
            <li>{t('diff5')}</li>
            <li>{t('diff6')}</li>
          </ul>
        </section>

        {/* BOOKING */}
        <section id="booking" className="card">
          <h2>{t('bookTitle')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="row two">
              <div>
'use client'

import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Github, ChevronDown } from 'lucide-react'
import { dict } from '@/app/dictionary'

export default function Home() {
  const [lang, setLang] = useState('en')
  const [dir, setDir] = useState('ltr')
  const [translations, setTranslations] = useState(dict.en)
  const bubblesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'ar') {
      setLang('ar')
      setDir('rtl')
      setTranslations(dict.ar)
    } else {
      setLang('en')
      setDir('ltr')
      setTranslations(dict.en)
    }
  }, [])

  useEffect(() => {
    if (bubblesRef.current) {
      const bubbleCount = 50
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div')
        bubble.className = 'bubble'
        const size = `${Math.random() * 4 + 1}rem`
        bubble.style.width = size
        bubble.style.height = size
        bubble.style.left = `${Math.random() * 100}%`
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`
        bubble.style.animationDelay = `${Math.random() * 5}s`
        bubblesRef.current.appendChild(bubble)
      }
    }
  }, [])

  const toggleLanguage = () => {
    if (lang === 'en') {
      setLang('ar')
      setDir('rtl')
      setTranslations(dict.ar)
    } else {
      setLang('en')
      setDir('ltr')
      setTranslations(dict.en)
    }
  }

  return (
    <>
      <div className="bg-bubbles" ref={bubblesRef} />
      <main
        className={cn(
          'flex flex-col items-center justify-center min-h-screen p-4 sm:p-8',
          'bg-gradient-to-br from-gray-900 to-black text-white'
        )}
      >
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        <div className="z-10 text-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
            <Image
              src="/profile.png"
              alt="Mohamed Ikram"
              width={200}
              height={200}
              priority
              className="rounded-full object-cover border-4 border-gray-700 shadow-lg"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            {translations.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
            {translations.title}
          </h2>

          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://www.instagram.com/ikram__official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
'use client'

import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Github, ChevronDown } from 'lucide-react'
import { dict } from '@/app/dictionary'

export default function Home() {
  const [lang, setLang] = useState('en')
  const [dir, setDir] = useState('ltr')
  const [translations, setTranslations] = useState(dict.en)
  const bubblesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'ar') {
      setLang('ar')
      setDir('rtl')
      setTranslations(dict.ar)
    } else {
      setLang('en')
      setDir('ltr')
      setTranslations(dict.en)
    }
  }, [])

  useEffect(() => {
    if (bubblesRef.current) {
      const bubbleCount = 50
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div')
        bubble.className = 'bubble'
        const size = `${Math.random() * 4 + 1}rem`
        bubble.style.width = size
        bubble.style.height = size
        bubble.style.left = `${Math.random() * 100}%`
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`
        bubble.style.animationDelay = `${Math.random() * 5}s`
        bubblesRef.current.appendChild(bubble)
      }
    }
  }, [])

  const toggleLanguage = () => {
    if (lang === 'en') {
      setLang('ar')
      setDir('rtl')
      setTranslations(dict.ar)
    } else {
      setLang('en')
      setDir('ltr')
      setTranslations(dict.en)
    }
  }

  return (
    <>
      <div className="bg-bubbles" ref={bubblesRef} />
      <main
        className={cn(
          'flex flex-col items-center justify-center min-h-screen p-4 sm:p-8',
          'bg-gradient-to-br from-gray-900 to-black text-white'
        )}
      >
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        <div className="z-10 text-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
            <Image
              src="/profile.png"
              alt="Mohamed Ikram"
              width={200}
              height={200}
              priority
              className="rounded-full object-cover border-4 border-gray-700 shadow-lg"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            {translations.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
            {translations.title}
          </h2>

          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://www.instagram.com/ikram__official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-ikram-35a113264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="https://github.com/Mohamedikramofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </Link>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">
                {translations.about.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {translations.about.description}
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                {translations.skills.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {translations.skills.list.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                {translations.projects.title}
              </h3>
              <div className="space-y-4">
                <div className="text-left">
                  <h4 className="font-bold text-lg">
                    {translations.projects.project1.title}
                  </h4>
                  <p className="text-gray-400">
                    {translations.projects.project1.description}
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">
                    {translations.projects.project2.title}
                  </h4>
                  <p className="text-gray-400">
                    {translations.projects.project2.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">
                {translations.contact.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {translations.contact.description}
              </p>
              <Link
                href="mailto:mohamedikram.me@gmail.com"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                {translations.contact.button}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={24} className="text-gray-500" />
        </div>
      </main>
    </>
  )
}
