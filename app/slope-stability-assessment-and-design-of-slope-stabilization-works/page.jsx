import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Slope Stability Assessment & Stabilisation | Geoporte',
  description:
    'Slope stability risk assessments for residential lots and developments, including Landslide Hazard and Steep Land Overlay areas, and stabilisation design.',
  path: '/slope-stability-assessment-and-design-of-slope-stabilization-works',
  image: 'https://geoporte.com.au/images/real/aerial-creek-team.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="slope-stability-assessment-and-design-of-slope-stabilization-works">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/aerial-creek-team.jpg" alt="Geoporte engineers assessing a collapsed creek bank" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Slope Stability</span>
              </span>
              <span className="line">
                <span className="a">Assessment &amp; Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Slope stability assessment and design of slope stabilization works.</p>
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
              <h2 className="split">Slope Stability Assessment</h2>
            </div>
            <p className="big rv">
              Our geotechnical engineers and geologists have extensive experience in planning and completing <em>slope risk assessments</em>{' '}
              for residential lots, both on a singular lot and large scale development basis.
            </p>
            <div className="i-meta rv">
              <span>Slope risk assessment</span>
              <span>Residential lots</span>
              <span>Large scale developments</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img
              src="/images/real/sloping-backyard.jpg"
              alt="Residential backyard on sloping ground with a timber retaining wall"
              loading="lazy"
            />
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
              <div className="cap">Planning &amp; approvals</div>
              <h2 className="split">Building on sloping ground.</h2>
            </div>
            <p className="rv">
              If you are building or planning a new residence, or renovation to an existing property on sloping ground, local planning
              guidelines may require a slope stability assessment be completed to assess the stability of the site. Stability Assessments
              consider the risks associated with the site with respect to the proposed development, ground slope, geology and drainage.
            </p>
            <p className="rv a-note">
              Stability Risk Assessments are mandatory if the planned work is to be undertaken within Council’s <em>Landslide Hazard</em> or{' '}
              <em>Steep Land Overlay</em> areas.
            </p>
          </div>
          <SideNav group="geotechnical" current="slope-stability-assessment-and-design-of-slope-stabilization-works" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
