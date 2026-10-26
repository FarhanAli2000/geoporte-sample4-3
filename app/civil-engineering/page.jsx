import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/civil-engineering';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Civil Engineering Design Services | Geoporte',
  description:
    'Practical, sustainable civil engineering design: earthworks, roads, pavements, stormwater drainage, culverts and water infrastructure, concept to construction.',
  path: '/civil-engineering',
  image: 'https://geoporte.com.au/images/real/crane-excavation-dewatering.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="civil-engineering">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/crane-excavation-dewatering.jpg" alt="Crawler crane and dewatering pumps at a civil excavation site" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Civil</span>
              </span>
              <span className="line">
                <span className="a">Engineering</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>
              Geoporte’s Civil Design team works together with our clients, architects, contractors, and the government to provide and
              deliver designs that focus on functionality, constructability, and well-planning, while keeping in mind the safety and the
              project being economical.
            </p>
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
              <h2 className="split">High-quality design, economically delivered.</h2>
            </div>
            <p className="big rv">
              Geoporte’s Civil design team have vast expertise and a comprehensive range of experience across{' '}
              <em>transport, water and building infrastructure</em> projects. Our goal is to deliver design outputs that are high-quality
              yet economical for projects that ranges from straightforward to complicated and challenging.
            </p>
            <div className="i-meta rv">
              <span>Transport</span>
              <span>Water</span>
              <span>Building infrastructure</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/aerial-road-rail-bridge.jpg" alt="Aerial view of road and rail bridges over a creek" loading="lazy" />
            <span className="lab">
              <b>Geoporte</b> · Civil Design
            </span>
          </div>
        </div>
      </section>
      {/* DELIVERABLES */}
      <section className="deliver" id="deliver">
        <div className="wrap">
          <div className="d-head">
            <div className="sec-head">
              <div className="cap">What we deliver</div>
              <h2 className="split">Our team can effectively deliver projects such as:</h2>
            </div>
            <p className="rv">
              Twenty project types, from temporary works and earthworks through to waterway rehabilitation and stormwater infrastructure.
            </p>
          </div>
          <ul className="d-grid" id="dGrid" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
