import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Road Subgrade Assessment & Design | Geoporte',
  description:
    'Subgrade investigation and design parameters for flexible and rigid pavements, subgrade improvement and evaluation of existing roads for asphalt overlay.',
  path: '/road-subgrade-assessment-and-design',
  image: 'https://geoporte.com.au/images/real/aerial-road-straight-2.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="road-subgrade-assessment-and-design">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/aerial-road-straight-2.jpg" alt="Aerial view of a road and creek crossing being investigated" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Road Subgrade</span>
              </span>
              <span className="line">
                <span className="a">Assessment &amp; Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Subgrade investigation and interpretation for flexible and rigid pavement design.</p>
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
              <h2 className="split">Road Subgrade Assessment And Design</h2>
            </div>
            <p className="big rv">
              Pavement analysis and design are often carried out for the construction of new roads within new residential and industrial
              subdivisions; which may include, roundabouts, car parks, industrial hardstand areas, and bus stops. These may include{' '}
              <em>flexible and rigid (concrete) pavements</em>.
            </p>
            <div className="i-meta rv">
              <span>Flexible &amp; rigid pavements</span>
              <span>Subdivisions</span>
              <span>Asphalt overlay</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/rig-auger-closeup.jpg" alt="Auger drilling to assess subgrade conditions" loading="lazy" />
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
              <div className="cap">Subgrade assessment</div>
              <h2 className="split">Strength And Stiffness Parameters For Pavement Design</h2>
            </div>
            <p className="rv">
              At Geoporte, our specialists provide services related to scoping of ground investigations to assess pavement subgrade
              conditions and interpret the test data to come up with the required subgrade strength and stiffness parameters that the
              pavement designer requires to design the pavement.
            </p>
            <p className="rv">
              At times, in poor ground conditions our specialists have to recommend subgrade improvement options to improve strength and
              stiffness characteristics of sub-grade so that pavements do not fail or undergo excessive settlements.
            </p>
            <p className="rv a-note">
              Geoporte can also undertake <em>pavement evaluations on existing pavements</em> for assessment of road, pavement material and
              subgrade conditions and for the design of <em>asphalt overlay</em>.
            </p>
          </div>
          <SideNav group="geotechnical" current="road-subgrade-assessment-and-design" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
