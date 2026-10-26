import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Geotechnical Numerical Modelling | PLAXIS & FEM | Geoporte',
  description:
    'Advanced 2D and 3D numerical modelling of complex geotechnical problems by experienced engineers, for practical and cost-effective design solutions.',
  path: '/numerical-modelling',
  image: 'https://geoporte.com.au/images/real/aerial-drilling-close.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="numerical-modelling">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/aerial-drilling-close.jpg" alt="Aerial view of a geotechnical drilling crew at work" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Numerical</span>
              </span>
              <span className="line">
                <span className="a">Modelling</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Numerical analysis for complex geotechnical problems.</p>
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
              <h2 className="split">Numerical Modelling</h2>
            </div>
            <p className="big rv">
              Numerical modelling of geotechnical problems can be highly beneficial if is undertaken with significant care. Incorporating
              geological models into state-of-the-art numerical analysis must be done by experienced engineers who have a robust
              understanding of <em>soil characteristics and software limitations</em> so the outputs can be assessed in a meaningful way.
            </p>
            <div className="i-meta rv">
              <span>Geological models</span>
              <span>Numerical analysis</span>
              <span>Experienced engineers</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img
              src="/images/real/model-slope-plaxis.jpg"
              alt="PLAXIS 2D slope stability model showing total displacements"
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
              <div className="cap">Our approach</div>
              <h2 className="split">Numerical analysis, used with care.</h2>
            </div>
            <p className="rv a-note">
              At Geoporte, we utilise Numerical Analysis in conjunction with other methods to represent{' '}
              <em>practical and cost-effective solutions</em> for complex geotechnical problems.
            </p>
          </div>
          <SideNav group="geotechnical" current="numerical-modelling" />
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
