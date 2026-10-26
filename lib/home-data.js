// Home page content: rendered by app/page.jsx and also used by the home script's search index.

export const SERVICE_CARDS = [
  { title: 'Civil Engineering', text: 'Practical, innovative and sustainable civil solutions.', icon: 'civil', img: '/images/real/crane-excavation-dewatering.jpg', pos: '40% 50%', href: '/civil-engineering' },
  { title: 'Design and Drafting', text: 'High-quality design, drafting and BIM support.', icon: 'design', img: '/images/service-2.jpg', pos: '50% 40%', href: '/design-and-drafting' },
  { title: 'Geotechnical Engineering', text: 'Ground knowledge for smarter decisions.', icon: 'geo', img: '/images/real/aerial-drilling-2.jpg', pos: '50% 50%' },
  { title: 'Telecom Services', text: 'Engineering support for a more connected world.', icon: 'tel', img: '/images/telecom.jpg', pos: '50% 25%', href: '/telecom-services' },
  { title: 'Structural Engineering', text: 'Safe, efficient structures built to last.', icon: 'struct', img: '/images/cable-bridge-wide.jpg', pos: '50% 40%', href: '/structural-engineering' },
  { title: 'Stormwater & Flood Modelling', text: 'Catchment, drainage and flood risk modelling.', icon: 'storm', img: '/images/dam-spillway.jpg', pos: '50% 40%', href: '/stormwater-and-flood-modelling' },
  { title: 'Project Management', text: 'Programme, cost and delivery control on site.', icon: 'pm', img: '/images/real/team-meeting.jpg', pos: '50% 40%', href: '/project-control-services' },
  { title: 'Advisory Services', text: 'Risk-based technical and transaction advice.', icon: 'adv', img: '/images/service-7.jpg', pos: '50% 50%', href: '/advisory-services' },
];

export const FEATURED_PROJECTS = [
  { title: 'Melbourne Airport', sector: 'Aviation', loc: 'VIC', img: '/images/real/airport-earthworks.jpg' },
  { title: 'City Rail Link Auckland', sector: 'Transportation', loc: 'NZ', img: '/images/hero-video-poster.jpg' },
  { title: 'Healesville–Koo Wee Rup Road Upgrade', sector: 'Transportation', loc: 'VIC', img: '/images/real/aerial-road-straight-2.jpg' },
  { title: 'AGL Torrens Island Battery Facility', sector: 'Energy Infrastructure', loc: 'SA', img: '/images/telecom.jpg' },
  { title: 'Regional Dam Spillway Upgrade', sector: 'Water', loc: 'QLD', img: '/images/dam-spillway.jpg' },
  { title: 'Cable-Stayed River Crossing', sector: 'Transportation', loc: 'NSW', img: '/images/cable-bridge.jpg' },
];

export const SECTORS = [
  { title: 'Transportation', text: 'Roads, rail, bridges and airports.', img: '/images/hero-video-poster.jpg' },
  { title: 'Building', text: 'Structures, foundations and civil works.', img: '/images/cable-bridge-wide.jpg' },
  { title: 'Water', text: 'Dams, stormwater and flood resilience.', img: '/images/dam-spillway.jpg' },
  { title: 'Ports & Marine', text: 'Wharves, coastal and marine structures.', img: '/images/coastal-bridge.jpg' },
  { title: 'Energy Infrastructure', text: 'Battery, power and telecom networks.', img: '/images/telecom.jpg' },
];

export const pad = (n) => String(n).padStart(2, '0');

// "How we work" steps on the home page.
export const PROCESS_STEPS = [
  {
    title: 'Understand', img: '/images/real/site-meeting-creek.jpg', alt: 'Geoporte engineer in a site meeting',
    text: 'Site visits, data review and stakeholder briefs to define the real problem and its risks.',
    tags: ['Site walk', 'Brief', 'Risk register'],
  },
  {
    title: 'Investigate', img: '/images/real/oval-team-drilling.jpg', alt: 'Geoporte engineers with the drilling crew on site',
    text: 'Surveys, geotechnical testing and modelling to test every option before we commit.',
    tags: ['Boreholes', 'Survey', 'Flood models'],
  },
  {
    title: 'Design', img: '/images/real/model-metro-station.jpg', alt: '3D finite element models of an underground metro station',
    text: 'Concept through detailed design, drawings, BIM models and authority approvals.',
    tags: ['Concept', 'Detailed', 'Approvals'],
  },
  {
    title: 'Deliver', img: '/images/cable-bridge.jpg', alt: 'Completed cable-stayed bridge',
    text: 'Project management, construction support and a clean, documented handover.',
    tags: ['Programme', 'Site support', 'Handover'],
  },
];

// /sectors page: `services` are page slugs (labels come from lib/nav.js), `projects` match FEATURED_PROJECTS sectors.
export const SECTOR_DETAILS = [
  {
    title: 'Transportation', img: '/images/hero-video-poster.jpg', alt: 'Transport infrastructure',
    detail: 'We support new and upgraded roads, rail, bridges and airports with ground investigation, earthworks and pavement design, and structural engineering for bridges and retaining structures.',
    services: ['road-subgrade-assessment-and-design', 'pavement-profile-design', 'earthworks-design', 'structural-engineering'],
    projects: ['Transportation', 'Aviation'],
  },
  {
    title: 'Building', img: '/images/cable-bridge-wide.jpg', alt: 'Building and civil infrastructure',
    detail: 'From residential developments to commercial and public buildings, we design foundations, retention systems and civil works that suit the ground they sit on.',
    services: ['structural-engineering', 'retention-systems', 'ground-settlement-static-and-seismic', 'design-and-drafting'],
    projects: ['Building'],
  },
  {
    title: 'Water', img: '/images/dam-spillway.jpg', alt: 'Water infrastructure',
    detail: 'We model catchments and flooding, design drainage and pipelines, and assess the embankments and slopes that protect communities and assets.',
    services: ['stormwater-and-flood-modelling', 'pipelines', 'slope-stability-assessment-and-design-of-slope-stabilization-works', 'civil-engineering'],
    projects: ['Water'],
  },
  {
    title: 'Ports & Marine', img: '/images/real/breakwater-construction.jpg', alt: 'Breakwater construction with rock armour units along the sea',
    detail: 'Wharves, breakwaters and coastal structures, with experience in land reclamation, ground improvement and seismic design for port and marine infrastructure.',
    services: ['reclamation-works-design', 'ground-improvement-design', 'seismic-hazard-analyses-and-earthquake-geotechnical-design', 'retention-systems'],
    projects: ['Ports & Marine'],
  },
  {
    title: 'Energy Infrastructure', img: '/images/telecom.jpg', alt: 'Energy and telecom infrastructure',
    detail: 'Site investigation, foundation design and telecom engineering for battery, power and communications infrastructure.',
    services: ['site-investigation-planning-and-reporting', 'ground-improvement-design', 'telecom-services', 'project-control-services'],
    projects: ['Energy Infrastructure'],
  },
];
