import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/structural';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Structural Engineering Design Services | Geoporte',
  description:
    'Customised, cost-effective structural engineering for civil infrastructure, from conceptual and detailed design to 3D modelling and construction documentation.',
  path: '/structural-engineering',
  image: 'https://geoporte.com.au/images/cable-bridge-wide.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="structural-engineering">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/cable-bridge-wide.jpg" alt="Cable-stayed bridge structure" />
        </div>
        <div className="wrap phero-in">
          <div>
            <div className="crumb" id="crumb">
              <a href="/">Home</a>
              <i />
              <a href="/#services">Our Services</a>
              <i />
              <b>Structural Engineering</b>
            </div>
            <h1 id="pTitle">
              <span className="line">
                <span>Structural</span>
              </span>
              <span className="line">
                <span className="a">Engineering</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Geoporte offers customized and cost-effective structural engineering solutions for the Civil infrastructure sector.</p>
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
              <h2 className="split">Structural solutions for civil infrastructure.</h2>
            </div>
            <p className="big rv">
              Our experts with local and international experience deliver solutions to the <em>latest standards and codes</em>. We are
              committed to providing efficient and timely designs for our clients.
            </p>
            <div className="i-meta rv">
              <span>Civil infrastructure</span>
              <span>Local &amp; international experience</span>
              <span>Latest standards &amp; codes</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/cable-bridge.jpg" alt="Cable-stayed bridge" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Structural
            </span>
          </div>
        </div>
      </section>
      {/* COMMITMENTS */}
      <section className="comp" id="competencies">
        <div className="wrap">
          <div className="c-grid5 three" id="compGrid">
            <div className="c-headcell">
              <div className="sec-head">
                <div className="cap">Why Geoporte</div>
                <h2 className="split">What our clients can count on.</h2>
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
