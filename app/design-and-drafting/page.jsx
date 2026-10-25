import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/design-and-drafting';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Design & Drafting Services | AutoCAD, Civil 3D | Geoporte',
  description:
    'Civil design and drafting using AutoCAD, Civil 3D and Revit: conceptual and detailed design, 3D modelling, site grading and construction documentation.',
  path: '/design-and-drafting',
  image: 'https://geoporte.com.au/images/real/design-drawings-review.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="design-and-drafting">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/design-drawings-review.jpg" alt="Engineers marking up design drawings" />
        </div>
        <div className="wrap phero-in">
          <div>
            <div className="crumb" id="crumb">
              <a href="/">Home</a>
              <i />
              <a href="/#services">Our Services</a>
              <i />
              <b>Design and Drafting</b>
            </div>
            <h1 id="pTitle">
              <span className="line">
                <span>Design and</span>
              </span>
              <span className="line">
                <span className="a">Drafting</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Geoporte provides design and drafting services in the civil engineering sector.</p>
            <a href="#contact" className="pill pill-a magnetic">
              Contact us <Arrow />
            </a>
          </div>
        </div>
      </section>
      {/* INTRO */}
      <section className="intro" id="intro">
        <div className="wrap i-grid">
          <div className="i-copy">
            <div className="sec-head">
              <div className="cap">Our Services</div>
              <h2 className="split">Comprehensive solutions, tailored to every client.</h2>
            </div>
            <p className="big rv">
              With a dedicated team of skilled professionals and cutting-edge technology, we offer comprehensive solutions tailored to meet
              the diverse needs of our clients. Our commitment to excellence and innovation ensures the delivery of{' '}
              <em>high-quality design and drafting services</em> that adhere to industry standards and best practices.
            </p>
            <div className="i-meta rv">
              <span>AutoCAD</span>
              <span>Civil 3D</span>
              <span>Revit</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/civil-detailed.jpg" alt="Drafting and measuring tools on a desk" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Design &amp; Drafting
            </span>
          </div>
        </div>
      </section>
      {/* CORE COMPETENCIES */}
      <section className="comp" id="competencies">
        <div className="wrap">
          <div className="c-grid5" id="compGrid">
            <div className="c-headcell">
              <div className="sec-head">
                <div className="cap">What sets us apart</div>
                <h2 className="split">Core Competencies</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES OFFERED */}
      <section className="offered" id="offered">
        <div className="wrap">
          <div className="sec-head">
            <div className="cap">Services Offered</div>
            <h2 className="split">From first concept to construction documents.</h2>
          </div>
          <div className="o-grid">
            <ol className="o-list" id="oList" />
            <div className="o-stick">
              <div className="o-frame" id="oFrame" />
              <div className="o-cap">
                <span id="oName" />
                <span className="o-bar">
                  <i id="oBar" />
                </span>
                <span>
                  <b id="oCur">01</b> / <span id="oTot">05</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      {/* CONTACT */}
      <Contact />
      <PageScript />
    </Site>
  );
}
