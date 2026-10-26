import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/telecom';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Telecom Engineering Services | RF Design & DAS | Geoporte',
  description:
    'Surveys, RF design, installation and optimisation of mobile networks, including in-building DAS, small cells, repeaters and outdoor macro and PSN sites.',
  path: '/telecom-services',
  image: 'https://geoporte.com.au/images/dusk-poster.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="telecom-services">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/dusk-poster.jpg" alt="Infrastructure at dusk" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Telecom</span>
              </span>
              <span className="line">
                <span className="a">Services</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Surveys, design, build and testing of mobile communications systems.</p>
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
              <h2 className="split">In-building and outdoor mobile networks.</h2>
            </div>
            <p className="big rv">
              We specialize in surveys, design, build and testing of mobile communications systems across <em>In-building</em> (DAS/ Small
              Cells/ Repeaters/ Nextivity) and <em>Outdoor</em> (Macro/ PSN/ Small Cells) Networks.
            </p>
            <div className="i-meta rv">
              <span>DAS</span>
              <span>Small Cells</span>
              <span>Macro &amp; PSN</span>
              <span>iBwave Certified</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/telecom.jpg" alt="Telecommunications tower with antennas and microwave dishes" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Telecom
            </span>
          </div>
        </div>
      </section>
      {/* CORE COMPETENCIES */}
      <section className="comp" id="competencies">
        <div className="wrap">
          <div className="c-grid5 four" id="compGrid">
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
