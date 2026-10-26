import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Pipeline Load Impact Assessment | Geoporte',
  description:
    'Numerical assessment of fill and vehicle loading on existing water and fuel pipelines, with design of protection works where damage is predicted.',
  path: '/pipelines',
  image: 'https://geoporte.com.au/images/real/aerial-drilling-bridge.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="pipelines">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/aerial-drilling-bridge.jpg" alt="Aerial view of a drilling rig beside a road bridge" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Pipelines</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Load impact assessment and protection works design for existing pipelines.</p>
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
              <h2 className="split">Pipelines</h2>
            </div>
            <p className="big rv">
              At Geoporte, we provide services related to <em>impact assessment of loads on existing pipelines</em> and provide design of
              protection works in case the assessment shows potential damage to the existing pipelines.
            </p>
            <div className="i-meta rv">
              <span>Water &amp; fuel pipelines</span>
              <span>Numerical modelling</span>
              <span>Protection works</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/model-pipes.jpg" alt="Numerical model of ground movement around buried pipes" loading="lazy" />
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
              <div className="cap">Load impact assessment</div>
              <h2 className="split">Protecting existing water and fuel pipelines.</h2>
            </div>
            <p className="rv a-note">
              We utilise <em>state of the art numerical techniques</em> to assess load impact on existing water and fuel pipelines due to
              placement of additional fill or vehicular loading.
            </p>
          </div>
          <SideNav group="geotechnical" current="pipelines" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
