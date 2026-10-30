import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/geotechnical';
import SideNav from '@/components/SideNav';
import OneTeamBand from '@/components/OneTeamBand';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Ground Settlement Analysis (Static & Seismic) | Geoporte',
  description:
    'Analysis, design and monitoring for ground settlement and subsidence, including consolidation, creep and differential settlement, and seismic effects.',
  path: '/ground-settlement-static-and-seismic',
  image: 'https://geoporte.com.au/images/real/street-drilling.jpg',
});

export default function Page() {
  return (
    <Site section="services" current="ground-settlement-static-and-seismic">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/street-drilling.jpg" alt="Drilling investigation beside a residential street" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle" className="h1-sm">
              <span className="line">
                <span>Ground Settlement</span>
              </span>
              <span className="line">
                <span className="a">Static &amp; Seismic</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Identification, analysis, design and monitoring of solutions for ground settlement.</p>
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
              <h2 className="split">Ground Settlement (Static and Seismic)</h2>
            </div>
            <p className="big rv">
              In geotechnical engineering, settlement is defined as the <em>vertical movement of the ground</em>, generally caused by
              changes in stresses within the earth.
            </p>
            <div className="i-meta rv">
              <span>Consolidation &amp; creep</span>
              <span>Differential settlement</span>
              <span>Seismic events</span>
            </div>
          </div>
          <div className="i-media" id="iMedia">
            <img src="/images/real/wall-crack-settlement.jpg" alt="Diagonal settlement cracking in a building wall" loading="lazy" />
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
              <div className="cap">Settlement &amp; subsidence</div>
              <h2 className="split">Why the ground moves</h2>
            </div>
            <p className="rv">
              Subsidence is a term often used to describe ‘caving in’ or sinking of the ground, that may not be associated with changes in
              soil stresses. Excessive settlement or subsidence can lead to distortion and damage to structures, services and infrastructure
              that are founded on the material subject to the movement. The settlement can be almost instantaneous or can take years or
              decades to occur, depending on the underlying soil conditions and cause of the movement.
            </p>
            <p className="rv">
              Settlement is most likely to occur when increased vertical stresses are applied to the ground on or above soft or loose soil
              strata. It is also possible that lowering the ground water, migration of soil fines, deep voids, underground excavation for
              tunnels, induced ground vibrations and seismic events will cause significant settlement.
            </p>
            <div className="sec-head a-sub">
              <div className="cap">Our approach</div>
              <h2 className="split">Ground models, risk and solutions</h2>
            </div>
            <p className="rv">
              Development of an appropriate ground model requires investigation that extends to an adequate depth, identifies any voids,
              uncontrolled fill, soft clay ground or loose granular material that may be cause unacceptable settlement or subsidence. Where
              such materials are identified it is essential that the geotechnical risks, as well as the potential causes and consequences of
              settlement, are considered and adequately addressed.
            </p>
            <p className="rv">
              In some circumstances it may be necessary to carry out ground improvement works, to strengthen, stiffen, over consolidate and
              densify the ground, to reduce the magnitude of the likely settlement. In other situations, it may be necessary to incorporate
              deep foundations, or to underpin existing or new structures, such that the foundation stresses are imposed below the ground
              strata that is subject to settlement.
            </p>
            <p className="rv">
              In areas of deep soft, recently deposited, clayey strata there is a significant risk of short-medium term consolidation
              settlement, associated with any increase if vertical effective stress, as well as long term secondary, or creep, settlement
              that can occur without the application of increased vertical stresses. It must also be remembered that, if the depth of soft
              or loose material varies significantly in plan location, such as where recent paleo-channels are encountered, there will be
              significant differential settlements at the surface and associated lateral ground movements.
            </p>
            <p className="rv a-note">
              The Geoporte team has significant experience in the <em>identification, analysis, design, specification and monitoring</em> of
              project solutions associated with high ground settlements. We can help identify and resolve project challenges associated with
              construction works, and existing structures or services, that are impacted by potential ground settlements and identify
              suitable remediation measures to help manage this aspect of geotechnical risk.
            </p>
          </div>
          <SideNav group="geotechnical" current="ground-settlement-static-and-seismic" />
        </div>
      </section>
      {/* ONE TEAM */}
      <OneTeamBand />
      <PageScript />
    </Site>
  );
}
