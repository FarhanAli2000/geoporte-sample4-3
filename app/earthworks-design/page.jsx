import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Earthworks Design & AS3798 Testing | Geoporte',
  description:
    'Earthworks design and consulting: working platforms, compaction control, Level 1 and 2 AS3798 inspection and testing, expansive clays and residual soils.',
  path: '/earthworks-design',
  image: 'https://geoporte.com.au/images/real/airport-earthworks.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="earthworks-design">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/airport-earthworks.jpg" alt="Earthworks and pavement construction at an airfield" />
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
              <b>Earthworks Design</b>
            </div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Earthworks</span>
              </span>
              <span className="line">
                <span className="a">Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Creating suitable landforms and construction platforms for development.</p>
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
              <h2 className="split">Earthworks Design</h2>
            </div>
            <p className="big rv">
              Before construction, developers often require groundwork to create a suitable landform for their project. Sites may contain
              natural or man-made constraints to development, such as foundations from previous structures, or{' '}
              <em>geotechnically and environmentally unsuitable materials</em>. Reprofiling may also be required to provide suitable
              construction platforms.
            </p>
            <div className="i-meta rv">
              <span>AS3798 testing</span>
              <span>Working platforms</span>
              <span>Reuse of site materials</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/clay-sample-hand.jpg" alt="Clay sample recovered from an auger for classification" loading="lazy" />
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
              <div className="cap">Our approach</div>
              <h2 className="split">Cost-effective, sustainable earthworks.</h2>
            </div>
            <p className="rv a-note">
              Earthworks design identifies and specifies the required works to address these problems and to provide cost-effective and
              sustainable solutions that prioritise the <em>maximum, appropriate reuse of site materials</em>.
            </p>
            <p className="rv">
              Geoporte’s specialists provide an integrated team of earthworks design specialists applying a wide breadth of knowledge and
              experience to offer solutions to complex in-ground challenges.
            </p>
            <p className="rv">
              Geoporte offers services for sites with ground conditions or locations that prove particularly challenging, such as former
              landfills and cliff/ slope faces, as well as integrating the earthworks and infrastructure designs.
            </p>
            <p className="rv">
              We provide Earthworks consulting including Level 1 and Level 2 Sampling, Inspection &amp; Testing (AS3798), material
              compliance testing and detailed earthworks processes such as landfill capping or wetland construction.
            </p>
            <div className="sec-head a-sub">
              <div className="cap">Services</div>
              <h2 className="split">Geoporte provides the following services:</h2>
            </div>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Working Platform Design and Verification
              </li>
              <li>
                <span className="n">02</span>Compaction Control
              </li>
              <li>
                <span className="n">03</span>Buried Pipes
              </li>
              <li>
                <span className="n">04</span>Subgrade Assessment
              </li>
              <li>
                <span className="n">05</span>Specifications
              </li>
              <li>
                <span className="n">06</span>Expansive Clays
              </li>
              <li>
                <span className="n">07</span>Residual soils
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="earthworks-design" />
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
