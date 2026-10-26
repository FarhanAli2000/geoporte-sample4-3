import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/home';
import { Arrow, ChevronLeft, ChevronRight, Close, Mail, Pin } from '@/components/icons';
import ServiceIcon from '@/components/home/ServiceIcon';
import EnquiryForm from '@/components/EnquiryForm';
import { FEATURED_PROJECTS, PROCESS_STEPS, SERVICE_CARDS, pad } from '@/lib/home-data';
import '@/styles/home.css';

export const metadata = pageMeta({
  title: 'Geoporte | Geotechnical & Civil Engineering Consultants',
  description:
    'Geoporte provides geotechnical, civil, structural and telecom engineering design consultancy across Australia and New Zealand, from investigation to delivery.',
  path: '/',
  image: 'https://geoporte.com.au/images/hero-video-poster.jpg',
});

// Hero headline cut out of the dark mask; scrolling zooms through the blue O at ZOOM_O [line, char].
const HERO_WORDS = ['GLOBAL EXPERTISE,', 'LOCAL COMMITMENT'];
const ZOOM_O = [1, 7];

export default function Page() {
  return (
    <Site
      home
      section="home"
      beforeChrome={
        <>
          <div className="loader" id="loader" aria-hidden="true">
            <div className="loader-in">
              <div className="loader-word" id="loaderWord">
                <span>G</span>
                <span>E</span>
                <span className="o">O</span>
                <span>P</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>E</span>
              </div>
              <div className="loader-bar">
                <i id="loaderBar" />
              </div>
              <div className="loader-pct" id="loaderPct">
                000
              </div>
            </div>
          </div>
          <div className="loader-panels" id="panels" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </>
      }
      afterHeader={
        <>
          <div className="search" id="search" role="dialog" aria-label="Search">
            <div className="sbox">
              <input id="sIn" type="search" placeholder="Search services and projects…" autoComplete="off" />
              <ul className="sres" id="sRes" />
            </div>
          </div>
        </>
      }
      after={
        <>
          <div className="lightbox" id="lightbox" role="dialog" aria-label="Project film">
            <div className="lb">
              <video
                id="lbVideo"
                src="/videos/dusk-bridge.mp4"
                poster="/images/dusk-poster.jpg"
                muted
                playsInline
                loop
                controls
                preload="none"
              />
            </div>
            <button className="lbx" id="lbx" aria-label="Close">
              <Close />
            </button>
          </div>
        </>
      }
    >
      {/* HERO */}
      <section className="hero" id="home">
        <div className="zvid" id="zvid">
          <video
            id="zVid"
            src="/videos/hero-bridge.mp4"
            poster="/images/hero-video-poster.jpg"
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
            aria-label="Aerial footage along a steel truss bridge"
          />
        </div>
        <div className="zmask" id="zmask" aria-hidden="true">
          <div className="zword" id="zword">
            {HERO_WORDS.map((line, l) => (
              <div className="zline" key={line}>
                {[...line].map((c, i) =>
                  l === ZOOM_O[0] && i === ZOOM_O[1] ? (
                    <span key={i} className="zo" id="zO">
                      {c}
                    </span>
                  ) : (
                    <span key={i}>{c === ' ' ? ' ' : c}</span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="zshine" aria-hidden="true" />
        <div className="zintro" id="zintro">
          <div className="zintro-in">
            <div className="hero-eyebrow" aria-hidden="true">
              Engineering for a connected tomorrow
            </div>
            <p aria-hidden="true">Design · Engineering · Advisory</p>
          </div>
          <div className="zfoot">
            <p className="zsub">
              Civil, geotechnical and structural engineering and advisory for councils, developers, contractors and infrastructure owners
              across Australia. We bring international experience to local projects, with senior engineers who stay involved from
              investigation through to construction.
            </p>
            <div className="zcue" id="zcue">
              <span />
              Scroll to enter
            </div>
          </div>
        </div>
        <div className="zshade" id="zshade" />
        <div className="wrap hero-in" id="hpanelIn">
          <div className="hero-eyebrow" id="heroEyebrow">
            <span>Engineering for a connected tomorrow</span>
          </div>
          <h1 id="heroTitle">
            <span className="line">
              <span>Design</span>
            </span>
            <span className="line">
              <span>Engineering</span>
            </span>
            <span className="line">
              <span className="a">Advisory</span>
            </span>
          </h1>
          <p className="hero-lead" id="heroLead">
            Geoporte leads in risk-based design and management of complex engineering projects.
          </p>
          <div className="hacts">
            <a href="#services" className="clink magnetic" id="heroCta">
              <span className="ring">
                <Arrow />
              </span>
              <span className="t">Explore our work</span>
            </a>{' '}
            <button className="film" id="openFilm" data-cursor="Play">
              <i>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </i>
              Watch film
            </button>
          </div>
        </div>
        <div className="ztag" id="ztag">
          Live · Steel truss bridge
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-t">
          <span>Civil Engineering</span>
          <span>Design &amp; Drafting</span>
          <span>Geotechnical</span>
          <span>Structural</span>
          <span>Stormwater &amp; Flood</span>
          <span>Project Management</span>
          <span>Advisory</span>
          <span>Telecommunications</span> <span>Civil Engineering</span>
          <span>Design &amp; Drafting</span>
          <span>Geotechnical</span>
          <span>Structural</span>
          <span>Stormwater &amp; Flood</span>
          <span>Project Management</span>
          <span>Advisory</span>
          <span>Telecommunications</span>
        </div>
      </div>
      {/* SERVICES */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="head-row">
            <div className="sec-head">
              <div className="cap">What we do</div>
              <h2 className="split">Expertise across the built environment</h2>
            </div>
            <div className="side rv">
              <p>
                From concept to completion, we provide integrated engineering solutions that manage risk, solve complex challenges and
                create enduring value.
              </p>
              <div className="ctrls">
                <span className="count-lab">
                  <b id="sCur">01</b> / <span id="sTot">08</span>
                </span>
                <button className="carr" id="sPrev" aria-label="Previous">
                  <ChevronLeft />
                </button>
                <button className="carr" id="sNext" aria-label="Next">
                  <ChevronRight />
                </button>
                <a href="#contact" className="tlink" style={{ marginLeft: '14px' }}>
                  View all services <Arrow />
                </a>
              </div>
            </div>
          </div>
          <div className="slider" id="sSlider" data-cursor="Drag">
            <div className="track" id="sTrack">
              {SERVICE_CARDS.map((s, i) => (
                <a key={s.title} href={s.href || '#contact'} className="scard">
                  <span className="num">{pad(i + 1)}</span>
                  <div className="img">
                    <img src={s.img} alt="" style={{ objectPosition: s.pos }} loading="lazy" />
                  </div>
                  <div className="body">
                    <span className="ic">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span className="more">
                      LEARN MORE <Arrow />
                    </span>
                  </div>
                  <span className="edge"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="sbar">
            <i id="sBar" />
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="process" id="process">
        <div className="proc-pin" id="procPin">
          <div className="wrap proc-head">
            <div className="sec-head">
              <div className="cap">How we work</div>
              <h2 className="split">From first site visit to handover.</h2>
            </div>
            <div className="proc-meter">
              <span id="pStep">01</span>
              <span className="m">
                <i id="pMeter" />
              </span>
              <span>04</span>
            </div>
          </div>
          <div className="proc-track" id="procTrack">
            {PROCESS_STEPS.map((p, i) => (
              <article className="pstep" key={p.title}>
                <div className="pimg">
                  <img src={p.img} alt={p.alt} loading="lazy" />
                </div>
                <div className="pc">
                  <span className="big">{pad(i + 1)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul>
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            <div className="pend">
              <h3>
                Ready to start <span className="a">yours?</span>
              </h3>
              <a href="#contact" className="pill pill-o magnetic">
                Talk to an engineer <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="wrap">
          <div className="ph">
            <div className="lft">
              <div className="sec-head">
                <div className="cap">Featured projects</div>
                <h2 className="split">Real projects. Lasting impact.</h2>
              </div>
              <div className="ctrls rv">
                <button className="carr" id="pPrev" aria-label="Previous project">
                  <ChevronLeft />
                </button>
                <button className="carr" id="pNext" aria-label="Next project">
                  <ChevronRight />
                </button>
              </div>
            </div>
            <a href="/projects" className="tlink rv">
              View all projects <Arrow />
            </a>
          </div>
          <div className="slider" id="pSlider" data-cursor="Drag">
            <div className="track" id="pTrack">
              {FEATURED_PROJECTS.map((p) => (
                <article key={p.title} className="pcard" data-cursor="View">
                  <span className="loc">{p.loc}</span>
                  <div className="img">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <span className="scan"></span>
                  <div className="body">
                    <div>
                      <h3>{p.title}</h3>
                      <small>{p.sector}</small>
                    </div>
                    <span className="ring">
                      <Arrow />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="sbar">
            <i id="pBar" />
          </div>
        </div>
      </section>
      {/* STATS */}
      <section className="stats" id="stats">
        <div className="wrap stats-grid">
          <div className="stat">
            <b>
              <span className="count" data-to="1000">
                1,000
              </span>
              <em>+</em>
            </b>
            <p>Projects delivered across Australia and New Zealand</p>
            <div className="t2">
              <i />
            </div>
          </div>
          <div className="stat">
            <b>
              <span className="count" data-to="20">
                20
              </span>
              <em>+</em>
            </b>
            <p>Years of combined engineering experience</p>
            <div className="t2">
              <i />
            </div>
          </div>
          <div className="stat">
            <b>
              <span className="count" data-to="8">
                8
              </span>
            </b>
            <p>Specialised engineering disciplines</p>
            <div className="t2">
              <i />
            </div>
          </div>
          <div className="stat">
            <b>
              <span className="count" data-to="100">
                100
              </span>
              <em>%</em>
            </b>
            <p>Commitment to every client and community</p>
            <div className="t2">
              <i />
            </div>
          </div>
        </div>
      </section>
      {/* BAND */}
      <section className="band" id="band">
        <div className="band-media" id="bandMedia">
          <video
            id="bandVideo"
            src="/videos/hero-bridge.mp4"
            poster="/images/hero-video-poster.jpg"
            muted
            playsInline
            loop
            preload="metadata"
            aria-hidden="true"
          />
        </div>
        <div className="wrap band-in">
          <h2 id="bandTitle">
            <span className="line">
              <span>Complex challenges.</span>
            </span>
            <span className="line">
              <span>
                Considered <span className="a">solutions.</span>
              </span>
            </span>
          </h2>
          <div className="band-side rv">
            <p>We work with our clients to navigate complexity, manage risk and deliver engineering outcomes that make a difference.</p>
            <a href="/about-us" className="pill pill-o magnetic">
              About Geoporte <Arrow />
            </a>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div>
            <div className="sec-head">
              <div className="cap">Get in touch</div>
              <h2 className="split">Let’s talk about your next project.</h2>
            </div>
            <p className="lead rv">Tell us what you’re planning and the right engineer will get back to you within one business day.</p>
            <div className="offices" id="offices">
              <div className="office">
                <span className="ring">
                  <Pin />
                </span>
                <div>
                  <b>Melbourne, Australia</b>
                  <p>Tower 5, Collins Square, 727 Collins Street, Melbourne, VIC, 3008, Australia</p>
                </div>
              </div>
              <div className="office">
                <span className="ring">
                  <Pin />
                </span>
                <div>
                  <b>Sydney, Australia</b>
                  <p>Three International Towers, 300 Barangaroo Ave, Barangaroo NSW, Australia 2000</p>
                </div>
              </div>
              <div className="office">
                <span className="ring">
                  <Pin />
                </span>
                <div>
                  <b>Perth, Australia</b>
                  <p>108 St Georges Terrace, Perth, WA, Australia 6000</p>
                </div>
              </div>
              <div className="office">
                <span className="ring">
                  <Pin />
                </span>
                <div>
                  <b>Auckland, New Zealand</b>
                  <p>110 Carlton Gore Road, New Market, Auckland, New Zealand 1023</p>
                </div>
              </div>
              <div className="office">
                <span className="ring">
                  <Mail />
                </span>
                <div>
                  <b>Email</b>
                  <p>
                    <a href="mailto:enquiries@geoporte.com.au">enquiries@geoporte.com.au</a> · We reply within 24 hours
                  </p>
                  <p>
                    <a href="tel:+61431554626">+61 (0) 431 55 4626</a> · <a href="tel:+61388217758">+61 (0) 388 21 7758</a> (Australia)
                  </p>
                  <p>
                    <a href="tel:+64212870714">+64 (0) 212 87 0714</a> (New Zealand)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
        <div className="wrap" style={{ marginTop: '44px' }}>
          <div className="c-map rv" id="officeMap" />
        </div>
      </section>
      <PageScript />
    </Site>
  );
}
