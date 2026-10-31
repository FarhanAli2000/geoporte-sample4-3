import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/basic';
import SideNav from '@/components/SideNav';
import { Arrow } from '@/components/icons';
import '@/styles/pages.css';

export const metadata = pageMeta({
  title: 'Terms of Use | Geoporte',
  description:
    'The terms that apply to your use of the Geoporte website, including intellectual property, third-party links, limitation of liability and governing law.',
  path: '/terms-of-use',
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
                <span>Terms</span>
              </span>
              <span className="line">
                <span className="a">Of Use</span>
              </span>
            </h1>
          </div>
          <div className="phero-side" id="pSide">
            <p>The terms that apply when you use the Geoporte website.</p>
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
              By accessing or using this website you agree to these terms. If you do not agree, please do not use the website.
            </p>
            <h2 className="lg-h">Use Of This Website</h2>
            <p>
              You may view and download content from this website for your own information and non-commercial use. You must not use the
              website in a way that breaches any law, interferes with its operation, or attempts to gain unauthorised access to it.
            </p>
            <h2 className="lg-h">Intellectual Property</h2>
            <p>
              Unless stated otherwise, all content on this website, including text, photographs, graphics, logos and the Geoporte name, is
              owned by or licensed to Geoporte and is protected by copyright and trade mark laws. You must not reproduce, publish or modify
              any content without our prior written permission.
            </p>
            <h2 className="lg-h">No Professional Advice</h2>
            <p>
              Information on this website is general in nature and is not engineering or professional advice. It does not create a client
              relationship. Please see our <a href="/disclaimer">Disclaimer</a> for more detail.
            </p>
            <h2 className="lg-h">Enquiries And Communications</h2>
            <p>
              Sending us an enquiry does not create a contract. Any engagement for services is governed by a separate written agreement
              between you and Geoporte.
            </p>
            <h2 className="lg-h">Third-Party Links</h2>
            <p>
              This website may link to third-party websites. We are not responsible for their content, availability or privacy practices.
            </p>
            <h2 className="lg-h">Limitation Of Liability</h2>
            <p>
              To the extent permitted by law, Geoporte is not liable for any loss or damage arising from your use of, or reliance on, this
              website. Nothing in these terms excludes any rights you have under the Australian Consumer Law that cannot be excluded.
            </p>
            <h2 className="lg-h">Privacy</h2>
            <p>
              Our handling of personal information is described in our <a href="/privacy-policy">Privacy Policy</a>.
            </p>
            <h2 className="lg-h">Governing Law</h2>
            <p>
              These terms are governed by the laws of Victoria, Australia, and you submit to the non-exclusive jurisdiction of the courts of
              Victoria.
            </p>
            <h2 className="lg-h">Changes</h2>
            <p>
              We may update these terms at any time by publishing a new version on this page. Your continued use of the website means you
              accept the updated terms.
            </p>
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
          <SideNav group="legal" current="terms-of-use" />
        </div>
      </section>
      <PageScript />
    </Site>
  );
}
