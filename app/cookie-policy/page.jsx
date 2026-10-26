import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/basic';
import SideNav from '@/components/SideNav';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Cookie Policy | Geoporte',
  description:
    'Geoporte does not set cookies or use analytics on this website. Learn how third-party fonts, scripts and map tiles may use cookies and how to manage them.',
  path: '/cookie-policy',
  image: 'https://geoporte.com.au/images/real/team-meeting.jpg',
});

export default function Page() {
  return (
    <Site>
      {/* PAGE HERO */}
      <section className="phero lg-hero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/team-meeting.jpg" alt="Geoporte engineers in a project meeting" />
        </div>
        <div className="wrap phero-in">
          <div>
            <div className="crumb" id="crumb">
              <a href="/">Home</a>
              <i />
              <b>Cookie Policy</b>
            </div>
            <h1 id="pTitle">
              <span className="line">
                <span>Cookie</span>
              </span>
              <span className="line">
                <span className="a">Policy</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>How this website uses cookies and similar technologies.</p>
            <a href="#contact" className="pill pill-a magnetic">
              Contact us <Arrow />
            </a>
          </div>
        </div>
      </section>
      {/* LEGAL */}
      <section className="art legal" id="article">
        <div className="wrap a-grid">
          <div className="a-body lg-body">
            <p className="lg-upd">Last updated: 23 October 2026</p>
            <p className="lg-lead">This policy explains what cookies are and how they relate to the Geoporte website.</p>
            <h2 className="lg-h">What cookies are</h2>
            <p>
              Cookies are small text files that a website can store on your device. Similar technologies include local storage and tracking
              pixels. They are commonly used to remember preferences or measure how a site is used.
            </p>
            <h2 className="lg-h">Cookies we use</h2>
            <p>
              <em>Geoporte does not set any cookies on this website</em>, and we do not use analytics, advertising or tracking technologies.
            </p>
            <h2 className="lg-h">Third-party content</h2>
            <p>
              To display the website, your browser loads fonts, scripts and map tiles from third-party providers, including Google Fonts,
              Cloudflare (cdnjs), jsDelivr and Esri (ArcGIS). These providers may log technical information such as your IP address, and may
              use their own cookies under their own policies. We do not control those cookies.
            </p>
            <h2 className="lg-h">Managing cookies</h2>
            <p>
              You can block or delete cookies through your browser settings at any time. Because we do not rely on cookies, blocking them
              will not affect how this website works.
            </p>
            <h2 className="lg-h">Changes and contact</h2>
            <p>
              If we start using cookies or analytics in future, we will update this page before doing so. Questions can be sent to{' '}
              <a href="mailto:enquiries@geoporte.com.au">enquiries@geoporte.com.au</a>.
            </p>
            <h2 className="lg-h">Contact us</h2>
            <p>
              Geoporte
              <br />
              Tower 5, Collins Square, 727 Collins Street, Melbourne VIC 3008, Australia
              <br />
              Email: <a href="mailto:enquiries@geoporte.com.au">enquiries@geoporte.com.au</a>
              <br />
              Phone: <a href="tel:+61431554626">+61 (0) 431 55 4626</a>
            </p>
          </div>
          <SideNav group="legal" current="cookie-policy" />
        </div>
      </section>
      {/* CONTACT */}
      <Contact />
      <PageScript />
    </Site>
  );
}
