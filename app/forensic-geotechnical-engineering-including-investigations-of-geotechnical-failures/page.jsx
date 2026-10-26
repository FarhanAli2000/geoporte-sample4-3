import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Forensic Geotechnical Engineering | Geoporte',
  description:
    'Investigation of settlement, cracking, movement and collapse in foundations and geotechnical structures, with cause evaluation and repair recommendations.',
  path: '/forensic-geotechnical-engineering-including-investigations-of-geotechnical-failures',
  image: 'https://geoporte.com.au/images/real/building-cracks.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="forensic-geotechnical-engineering-including-investigations-of-geotechnical-failures">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/building-cracks.jpg" alt="Structural cracking in a building investigated for geotechnical failure" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Forensic Geotechnical</span>
              </span>
              <span className="line">
                <span className="a">Engineering</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Including investigations of geotechnical failures.</p>
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
              <div className="cap">Geotechnical Engineering</div>
              <h2 className="split">Forensic Geotechnical Engineering</h2>
            </div>
            <p className="big rv">
              Geoporte’s experienced personnel investigates <em>damage, deterioration, and collapse</em> in any geotechnical structure. We
              provide a full range of forensic geotechnical and foundation engineering services including evaluating of the cause of damage
              and developing repair recommendations.
            </p>
            <div className="i-meta rv">
              <span>Failure investigation</span>
              <span>Cause evaluation</span>
              <span>Repair recommendations</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/crack-closeup.jpg" alt="Close-up of a wide wall crack being measured" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Geotechnical
            </span>
          </div>
        </div>
      </section>
      {/* ARTICLE */}
      <section className="art" id="article">
        <div className="wrap a-grid">
          <div className="a-body">
            <div className="sec-head">
              <div className="cap">Causes of damage</div>
              <h2 className="split">Different types of damage can occur in a geotechnical structure or a foundation due to:</h2>
            </div>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Settlement of structures
              </li>
              <li>
                <span className="n">02</span>Expansive soil
              </li>
              <li>
                <span className="n">03</span>Lateral movement
              </li>
              <li>
                <span className="n">04</span>Erosion
              </li>
              <li>
                <span className="n">05</span>Deterioration
              </li>
              <li>
                <span className="n">06</span>Bearing capacity failures
              </li>
              <li>
                <span className="n">07</span>Shrinkage cracking of concrete foundations
              </li>
              <li>
                <span className="n">08</span>Groundwater
              </li>
              <li>
                <span className="n">09</span>Other causes
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="forensic-geotechnical-engineering-including-investigations-of-geotechnical-failures" />
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
