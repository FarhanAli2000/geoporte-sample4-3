import Site from '@/components/Site';
import { pageMeta } from '@/lib/seo';
import PageScript from '@/components/page-scripts/team';
import OneTeamBand from '@/components/OneTeamBand';
import Contact from '@/components/Contact';
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
            <div className="crumb" id="crumb">
              <a href="/">Home</a>
              <i />
              <a href="/about-us">About</a>
              <i />
              <b>Our Team</b>
            </div>
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
          <div className="t-grid" id="tGrid">
            <a className="tcard" href="#qaiser-hayat">
              <span className="tph">
                <img src="/images/team/qaiser-hayat.jpg" alt="Qaiser Hayat" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Qaiser Hayat</b>
                <small>
                  MSc in Soil Mechanics and Engineering Seismology, BSc in Civil Engineering (Hons), MIEAust, CPEng, NER, APEC Engineer,
                  IntPE (Australia), RPEV (Victoria), RPEQ, CEng MICE (UK), PE (ID, USA), Auckland Council Producer Statement Author
                </small>
              </span>
            </a>
            <a className="tcard" href="#mazin-alhamrany">
              <span className="tph">
                <img src="/images/team/mazin-alhamrany.jpg" alt="Dr Mazin Alhamrany" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Dr Mazin Alhamrany</b>
                <small>PhD Geotechnical Engineering, United Kingdom</small>
              </span>
            </a>
            <a className="tcard" href="#azam-khan">
              <span className="tph">
                <img src="/images/team/azam-khan.jpg" alt="Dr Azam Khan" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Dr Azam Khan</b>
                <small>PhD (Structural Engineering), Imperial College of Science, Technology and Medicine London United Kingdom</small>
              </span>
            </a>
            <a className="tcard" href="#salwa-yassin">
              <span className="tph">
                <img src="/images/team/salwa-yassin.jpg" alt="Dr Salwa Yassin" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Dr Salwa Yassin</b>
                <small>
                  PhD and MSc in Geotechnical Engineering, BSc in Civil Engineering, Chartered Engineer (CEng. MICE), Construction Skills
                  Certification Scheme (CSCS)
                </small>
              </span>
            </a>
            <a className="tcard" href="#sirous-amiri-agha">
              <span className="tph">
                <img src="/images/team/sirous-amiri-agha.jpg" alt="Sirous Amiri Agha" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Sirous Amiri Agha</b>
                <small>
                  Master of Science – Geology Bachelor of Science – Geology Project Management – Diploma RPGeo-Geotechnical and Engineering,
                  Australia Member, Australian Institute of Geoscientists (AIG) Ass. M., Australian National Committee on Large Dams
                  (ANCOLD) Fellow Member, Geological Society of London (GSL)
                </small>
              </span>
            </a>
            <a className="tcard" href="#zainab-bhatti">
              <span className="tph">
                <img src="/images/team/zainab-bhatti.jpg" alt="Zainab Bhatti" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Zainab Bhatti</b>
                <small>
                  Bachelors in Architecture, Diploma in Construction Project Management New Zealand, Certified member of the New Zealand
                  Institute of Architects
                </small>
              </span>
            </a>
            <a className="tcard" href="#syed-ali">
              <span className="tph">
                <img src="/images/team/syed-ali.jpg" alt="Dr Syed Ali" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Dr Syed Ali</b>
                <small>PhD – Geotechnical Engineering</small>
              </span>
            </a>
            <a className="tcard" href="#sumbul-ahsan-khan">
              <span className="tph">
                <img src="/images/team/sumbul-ahsan-khan.jpg" alt="Sumbul Ahsan Khan" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Sumbul Ahsan Khan</b>
                <small>Bachelor of Commerce, Diploma of Business, Diploma in Xero and MYOB, CPA Associate</small>
              </span>
            </a>
            <a className="tcard" href="#micah-papasin">
              <span className="tph">
                <img src="/images/team/micah-papasin.jpg" alt="Micah Papasin" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Micah Papasin</b>
                <small>Master of Science in Civil Engineering, BSc in Civil Engineering</small>
              </span>
            </a>
            <a className="tcard" href="#rabbiya-aziz">
              <span className="tph">
                <img src="/images/team/rabbiya-aziz.jpg" alt="Rabbiya Aziz" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Rabbiya Aziz</b>
                <small>
                  Sunflower Scheme Certification, Diploma in Business Management, Certificate in Generic Education and Training, Certificate
                  in Business Administration and Computing, Bachelor of Arts
                </small>
              </span>
            </a>
            <a className="tcard" href="#ammar-alam">
              <span className="tph">
                <img src="/images/team/ammar-alam.jpg" alt="Ammar Alam" loading="lazy" />
              </span>
              <span className="tmeta">
                <b>Ammar Alam</b>
                <small>Master of Science in Civil Engineering, BSc in Civil Engineering</small>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* PROFILES */}
      <section className="profiles" id="profiles">
        <div className="wrap">
          <article className="prof" id="qaiser-hayat">
            <div className="p-ph">
              <img src="/images/team/qaiser-hayat.jpg" alt="Qaiser Hayat" loading="lazy" />
              <span className="n">01</span>
            </div>
            <div className="p-tx rv">
              <h3>Qaiser Hayat</h3>
              <ul className="p-cred">
                <li>
                  MSc in Soil Mechanics and Engineering Seismology, BSc in Civil Engineering (Hons), MIEAust, CPEng, NER, APEC Engineer,
                  IntPE (Australia), RPEV (Victoria), RPEQ, CEng MICE (UK), PE (ID, USA), Auckland Council Producer Statement Author
                </li>
              </ul>
              <div className="p-bio">
                <p>
                  Qaiser Hayat is a Chartered Geotechnical Engineer with 25 years of experience in the design and management of civil and
                  geotechnical engineering projects. He is Director and Principal Geotechnical Engineer at Geoporte Australia. Qaiser has
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
          <article className="prof" id="mazin-alhamrany">
            <div className="p-ph">
              <img src="/images/team/mazin-alhamrany.jpg" alt="Dr Mazin Alhamrany" loading="lazy" />
              <span className="n">02</span>
            </div>
            <div className="p-tx rv">
              <h3>Dr Mazin Alhamrany</h3>
              <ul className="p-cred">
                <li>PhD Geotechnical Engineering, United Kingdom</li>
                <li>MSc Geotechnical Engineering</li>
                <li>BSc Civil Engineering</li>
                <li>Chartered Civil Engineer</li>
                <li>Member of the National Information and Technology Platform for Transport and Public Space (CROW), Netherland</li>
              </ul>
              <div className="p-bio">
                <p>
                  Mazin brings over 30 years of unparalleled experience in geotechnical and tunnelling design, having led and managed
                  challenging projects across the UK, Europe, Middle East and Australia.
                </p>
                <p>
                  Mazin has an impressive track record, including the design and management of mega projects such as the Doha Metro, Riyadh
                  Metro, and Etihad Rail. His extensive expertise in advanced numerical modelling and complex geotechnical problem-solving
                  will be a tremendous asset to our team and clients.
                </p>
                <p>
                  Mazin has significant contributions to research and teaching in the field of advanced numerical methods for geotechnical
                  problems and have written several papers on the subject.
                </p>
              </div>
              <h4>Some of his notable projects include:</h4>
              <ul className="pl">
                <li>Crossrail Project (Farringdon Station and Pudding Mill Lane Portal)</li>
                <li>Amsterdam Metro North-South Line</li>
                <li>Mega Reservoirs in Doha</li>
                <li>The Inner Doha Re-sewerage Implementation Strategy (IDRIS)</li>
                <li>Strategic Tunnel Enhancement Programme (STEP) in Abu Dhabi</li>
              </ul>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Advanced Numerical Modelling and Soil Structure Interaction Analysis</li>
                <li>Trenchless Technology and Impact Assessment on Existing Structures</li>
                <li>2D and 3D Finite Element Modelling using Advanced Soil Models to Simulate Construction Staging</li>
                <li>Geotechnical Risk Assessment and Management</li>
              </ul>
            </div>
          </article>
          <article className="prof" id="azam-khan">
            <div className="p-ph">
              <img src="/images/team/azam-khan.jpg" alt="Dr Azam Khan" loading="lazy" />
              <span className="n">03</span>
            </div>
            <div className="p-tx rv">
              <h3>Dr Azam Khan</h3>
              <ul className="p-cred">
                <li>PhD (Structural Engineering), Imperial College of Science, Technology and Medicine London United Kingdom</li>
                <li>Master of Science (Civil Engineering), Imperial College UK</li>
                <li>Bachelor of Science in Civil Engineering</li>
              </ul>
              <div className="p-bio">
                <p>
                  Dr Azam Khan has a PhD Degree in Structural Engineering from Imperial College London. He has around 20 years of experience
                  as a structural design engineer in the transport, energy and building infrastructure sectors. Azam is experienced in
                  conceptual design; FEED, detailed design and engineering, procurement and construction (EPC) projects, brown field
                  modifications and structural integrity management. Dr Khan is engaged on a consultancy basis to provide strategic input,
                  particularly in the areas of steel and concrete design.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>
                  Structural design of bridges, retaining walls, buildings and civil infrastructure in the transport, water and energy
                  sectors
                </li>
                <li>
                  Software skills in SACS, ETABS, STAAD-2007, SAP2000, ABAQUS, MathCAD, AutoCAD, PDMS, Visual Basic, Fortran-95 and CAD
                  packages
                </li>
              </ul>
            </div>
          </article>
          <article className="prof" id="salwa-yassin">
            <div className="p-ph">
              <img src="/images/team/salwa-yassin.jpg" alt="Dr Salwa Yassin" loading="lazy" />
              <span className="n">04</span>
            </div>
            <div className="p-tx rv">
              <h3>Dr Salwa Yassin</h3>
              <ul className="p-cred">
                <li>
                  PhD and MSc in Geotechnical Engineering, BSc in Civil Engineering, Chartered Engineer (CEng. MICE), Construction Skills
                  Certification Scheme (CSCS)
                </li>
              </ul>
              <div className="p-bio">
                <p>
                  Salwa has an overall experience of 30 years in the fields of Civil and Geotechnical Engineering. She has successfully led
                  different teams of Geotechnical Specialists and winning several mega projects worldwide. She has been maintaining an
                  active research path, her research field covers sustainability in Geotechnical Engineering, Problematic Soils (mainly
                  collapsible and expansive soils), Offshore Foundations, Statistics in Geotechnical Engineering and Engineering Geology,
                  Characterization of Rock Formations (Rock Mechanics), and Sustainability in Swelling Treatment.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Geotechnical Engineering Design for Buildings, Energy and Transport Infrastructure, and Ports and Marine</li>
                <li>Project Management</li>
                <li>Tendering and Supervision</li>
                <li>Offshore and Onshore Causeways and Bridges</li>
                <li>Wind Farms</li>
                <li>Harbors</li>
                <li>Reclamations</li>
                <li>Ground Improvement</li>
                <li>Earthworks</li>
                <li>Deep and Shallow Foundation</li>
                <li>Problematic Soils</li>
                <li>Retaining Systems and Breakwater Structures</li>
                <li>Soil Modelling using Finite Element</li>
              </ul>
            </div>
          </article>
          <article className="prof" id="sirous-amiri-agha">
            <div className="p-ph">
              <img src="/images/team/sirous-amiri-agha.jpg" alt="Sirous Amiri Agha" loading="lazy" />
              <span className="n">05</span>
            </div>
            <div className="p-tx rv">
              <h3>Sirous Amiri Agha</h3>
              <ul className="p-cred">
                <li>
                  Master of Science – Geology Bachelor of Science – Geology Project Management – Diploma RPGeo-Geotechnical and Engineering,
                  Australia Member, Australian Institute of Geoscientists (AIG) Ass. M., Australian National Committee on Large Dams
                  (ANCOLD) Fellow Member, Geological Society of London (GSL)
                </li>
              </ul>
              <div className="p-bio">
                <p>
                  With over 25 years of experience across Australia, the Middle East, and Southeast Asia, Sirous brings deep technical
                  expertise to our projects as a world class engineering geologist.
                </p>
                <p>
                  At Geoporte, Sirous is leading and strengthening our capabilities in engineering geology and geotechnical advisory for
                  dams, tunnels, roads, rail, renewables, mines, and slope remediation. He is supporting business development, mentoring
                  junior colleagues, and is leading the team in digital innovation through its application in geoscience practice.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Geological and geotechnical risk assessments</li>
                <li>Slope stability and landslide analysis</li>
                <li>Tunnelling and underground geohazards</li>
                <li>Dam and hydropower foundation assessments</li>
                <li>3D geological modelling and site characterisation</li>
                <li>Geomorphological assessment and terrain analysis</li>
              </ul>
            </div>
          </article>
          <article className="prof" id="zainab-bhatti">
            <div className="p-ph">
              <img src="/images/team/zainab-bhatti.jpg" alt="Zainab Bhatti" loading="lazy" />
              <span className="n">06</span>
            </div>
            <div className="p-tx rv">
              <h3>Zainab Bhatti</h3>
              <ul className="p-cred">
                <li>
                  Bachelors in Architecture, Diploma in Construction Project Management New Zealand, Certified member of the New Zealand
                  Institute of Architects
                </li>
              </ul>
              <div className="p-bio">
                <p>
                  Zainab brings a unique blend of architectural design expertise and project management capability. Earlier in her career,
                  she was closely involved in the delivery of large-scale commercial, residential, and smart city developments in South
                  Asia, where she worked alongside internationally recognised consultants from Spain, Singapore, and the UAE. These globally
                  coordinated projects sharpened her ability to manage complex stakeholder engagement and drive integrated design delivery.
                  She holds a Bachelor of Architecture and a Graduate Diploma in Construction Project Management from Unitec Institute of
                  Technology in Auckland, and is a certified member of the New Zealand Institute of Architects.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Coordinating project teams and ensuring timely delivery of milestones</li>
                <li>Managing documentation, contracts, and project reporting</li>
                <li>Supporting on-site implementation and quality assurance</li>
                <li>Bridging technical and design disciplines to ensure seamless project execution</li>
              </ul>
            </div>
          </article>
          <article className="prof" id="syed-ali">
            <div className="p-ph">
              <img src="/images/team/syed-ali.jpg" alt="Dr Syed Ali" loading="lazy" />
              <span className="n">07</span>
            </div>
            <div className="p-tx rv">
              <h3>Dr Syed Ali</h3>
              <ul className="p-cred">
                <li>PhD – Geotechnical Engineering</li>
                <li>Master of Science – Geo and Water Engineering</li>
                <li>Bachelor of Science – Mining Engineering</li>
              </ul>
              <div className="p-bio">
                <p>
                  Dr. Ali is a Geotechnical Engineer with over 17 years of experience in research, consultancy, and technical support across
                  a range of engineering and design projects.
                </p>
                <p>
                  He has contributed to infrastructure developments in Australia, New Zealand, and other regions, working on projects across
                  various stages including feasibility, detailed design, and construction. His work has spanned both public and private
                  sectors, and he has been involved in multidisciplinary teams delivering practical and technically sound outcomes.
                </p>
                <p>
                  His areas of specialisation include ground improvement design, interpretation of geotechnical parameters, slope stability
                  and settlement analysis, and seismic site response analysis and liquefaction assessment.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Field Investigations</li>
                <li>Numerical modelling</li>
                <li>Geotechnical design of shallow and piled foundations, retaining walls, slope stabilization works</li>
                <li>
                  Proficient in use of GeoStudio, Plaxis (2D and 3D), Midas GTS NX, FLAC 2D, UDEC, ABAQUS, LPile, GRL-Weap, and the
                  Rocscience suite
                </li>
              </ul>
            </div>
          </article>
          <article className="prof" id="sumbul-ahsan-khan">
            <div className="p-ph">
              <img src="/images/team/sumbul-ahsan-khan.jpg" alt="Sumbul Ahsan Khan" loading="lazy" />
              <span className="n">08</span>
            </div>
            <div className="p-tx rv">
              <h3>Sumbul Ahsan Khan</h3>
              <ul className="p-cred">
                <li>Bachelor of Commerce, Diploma of Business, Diploma in Xero and MYOB, CPA Associate</li>
              </ul>
              <div className="p-bio">
                <p>
                  Sumbul has a strong background in auditing, financial services, and business operations. With over four years of
                  experience, including roles as an Audit Quality Consultant and Auditor, she has expertise in implementing quality
                  frameworks, ensuring compliance, and driving process improvements. Her skills in business development, project
                  coordination, and cross-functional collaboration are further demonstrated in her experiences, where she supports client
                  engagement and strategic initiatives.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Client and Stakeholder Management</li>
                <li>Sales and Marketing</li>
                <li>Quality Auditor</li>
                <li>Project Management</li>
                <li>Business Development</li>
                <li>Project Coordination</li>
              </ul>
            </div>
          </article>
          <article className="prof" id="micah-papasin">
            <div className="p-ph">
              <img src="/images/team/micah-papasin.jpg" alt="Micah Papasin" loading="lazy" />
              <span className="n">09</span>
            </div>
            <div className="p-tx rv">
              <h3>Micah Papasin</h3>
              <ul className="p-cred">
                <li>Master of Science in Civil Engineering, BSc in Civil Engineering</li>
              </ul>
              <div className="p-bio">
                <p>
                  A highly motivated and capable Civil Engineer with over five years of experience. She holds a Master of Engineering
                  Science degree from Swinburne University. She has been involved in diverse projects involving structural design,
                  geotechnical investigations, and project management. Her experience includes design of residential buildings, conducting
                  site inspections, prepares desktop studies, geotechnical reports and tender documentation.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Project Management</li>
                <li>Structural Design</li>
                <li>Civil Infrastructure Design and Drafting</li>
                <li>Site Characterisation</li>
              </ul>
            </div>
          </article>
          <article className="prof" id="rabbiya-aziz">
            <div className="p-ph">
              <img src="/images/team/rabbiya-aziz.jpg" alt="Rabbiya Aziz" loading="lazy" />
              <span className="n">10</span>
            </div>
            <div className="p-tx rv">
              <h3>Rabbiya Aziz</h3>
              <ul className="p-cred">
                <li>
                  Sunflower Scheme Certification, Diploma in Business Management, Certificate in Generic Education and Training, Certificate
                  in Business Administration and Computing, Bachelor of Arts
                </li>
              </ul>
              <div className="p-bio">
                <p>
                  Rabbiya is a results-driven project management professional with extensive experience in corporate services, research
                  management, and administration. She has a proven track record of coordinating complex projects, managing HR processes,
                  ensuring compliance, and optimizing financial operations. She has facilitated online business courses and provided
                  administrative support in academic and healthcare settings, demonstrating strong organizational and stakeholder engagement
                  skills.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Human Resource Processes</li>
                <li>Project Coordination and Management</li>
                <li>Business Administration</li>
                <li>Optimising Financial Operations</li>
              </ul>
            </div>
          </article>
          <article className="prof" id="ammar-alam">
            <div className="p-ph">
              <img src="/images/team/ammar-alam.jpg" alt="Ammar Alam" loading="lazy" />
              <span className="n">11</span>
            </div>
            <div className="p-tx rv">
              <h3>Ammar Alam</h3>
              <ul className="p-cred">
                <li>Master of Science in Civil Engineering, BSc in Civil Engineering</li>
              </ul>
              <div className="p-bio">
                <p>
                  Ammar is an experienced civil engineer with specialisation in structural design of civil and building infrastructure
                  projects.
                </p>
              </div>
              <h4>Specialisation</h4>
              <ul className="p-spec">
                <li>Design of reinforced concrete structures for residential and commercial buildings</li>
                <li>Structural design of Civil and Water infrastructure</li>
                <li>Numerical analysis using ETABS, SAP2000 and SAFE</li>
                <li>Drafting expertise using AutoCAD and Autodesk Revit</li>
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
      {/* CONTACT */}
      <Contact />
      <PageScript />
    </Site>
  );
}
