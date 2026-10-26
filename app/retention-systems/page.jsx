import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Retaining Wall & Retention Systems Design | Geoporte',
  description:
    'Design and proof engineering of sheet piled, diaphragm, bored pile and gravity retaining walls based on robust soil-structure interaction analysis.',
  path: '/retention-systems',
  image: 'https://geoporte.com.au/images/real/soil-nail-wall-discussion.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="retention-systems">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/soil-nail-wall-discussion.jpg" alt="Engineers discussing a soil-nailed wall on site" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Retention</span>
              </span>
              <span className="line">
                <span className="a">Systems</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Design services for various types of retention systems.</p>
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
              <h2 className="split">Retention Systems</h2>
            </div>
            <p className="big rv">
              Geoporte provides design services for various types of retention systems. Our geotechnical knowledge combined with extensive
              practical experience enables us to apply a real world understanding of <em>soil-structure interaction</em> and apply this to
              the design of complex retention systems.
            </p>
            <div className="i-meta rv">
              <span>Soil-structure interaction</span>
              <span>Design</span>
              <span>Proof engineering</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/gabion-wall-design.jpg" alt="Typical gabion retaining wall design section" loading="lazy" />
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
              <div className="cap">Design &amp; proof engineering</div>
              <h2 className="split">Safe, cost-effective retention systems.</h2>
            </div>
            <p className="rv">
              We design safe and cost-effective retention systems based on robust analyses and sound judgment. We provide design and proof
              engineering services for the following types of retention systems:
            </p>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Sheet piled walls
              </li>
              <li>
                <span className="n">02</span>Diaphragm walls
              </li>
              <li>
                <span className="n">03</span>Bored pile walls
              </li>
              <li>
                <span className="n">04</span>Gravity retaining walls
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="retention-systems" />
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
