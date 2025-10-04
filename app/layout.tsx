// NOTE: Since <html> lives in layout.tsx, we set dir on a wrapper <div>.
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

        {/* (…everything else from your page: About, Booking form, Services, FAQ, Contact, Footer …) */}

        <footer>
          © {new Date().getFullYear()} <span>{t('brand')}</span> — <span>{t('footerCity')}</span> • <span>{t('footerOpen')}</span>
        </footer>
      </main>

      {/* Floating WA */}
      <a className="btn btn-primary" style={{ position: 'fixed', right: 16, bottom: 18, zIndex: 70 }} href={waLink()}>
        {t('ctaWhatsApp')}
      </a>
    </div>
  );
