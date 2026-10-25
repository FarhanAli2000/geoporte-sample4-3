import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Desktop Studies & Geohazard Assessment | Geoporte',
  description:
    'Desktop geotechnical, geological and geomorphological studies and geohazard assessment to guide feasibility, planning and acquisition of infrastructure sites.',
  path: '/desktop-studies-and-geohazard-geotechnical-assessment',
  image: 'https://geoporte.com.au/images/real/drilling-red-soil.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="desktop-studies-and-geohazard-geotechnical-assessment">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/drilling-red-soil.jpg" alt="Engineers logging at a drilling rig on a regional site" />
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
              <b>Desktop Studies</b>
            </div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Desktop Studies</span>
              </span>
              <span className="line">
                <span className="a">&amp; Geohazard Assessment</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Desktop studies and geohazard geotechnical assessment for planning and acquisition.</p>
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
              <h2 className="split">Desktop Studies and Geohazard Geotechnical Assessment</h2>
            </div>
            <p className="big rv">
              Geoporte carries out <em>Desktop Geotechnical, Geological &amp; Geomorphological Studies</em> including development of
              feasibility studies, site reconnaissance and other high level information to assist with planning or acquisition stages.
            </p>
            <div className="i-meta rv">
              <span>Feasibility studies</span>
              <span>Geohazards</span>
              <span>Monitoring</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/creek-bank-site.jpg" alt="Creek bank site assessed for geohazards" loading="lazy" />
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
              <div className="cap">Desktop studies</div>
              <h2 className="split">Geohazard assessment from the start.</h2>
            </div>
            <p className="rv">
              A detailed geohazard assessment is carried out as part of the desktop study and recommendations are provided related to
              significant geotechnical risks or future investigations to understand geohazards and associated risks.
            </p>
            <div className="sec-head a-sub">
              <div className="cap">Geohazards</div>
              <h2 className="split">Changing and unstable geologic conditions.</h2>
            </div>
            <p className="rv">
              Bridges, dams, landfills, tunnels, transmission lines, pipelines and other large structures often stretch across many types of
              terrain, cross watercourses, and encounter changing and unstable geologic conditions, called geohazards. Whether naturally
              occurring or human-triggered, geohazards can cause serious damage to infrastructure and significant delays in operation and
              sometimes interfere with the remediation of important sites.
            </p>
            <p className="rv a-note">
              Operators turn to Geoporte to assess and manage geohazards to critical infrastructure. We offer them expertise in{' '}
              <em>
                geotechnical engineering, earthquake engineering, geological engineering and rock mechanics, geology, seismology, and remote
                sensing
              </em>{' '}
              to help avoid geological hazards and mitigate their consequences.
            </p>
            <div className="sec-head a-sub">
              <div className="cap">Our approach</div>
              <h2 className="split">Identify, characterize, classify.</h2>
            </div>
            <p className="rv">
              We identify, characterize, and classify threats to determine whether and where mitigation and monitoring are needed. This
              three-phase approach allows us to scale assessments appropriately, focusing time and money on the most threatened areas and
              sites to prioritize work that will have the biggest impact.
            </p>
            <p className="rv">
              Following assessment, mitigation and monitoring plans are designed and implemented at sites where they are determined
              necessary. Even after projects conclude, we help clients protect their assets by monitoring ground and pipe movement with
              strain gauges, inclinometers, and monitoring markers. We can also focus on multiple hazard locations at once by scanning a
              region for indications of newly formed hazards.
            </p>
          </div>
          <SideNav group="geotechnical" current="desktop-studies-and-geohazard-geotechnical-assessment" />
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
