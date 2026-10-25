import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Geotechnical Site Investigation & Reporting | Geoporte',
  description:
    'Planning, supervision and reporting of geotechnical site investigations: drilling, sampling, test pits, in situ testing, laboratory testing and seismic surveys.',
  path: '/site-investigation-planning-and-reporting',
  image: 'https://geoporte.com.au/images/real/oval-drilling.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="site-investigation-planning-and-reporting">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/oval-drilling.jpg" alt="Geotechnical drilling rig and crew on a sports oval" />
        </div>
        <div className="wrap phero-in">
          <div>
            <div className="crumb" id="crumb">
              <a href="/">Home</a>
              <i />
              <a href="/#services">Our Services</a>
              <i />
              <a href="/#services">Geotechnical</a>
              <i />
              <b>Site Investigation</b>
            </div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Site Investigation</span>
              </span>
              <span className="line">
                <span className="a">Planning &amp; Reporting</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Surface and subsurface exploration before your project begins.</p>
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
              <h2 className="split">Site Investigation Planning and Reporting</h2>
            </div>
            <p className="big rv">
              Our geotechnical engineers and geologists have extensive experience in planning and executing site investigations. It is
              imperative to obtain an understanding of the physical properties of soil earthworks and foundations, through{' '}
              <em>surface and subsurface exploration</em> prior to commencing your project.
            </p>
            <div className="i-meta rv">
              <span>Planning</span>
              <span>Field &amp; lab testing</span>
              <span>Reporting</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/soil-sampling.jpg" alt="Geoporte engineer logging and storing soil samples" loading="lazy" />
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
              <div className="cap">Methods</div>
              <h2 className="split">The methods we use to obtain this information include:</h2>
            </div>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Drilling
              </li>
              <li>
                <span className="n">02</span>Soil sampling
              </li>
              <li>
                <span className="n">03</span>Laboratory testing
              </li>
              <li>
                <span className="n">04</span>Test pitting
              </li>
              <li>
                <span className="n">05</span>Trenching
              </li>
              <li>
                <span className="n">06</span>Boring
              </li>
              <li>
                <span className="n">07</span>In situ tests
              </li>
              <li>
                <span className="n">08</span>Seismic investigations
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="site-investigation-planning-and-reporting" />
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
