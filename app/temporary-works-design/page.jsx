import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Geotechnical Temporary Works Design | Geoporte',
  description:
    'Temporary works design for excavation retention, cut slopes, piling and crane platforms, cofferdams and hardstands, with construction stage monitoring.',
  path: '/temporary-works-design',
  image: 'https://geoporte.com.au/images/real/soil-nail-wall.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="temporary-works-design">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/soil-nail-wall.jpg" alt="Geoporte engineer at a soil-nailed excavation wall" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Temporary</span>
              </span>
              <span className="line">
                <span className="a">Works Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Geotechnical temporary works design for all types of engineering projects.</p>
            <a href="/contact-us" className="pill pill-a magnetic">
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
              <h2 className="split">Temporary Works Design</h2>
            </div>
            <p className="big rv">
              Many construction sites need temporary work in order to facilitate permanent works construction. Temporary works design is an
              area of specialist engineering and an <em>innovative, but rigorous approach</em> is required.
            </p>
            <div className="i-meta rv">
              <span>Excavation retention</span>
              <span>Working platforms</span>
              <span>Engineering Geological Model</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/dewatering-inspection.jpg" alt="Engineers inspecting a dewatering control panel" loading="lazy" />
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
              <h2 className="split">Tailored To Every Project And Site</h2>
            </div>
            <p className="rv">
              It is also an area of high risk, with failure of temporary access platforms observed far too often. Improper temporary works
              design can cause significant risks including the failure of temporary and permanent works and/or damage to adjacent premises.
            </p>
            <p className="rv">
              Geoporte provides geotechnical temporary works design for all types of engineering projects. Part of every package we deliver
              is listening to our clients to understand what is important for them and working with them to develop solutions that best meet
              their needs. We understand that each project and situation is different, and tailoring solutions that fit with the conditions
              and constraints. We evaluate options and alternatives and work with our clients to develop preferred options for delivery.
            </p>
            <p className="rv">
              The design process is far more than the analytical work. Our approach to temporary works design starts with an Engineering
              Geological Model and the approach for design. We will look for opportunities save on temporary works, such the use of
              risk-based criteria or short term design parameters, rather than always relying purely on standard approaches.
            </p>
            <div className="sec-head a-sub">
              <div className="cap">Capabilities</div>
              <h2 className="split">Our Capabilities Relating To Temporary Works Includes:</h2>
            </div>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Slope stability assessments
              </li>
              <li>
                <span className="n">02</span>Soil and rock cut slope support
              </li>
              <li>
                <span className="n">03</span>Excavation retention (e.g. soil nails, piles, sheet piles, retaining walls, anchors)
              </li>
              <li>
                <span className="n">04</span>Foundations (e.g. tower cranes, scaffolding)
              </li>
              <li>
                <span className="n">05</span>Cofferdams and earth embankment dams
              </li>
              <li>
                <span className="n">06</span>Working platforms for piling rigs and cranes
              </li>
              <li>
                <span className="n">07</span>Hardstands and construction platforms
              </li>
              <li>
                <span className="n">08</span>Earthworks and embankments, including steepened slopes
              </li>
              <li>
                <span className="n">09</span>Site investigations and ground model development
              </li>
              <li>
                <span className="n">10</span>Construction stage monitoring, assessment and advice
              </li>
            </ul>
            <p className="rv a-note">
              Where required, we will engage with other <em>specialist design disciplines</em> to provide as complete temporary works design
              service.
            </p>
          </div>
          <SideNav group="geotechnical" current="temporary-works-design" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
