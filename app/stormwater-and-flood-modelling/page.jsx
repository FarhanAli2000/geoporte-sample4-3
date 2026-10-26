import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/stormwater';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Stormwater & Flood Modelling Services | Geoporte',
  description:
    'Hydrological, hydraulic and GIS-based flood modelling, flood hazard mapping, stormwater management plans and climate change adaptation for infrastructure.',
  path: '/stormwater-and-flood-modelling',
  image: 'https://geoporte.com.au/images/dam-spillway.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="stormwater-and-flood-modelling">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/dam-spillway.jpg" alt="Water flowing over a dam spillway" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Stormwater &amp;</span>
              </span>
              <span className="line">
                <span className="a">Flood Modelling</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>
              At Geoporte, we are committed to helping our clients effectively manage stormwater and flood risks through innovative
              solutions, technical expertise, and unparalleled customer service.
            </p>
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
              <h2 className="split">Comprehensive stormwater and flood solutions.</h2>
            </div>
            <p className="big rv">
              Geoporte provides comprehensive solutions in stormwater and flood modelling. With a dedicated team of experts and cutting-edge
              technology, we offer tailored services to meet the diverse needs of our clients. Our commitment to excellence and innovation
              ensures the delivery of <em>accurate, reliable, and cost-effective solutions</em>.
            </p>
            <div className="i-meta rv">
              <span>Hydrological</span>
              <span>Hydraulic</span>
              <span>GIS-based</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/dam-spillway.jpg" alt="Dam spillway" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Stormwater &amp; Flood
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
            <h2 className="split">From flood mapping to emergency planning.</h2>
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
