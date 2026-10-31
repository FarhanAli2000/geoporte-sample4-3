import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/basic';
import SideNav from '@/components/SideNav';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Privacy Policy | Geoporte',
  description:
    'How Geoporte collects, uses, stores and protects personal information under the Australian Privacy Principles and the New Zealand Privacy Act 2020.',
  path: '/privacy-policy',
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
            <h1 id="pTitle">
              <span className="line">
                <span>Privacy</span>
              </span>
              <span className="line">
                <span className="a">Policy</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>How Geoporte collects, uses and protects personal information.</p>
            <a href="/contact-us" className="pill pill-a magnetic">
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
            <p className="lg-lead">
              This policy explains how Geoporte handles personal information in line with the <em>Privacy Act 1988 (Cth)</em> and the
              Australian Privacy Principles, and the <em>Privacy Act 2020</em> in New Zealand.
            </p>
            <h2 className="lg-h">Who We Are</h2>
            <p>
              Geoporte (“Geoporte”, “we”, “us”) provides civil, geotechnical, structural and telecom engineering consultancy services from
              offices in Melbourne, Sydney, Perth and Auckland. Our head office is at Tower 5, Collins Square, 727 Collins Street, Melbourne
              VIC 3008, Australia.
            </p>
            <h2 className="lg-h">Information We Collect</h2>
            <p>We only collect personal information that is reasonably necessary for our business. This may include:</p>
            <ul>
              <li>
                Your name, email address, phone number and organisation when you contact us by email, phone or through an enquiry form.
              </li>
              <li>Details you choose to share about a project or enquiry.</li>
              <li>Information provided by clients, consultants and contractors in the course of a project.</li>
              <li>Information included in job applications, such as your CV and qualifications.</li>
            </ul>
            <p>This website does not use analytics or advertising tracking, and we do not ask you to create an account.</p>
            <h2 className="lg-h">How We Use It</h2>
            <ul>
              <li>To respond to enquiries and provide quotes and services.</li>
              <li>To manage and deliver projects and communicate with clients and project partners.</li>
              <li>To assess job applications.</li>
              <li>To meet our legal, insurance and professional obligations.</li>
            </ul>
            <p>We do not sell or rent personal information, and we do not use it for direct marketing without your consent.</p>
            <h2 className="lg-h">Disclosure</h2>
            <p>
              We may share personal information with project partners, subcontractors, professional advisers, insurers and IT service
              providers where needed to deliver our services, or where required by law. Some of these providers may store information
              outside Australia or New Zealand. Where this happens, we take reasonable steps to ensure the information is handled in line
              with this policy.
            </p>
            <h2 className="lg-h">Third-Party Services On This Website</h2>
            <p>
              To display this website, your browser loads fonts, scripts and map tiles from third-party providers, including Google Fonts,
              Cloudflare (cdnjs), jsDelivr and Esri (ArcGIS map tiles). These providers receive standard technical information such as your
              IP address and browser type. Their own privacy policies apply to that information.
            </p>
            <h2 className="lg-h">Security And Retention</h2>
            <p>
              We take reasonable steps to protect personal information from misuse, loss and unauthorised access. We keep information only
              for as long as it is needed for the purposes above or as required by law, and then securely destroy or de-identify it.
            </p>
            <h2 className="lg-h">Access, Correction And Complaints</h2>
            <p>
              You can ask to access or correct the personal information we hold about you, or make a privacy complaint, by emailing{' '}
              <a href="mailto:enquiries@geoporte.com.au">enquiries@geoporte.com.au</a>. We will respond within a reasonable time, usually 30
              days. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner
              (oaic.gov.au) or, in New Zealand, the Office of the Privacy Commissioner (privacy.org.nz).
            </p>
            <h2 className="lg-h">Changes To This Policy</h2>
            <p>We may update this policy from time to time. The current version will always be published on this page.</p>
            <h2 className="lg-h">Contact Us</h2>
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
          <SideNav group="legal" current="privacy-policy" />
        </div>
      </section>
      <PageScript />
    </Site>
  );
}
