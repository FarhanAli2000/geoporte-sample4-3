import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Land & Marine Reclamation Works Design | Geoporte',
  description:
    'Design of land and marine reclamation works: ground investigation scoping, performance specifications, ground improvement and compaction compliance testing.',
  path: '/reclamation-works-design',
  image: 'https://geoporte.com.au/images/real/vibro-crane-reclamation.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="reclamation-works-design">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/vibro-crane-reclamation.jpg" alt="Crane-mounted vibro rig on a reclamation site" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Reclamation</span>
              </span>
              <span className="line">
                <span className="a">Works Design</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Specialist design of land and marine reclamation works.</p>
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
              <h2 className="split">Reclamation Works Design</h2>
            </div>
            <p className="big rv">
              Geoporte provides specialist services for design of <em>land and marine reclamation works</em> including scoping of
              preliminary ground investigations, performance based specifications, ground improvement design and pre and post compaction
              ground investigations and interpretation of test results to verify compliance.
            </p>
            <div className="i-meta rv">
              <span>Land reclamation</span>
              <span>Marine reclamation</span>
              <span>Compliance testing</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/vibro-crane-seaside.jpg" alt="Vibro compaction rig on reclaimed land by the sea" loading="lazy" />
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
              <h2 className="split">Land And Marine Reclamation</h2>
            </div>
            <ul className="a-list rv">
              <li>
                <span className="n">01</span>Scoping of preliminary ground investigations
              </li>
              <li>
                <span className="n">02</span>Performance based specifications
              </li>
              <li>
                <span className="n">03</span>Ground improvement design
              </li>
              <li>
                <span className="n">04</span>Pre and post compaction ground investigations
              </li>
              <li>
                <span className="n">05</span>Interpretation of test results to verify compliance
              </li>
            </ul>
          </div>
          <SideNav group="geotechnical" current="reclamation-works-design" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
