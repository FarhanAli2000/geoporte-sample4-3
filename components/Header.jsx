import { ABOUT, GEOTECHNICAL, SERVICES, homeLink } from '@/lib/nav';
import { Arrow, Caret, ChevronRight, Search } from './icons';

// `section` marks the top-level menu item for the current page; `current` is the page slug.
export default function Header({ home = false, section, current }) {
  const h = (hash) => homeLink(home, hash);
  const active = (key) => (section === key ? 'active' : undefined);
  const cur = (slug) => (slug === current ? { className: 'cur', 'aria-current': 'page' } : {});
  const serviceHref = (slug) => (slug ? '/' + slug : h('#services'));

  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap nav-in">
          <a href={h()} className="brand" aria-label="Geoporte home"><img src="/images/geoporte-logo.png" alt="Geoporte logo" /><span>GE<em>O</em>PORTE</span></a>
          <ul className="menu" id="menu">
            <li><a href={h()} className={active('home')}>Home</a></li>
            <li className="has-dd">
              <a href="/about-us" className={active('about')} aria-haspopup="true">About <Caret /></a>
              <div className="dd"><ul className="dd-list">
                {ABOUT.map(([slug, label]) => <li key={slug}><a href={'/' + slug} {...cur(slug)}>{label}</a></li>)}
              </ul></div>
            </li>
            <li className="has-dd">
              <a href={h('#services')} className={active('services')} aria-haspopup="true">Services <Caret /></a>
              <div className="dd"><ul className="dd-list">
                {SERVICES.map(([slug, label]) => slug ? (
                  <li key={label}><a href={'/' + slug} {...cur(slug)}>{label}</a></li>
                ) : (
                  <li key={label} className="has-sub">
                    <a href={h('#services')}>{label}<ChevronRight className="arrow" /></a>
                    <div className="dd-sub"><ul className="dd-list">
                      {GEOTECHNICAL.map(([s, l]) => <li key={s}><a href={'/' + s} {...cur(s)}>{l}</a></li>)}
                    </ul></div>
                  </li>
                ))}
              </ul></div>
            </li>
            <li><a href="/publications" className={active('publications')}>Publications</a></li>
            <li><a href="/projects" className={active('projects')}>Projects</a></li>
            <li><a href="/contact-us" className={active('contact')}>Contact</a></li>
            <span className="ink" id="ink"></span>
          </ul>
          <div className="nav-r">
            {home && (
              <>
                <button className="ibtn" id="openSearch" aria-label="Search"><Search /></button>
                <span className="vsep"></span>
              </>
            )}
            <a href={home ? '#enquiry' : '/contact-us'} className="pill pill-a magnetic">Get in touch <Arrow /></a>
            <button className="burger" id="burger" aria-label="Open menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>
      <nav className="mmenu" aria-label="Mobile">
        <a href={h()}>Home</a>
        <a href="/about-us" className={active('about')}>About</a>
        <div className="msub">
          {ABOUT.map(([slug, label]) => <a key={slug} href={'/' + slug} {...cur(slug)}>{label}</a>)}
        </div>
        <a href={h('#services')} className={active('services')}>Services</a>
        <div className="msub">
          {SERVICES.map(([slug, label]) => <a key={label} href={serviceHref(slug)} {...cur(slug)}>{label}</a>)}
        </div>
        <a href="/publications" className={active('publications')}>Publications</a>
        <a href="/projects" className={active('projects')}>Projects</a>
        <a href="/contact-us" className={active('contact')}>Contact</a>
      </nav>
    </>
  );
}
