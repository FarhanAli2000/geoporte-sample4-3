import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/advisory';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Engineering Advisory Services | Geoporte',
  description:
    'Civil and geotechnical advisory: feasibility studies, risk management, regulatory compliance, construction and asset management, from concept to completion.',
  path: '/advisory-services',
  image: 'https://geoporte.com.au/images/real/site-meeting-creek.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="advisory-services">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/site-meeting-creek.jpg" alt="Geoporte engineer in a stakeholder site meeting" />
        </div>
        <div className="wrap phero-in">
          <div>
            <div className="crumb" id="crumb">
              <a href="/">Home</a>
              <i />
              <a href="/#services">Our Services</a>
              <i />
              <b>Advisory Services</b>
            </div>
            <h1 id="pTitle">
              <span className="line">
                <span>Advisory</span>
              </span>
              <span className="line">
                <span className="a">Services</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Geoporte offers comprehensive civil engineering advisory services to clients in various sectors.</p>
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
              <h2 className="split">Expert guidance from conception to completion.</h2>
            </div>
            <p className="big rv">
              With a team of experienced civil engineers and consultants, we provide expert guidance and support throughout all stages of
              civil engineering projects, <em>from conception to completion</em>.
            </p>
            <p className="rv i-more">
              Geoporte value lies in our highly experienced staff that understand geotechnical challenges and take an open, collaborative
              partnership approach with clients. We pride ourselves on creating innovative, practical solutions to save our clients time and
              money across project phases.
            </p>
            <div className="i-meta rv">
              <span>Feasibility</span>
              <span>Risk &amp; compliance</span>
              <span>Construction &amp; asset management</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/council-site-drilling.jpg" alt="Geotechnical drilling at a council leisure centre site" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Advisory
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
                <div className="cap">How we help</div>
                <h2 className="split">Advisory expertise</h2>
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
