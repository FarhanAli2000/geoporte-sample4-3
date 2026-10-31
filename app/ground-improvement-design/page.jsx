import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Ground Improvement Design | Geoporte',
  description:
    'Ground improvement design for soft and loose soils: dynamic compaction, vibro methods, stone columns, deep soil mixing, grouting, preloading and PVDs.',
  path: '/ground-improvement-design',
  image: 'https://geoporte.com.au/images/real/stone-columns-vibro.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="ground-improvement-design">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/stone-columns-vibro.jpg" alt="Vibro stone column installation for ground improvement" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Ground Improvement</span>
              </span>
              <span className="line">
                <span className="a">Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Design advice for improving weak ground before and beneath your project.</p>
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
              <h2 className="split">Ground Improvement Design</h2>
            </div>
            <p className="big rv">
              Geoporte’s specialists have <em>decades of experience</em> in providing design advice related to the ground improvement of
              granular and cohesive insitu soils as well as fill sites.
            </p>
            <div className="i-meta rv">
              <span>Granular &amp; cohesive soils</span>
              <span>Fill sites</span>
              <span>Soft ground</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/clay-core-auger.jpg" alt="Soft clay recovered on the auger during investigation" loading="lazy" />
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
              <h2 className="split">Optimizing Design And Constructability</h2>
            </div>
            <p className="rv a-note">
              Again, practical experience and commercial understanding are used in conjunction with the{' '}
              <em>most advanced computer modeling software and analytical techniques</em> to optimize both design and constructability
              outcomes.
            </p>
            <p className="rv">
              In coastal, estuarine or lake areas, areas of deep soft mud, loose sand and other weak soils can be present which require
              specific attention before construction of your project.
            </p>
            <p className="rv">
              It could be a greenfields site or an existing structure built on a substandard foundation. There are options for both types of
              ground conditions.
            </p>
            <div className="sec-head a-sub">
              <div className="cap">Techniques</div>
              <h2 className="split">Ground Improvement Techniques We Design</h2>
            </div>
            <p className="rv">
              A number of ground improvement techniques are available depending on the type of development and the nature of the weak ground
              underlying it, including but not limited to the following:
            </p>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Dynamic compaction
              </li>
              <li>
                <span className="n">02</span>Rapid Impact compaction
              </li>
              <li>
                <span className="n">03</span>Vibrocompaction
              </li>
              <li>
                <span className="n">04</span>Vibro-replacement (stone columns)
              </li>
              <li>
                <span className="n">05</span>Surcharging with or without PVDs
              </li>
              <li>
                <span className="n">06</span>Cement or lime stabilisation (either shallow, for roads, or deep, for bridge or building
                foundations)
              </li>
              <li>
                <span className="n">07</span>Deep soil mixing (DSM)
              </li>
              <li>
                <span className="n">08</span>Permeation grouting
              </li>
              <li>
                <span className="n">09</span>Pressure grouting
              </li>
              <li>
                <span className="n">10</span>Jet grouting
              </li>
              <li>
                <span className="n">11</span>Stone or sand columns
              </li>
              <li>
                <span className="n">12</span>Piling
              </li>
              <li>
                <span className="n">13</span>Deep compaction methods
              </li>
              <li>
                <span className="n">14</span>Preloading
              </li>
              <li>
                <span className="n">15</span>Geotextile reinforcement
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="ground-improvement-design" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
