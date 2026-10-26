import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Pavement Design | CIRCLY & Austroads | Geoporte',
  description:
    'Pavement design for residential and commercial roads and arterials, with CIRCLY analysis and compliance with Austroads, VicRoads and council guidelines.',
  path: '/pavement-profile-design',
  image: 'https://geoporte.com.au/images/real/roadside-drilling.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="pavement-profile-design">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/roadside-drilling.jpg" alt="Geotechnical drilling on a road with traffic management" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Pavement Profile</span>
              </span>
              <span className="line">
                <span className="a">Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Pavement design for residential and commercial roads, including major arterials.</p>
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
              <h2 className="split">Pavement Profile Design</h2>
            </div>
            <p className="big rv">
              Geoporte provides design for residential or commercial roads including major arterials, <em>CIRCLY analysis</em> and
              compliance to Austroads Guide to Pavement Technology, VicRoads and Municipal Guidelines with capabilities to assist major road
              widening and/or reconstruction projects.
            </p>
            <div className="i-meta rv">
              <span>CIRCLY</span>
              <span>Austroads</span>
              <span>VicRoads</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/dcp-test.jpg" alt="Dynamic cone penetrometer test to assess subgrade strength" loading="lazy" />
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
              <div className="cap">Scope of services</div>
              <h2 className="split">Design, analysis and compliance.</h2>
            </div>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Residential or commercial roads including major arterials
              </li>
              <li>
                <span className="n">02</span>CIRCLY analysis
              </li>
              <li>
                <span className="n">03</span>Compliance to Austroads Guide to Pavement Technology
              </li>
              <li>
                <span className="n">04</span>VicRoads and Municipal Guidelines
              </li>
              <li>
                <span className="n">05</span>Major road widening and/or reconstruction projects
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="pavement-profile-design" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
