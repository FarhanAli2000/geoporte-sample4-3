import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/project-control';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Project Control Services | Cost & Schedule | Geoporte',
  description:
    'Project controls for civil projects: cost estimating, Primavera P6 scheduling, risk management, change control, earned value management and reporting.',
  path: '/project-control-services',
  image: 'https://geoporte.com.au/images/real/reviewing-drawings.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="project-control-services">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/reviewing-drawings.jpg" alt="Geoporte engineers reviewing drawings on site" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Project</span>
              </span>
              <span className="line">
                <span className="a">Controls</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Geoporte provides project control services specializing in the civil engineering sector.</p>
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
              <div className="cap">Our Services</div>
              <h2 className="split">Optimize performance, mitigate risk.</h2>
            </div>
            <p className="big rv">
              We offer comprehensive solutions to optimize project performance, mitigate risks, and ensure the{' '}
              <em>timely and cost-effective completion</em> of civil engineering projects.
            </p>
            <div className="i-meta rv">
              <span>Scheduling</span>
              <span>Cost management</span>
              <span>Risk &amp; quality control</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/office-team.jpg" alt="Geoporte team in the office" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Project Controls
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
      {/* CAPABILITIES */}
      <section className="caps" id="capabilities">
        <div className="wrap">
          <div className="sec-head">
            <div className="cap">Capabilities</div>
            <h2 className="split">Planning, cost and earned value control.</h2>
          </div>
          <div className="k-grid" id="kGrid" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
