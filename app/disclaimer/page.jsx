import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/legal';
import SideNav from '@/components/SideNav';
import Contact from '@/components/Contact';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Disclaimer | Geoporte',
  description:
    'Information on the Geoporte website is general in nature and is not engineering or professional advice. Read our full website disclaimer.',
  path: '/disclaimer',
  image: 'https://geoporte.com.au/images/real/team-meeting.jpg',
});

export default function Page() {
  return (
    <Site>
      {/* PAGE HERO */}
      <section className="phero lg-hero" id="top">
        <div className="phero-media" id="pheroMedia">
          <img src="/images/real/team-meeting.jpg" alt="Geoporte engineers in a project meeting" />
        </div>
        <div className="wrap phero-in">
          <div>
            <div className="crumb" id="crumb">
              <a href="/">Home</a>
              <i />
              <b>Disclaimer</b>
            </div>
            <h1 id="pTitle">
              <span className="line">
                <span>Website</span>
              </span>
              <span className="line">
                <span className="a">Disclaimer</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>General information only. Not engineering advice.</p>
            <a href="#contact" className="pill pill-a magnetic">
              Contact us <Arrow />
            </a>
          </div>
        </div>
      </section>
      {/* LEGAL */}
      <section className="art legal" id="article">
        <div className="wrap a-grid">
          <div className="a-body lg-body">
            <p className="lg-upd">Last updated: 23 October 2026</p>
            <p className="lg-lead">The information on this website is provided by Geoporte as general information only.</p>
            <h2 className="lg-h">General information only</h2>
            <p>
              Content on this website, including service descriptions, project summaries, publications and images, is general in nature. It
              is not engineering, geotechnical or other professional advice, and it should not be relied on for any design, construction or
              investment decision.
            </p>
            <h2 className="lg-h">Seek specific advice</h2>
            <p>
              Every site and project is different. Before acting on any information, you should obtain advice specific to your circumstances
              from a suitably qualified professional. Geoporte provides advice only under a written engagement.
            </p>
            <h2 className="lg-h">Accuracy</h2>
            <p>
              We take care to keep this website accurate and up to date, but we make no representation or warranty that the information is
              complete, current or free from errors. Project descriptions and images are illustrative and may not reflect the final scope of
              works.
            </p>
            <h2 className="lg-h">Liability</h2>
            <p>
              To the extent permitted by law, Geoporte excludes all liability for any loss or damage arising from the use of, or reliance
              on, information on this website.
            </p>
            <h2 className="lg-h">Project references</h2>
            <p>
              Some projects listed on this website were delivered by Geoporte’s specialist staff, including through previous roles and in
              collaboration with other organisations. Names of clients, projects and third parties are used for identification only and do
              not imply endorsement.
            </p>
            <h2 className="lg-h">Contact</h2>
            <p>
              If you have questions about this disclaimer, please contact us at{' '}
              <a href="mailto:enquiries@geoporte.com.au">enquiries@geoporte.com.au</a>.
            </p>
            <h2 className="lg-h">Contact us</h2>
            <p>
              Geoporte
              <br />
              Tower 5, Collins Square, 727 Collins Street, Melbourne VIC 3008, Australia
              <br />
              Email: <a href="mailto:enquiries@geoporte.com.au">enquiries@geoporte.com.au</a>
              <br />
              Phone: <a href="tel:+61431554626">+61 (0) 431 55 4626</a>
            </p>
          </div>
          <SideNav group="legal" current="disclaimer" />
        </div>
      </section>
      {/* CONTACT */}
      <Contact />
      <PageScript />
    </Site>
  );
}
