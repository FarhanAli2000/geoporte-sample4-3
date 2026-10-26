import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/team';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Our Team | Chartered Engineers & Geologists | Geoporte',
  description:
    'Meet Geoporte’s chartered geotechnical, structural and civil engineers, engineering geologists and project staff with local and international experience.',
  path: '/our-team',
  image: 'https://geoporte.com.au/images/real/walking-geoporte-vests.jpg',
});

export default function Page() {
  return (
    <Site section="about" current="our-team">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/walking-geoporte-vests.jpg" alt="Geoporte engineers in branded vests walking a site" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Our</span>
              </span>
              <span className="line">
                <span className="a">Team</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Meet the engineers, geologists and project professionals behind Geoporte.</p>
            <a href="#team" className="pill pill-a magnetic">
              Meet the team <Arrow />
            </a>
          </div>
        </div>
      </section>
      {/* TEAM GRID */}
      <section className="team" id="team">
        <div className="wrap">
          <div className="t-head">
            <div className="sec-head">
              <div className="cap">Our Team</div>
              <h2 className="split">The specialists behind every design.</h2>
            </div>
            <p className="rv">
              Chartered engineers, geologists and project professionals with experience across Australia, New Zealand, the UK, Europe, the
              Middle East and Asia.
            </p>
          </div>
        </div>
      </section>
      {/* PROFILES */}
      <section className="profiles" id="profiles">
        <div className="wrap">
          <article className="prof" id="qaiser-hayat">
            <div className="p-ph">
              <img src="/images/team/qaiser-hayat.jpg" alt="Qaiser Hayat" loading="lazy" />
                          </div>
            <div className="p-tx rv">
              <h3>Qaiser Hayat</h3>
              <p className="p-role">Managing Director</p>
              <ul className="p-cred">
                <li>
                  MSc in Soil Mechanics and Engineering Seismology, BSc in Civil Engineering (Hons), MIEAust, CPEng, NER, APEC Engineer,
                  IntPE (Australia), RPEV (Victoria), RPEQ, CEng MICE (UK), PE (ID, USA), Auckland Council Producer Statement Author
                </li>
              </ul>
              <div className="p-bio">
                <p>
                  Qaiser Hayat is a Chartered Geotechnical Engineer with 25 years of experience in the design and management of civil and
                  geotechnical engineering projects. He is Managing Director and Principal Geotechnical Engineer at Geoporte Australia. Qaiser has
                  contributed as a geotechnical engineer to major infrastructure projects in Australia, New Zealand, United Kingdom, Middle
                  East, and Asia.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>
                  Geotechnical Design for Highway, Rail, Energy, Marine, Water, and Building Infrastructure — Retaining Walls, Slope
                  Stabilisation Works, Shallow and Deep Foundations, Earthworks Design, Road Subgrade Assessment, Ground Settlement
                  Analysis, Ground Improvement
                </li>
                <li>Earthquake Geotechnical Engineering</li>
                <li>Ground Investigation Scoping, Management and Interpretation</li>
                <li>Ground Risk Management (including Ground Risk Identification and Assessment)</li>
                <li>Forensic Analysis of Geotechnical Failures</li>
                <li>Leading Multi-Disciplinary Teams on Major Infrastructure Projects</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      {/* IN THE FIELD */}
      <section className="field" id="field">
        <div className="wrap">
          <div className="sec-head">
            <div className="cap">In the field</div>
            <h2 className="split">On site, in the room, on stage.</h2>
          </div>
          <div className="g-grid rv">
            <figure className="g-it big">
              <img
                src="/images/real/grove-of-honour-team.jpg"
                alt="Robinvale site investigation team with the Geoporte sign"
                loading="lazy"
              />
              <figcaption>Robinvale site investigation team with the Geoporte sign</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/geoporte-vests-drilling.jpg" alt="Geoporte engineers supervising drilling" loading="lazy" />
              <figcaption>Geoporte engineers supervising drilling</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/directors-site-visit.jpg" alt="Geoporte directors on a site visit" loading="lazy" />
              <figcaption>Geoporte directors on a site visit</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/core-logging-team.jpg" alt="Logging rock core with the drilling crew" loading="lazy" />
              <figcaption>Logging rock core with the drilling crew</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/office-team.jpg" alt="Back at the Geoporte office" loading="lazy" />
              <figcaption>Back at the Geoporte office</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/walking-geoporte-vests.jpg" alt="Walking a site in Geoporte vests" loading="lazy" />
              <figcaption>Walking a site in Geoporte vests</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/team-yellow-rig.jpg" alt="On site with the drilling rig" loading="lazy" />
              <figcaption>On site with the drilling rig</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/reviewing-drawings.jpg" alt="Reviewing drawings on site" loading="lazy" />
              <figcaption>Reviewing drawings on site</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/nz-site-visit.jpg" alt="Site visit in New Zealand" loading="lazy" />
              <figcaption>Site visit in New Zealand</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/award-ags.jpg" alt="Accepting an award at an Australian Geomechanics Society event" loading="lazy" />
              <figcaption>Accepting an award at an Australian Geomechanics Society event</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/conference-talk.jpg" alt="Presenting at a geotechnical industry event" loading="lazy" />
              <figcaption>Presenting at a geotechnical industry event</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/drone-wave-car.jpg" alt="Geoporte team waving to the drone" loading="lazy" />
              <figcaption>Geoporte team waving to the drone</figcaption>
            </figure>
            <figure className="g-it">
              <img src="/images/real/team-creek-site.jpg" alt="Geoporte team at a creek bank remediation site" loading="lazy" />
              <figcaption>Geoporte team at a creek bank remediation site</figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
