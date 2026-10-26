import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Seismic Hazard Analysis & Earthquake Design | Geoporte',
  description:
    'Probabilistic seismic hazard analysis, liquefaction studies, detailed seismic assessment and earthquake design of foundations, walls, earthworks and slopes.',
  path: '/seismic-hazard-analyses-and-earthquake-geotechnical-design',
  image: 'https://geoporte.com.au/images/real/aerial-drilling-2.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="seismic-hazard-analyses-and-earthquake-geotechnical-design">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/aerial-drilling-2.jpg" alt="Drilling rig and support truck beside a road bridge" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Seismic Hazard</span>
              </span>
              <span className="line">
                <span className="a">&amp; Earthquake Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Seismic hazard analyses and earthquake geotechnical design.</p>
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
              <h2 className="split">Seismic hazard analyses</h2>
            </div>
            <p className="big rv">
              Geoporte provides seismic hazard analysis for{' '}
              <em>land infrastructure, buildings, marine infrastructure, energy infrastructure and mining projects</em>.
            </p>
            <div className="i-meta rv">
              <span>PSHA</span>
              <span>Liquefaction</span>
              <span>Seismic design</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/model-excavation.jpg" alt="3D finite element model of an excavation" loading="lazy" />
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
              <div className="cap">Earthquake geotechnical engineering</div>
              <h2 className="split">Liquefaction and seismic design.</h2>
            </div>
            <p className="rv">
              Our earthquake geotechnical engineers provide advices related to liquefaction of site as well as carried out earthquake design
              of foundations, retaining walls, earthworks and slopes.
            </p>
            <p className="rv">We provide the following services:</p>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Probabilistic Seismic hazard analysis
              </li>
              <li>
                <span className="n">02</span>Liquefaction studies
              </li>
              <li>
                <span className="n">03</span>Detailed seismic assessment (DSA)
              </li>
              <li>
                <span className="n">04</span>Seismic design of foundations, retaining walls, earthworks and slopes
              </li>
              <li>
                <span className="n">05</span>Risk analysis of existing and new constructions and facilities in seismic areas
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="seismic-hazard-analyses-and-earthquake-geotechnical-design" />
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
