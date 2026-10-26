import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/basic';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
import { ArrowDown } from '@/components/icons';
import { FEATURED_PROJECTS, SECTOR_DETAILS, pad } from '@/lib/home-data';
import { GEOTECHNICAL, SERVICES } from '@/lib/nav';
import '@/styles/pages.css';
import '@/styles/sectors.css';

export const metadata = pageMeta({
  title: 'Sectors | Transport, Building, Water, Ports & Energy | Geoporte',
  description:
    'Geoporte engineering across transportation, building, water, ports and marine, and energy infrastructure in Australia and New Zealand.',
  path: '/sectors',
  image: 'https://geoporte.com.au/images/real/marine-port-aerial.jpg',
});

const SERVICE_LABEL = Object.fromEntries([...SERVICES, ...GEOTECHNICAL].filter(([slug]) => slug));

export default function Page() {
  return (
    <Site section="sectors" current="sectors">
      {/* PAGE HERO */}
      <section className="phero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/marine-port-aerial.jpg" alt="Aerial view of a port and land reclamation project" />
        </div>
        <div className="wrap phero-in">
          <div>
            <h1 id="pTitle">
              <span className="line">
                <span>Where our</span>
              </span>
              <span className="line">
                <span>
                  work <span className="a">matters.</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>Five sectors, one integrated team of civil, geotechnical and structural engineers.</p>
            <a href="#sectors-list" className="pill pill-a magnetic">
              Explore sectors <ArrowDown />
            </a>
          </div>
        </div>
      </section>
      {/* SECTORS */}
      <div id="sectors-list">
        {SECTOR_DETAILS.map((s, i) => {
          const projects = FEATURED_PROJECTS.filter((p) => s.projects.includes(p.sector));
          return (
            <section className="intro sector" id={s.title.toLowerCase().replace(/[^a-z]+/g, '-')} key={s.title}>
              <div className="wrap i-grid">
                <div className="i-copy">
                  <div className="sec-head">
                    <div className="cap">
                      <span className="num">{pad(i + 1)}</span>Sector
                    </div>
                    <h2 className="split">{s.title}</h2>
                  </div>
                  <p className="big rv">{s.detail}</p>
                  <div className="s-label rv">Related services</div>
                  <div className="i-meta rv">
                    {s.services.map((slug) => (
                      <a key={slug} href={'/' + slug}>
                        {SERVICE_LABEL[slug]}
                      </a>
                    ))}
                  </div>
                  {projects.length > 0 && (
                    <>
                      <div className="s-label rv">Selected projects</div>
                      <ul className="s-projects rv">
                        {projects.map((p) => (
                          <li key={p.title}>
                            <span>
                              {p.title} <small>· {p.loc}</small>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className="i-media rv">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                  <span className="lab">
                    <b>Geoporte</b> · {s.title}
                  </span>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      {/* ONE TEAM */}
      <OneTeamBand />
      {/* CONTACT */}
      <Contact />
      <PageScript />
    </Site>
  );
}
