// Site navigation data shared by the header, mobile menu, footer and page sidebars.

export const GEOTECHNICAL = [
  ['proof-engineering-services-of-geotechnical-design', 'Proof Engineering Services of geotechnical design'],
  ['slope-stability-assessment-and-design-of-slope-stabilization-works', 'Slope Stability Assessment & Stabilization Design'],
  ['reclamation-works-design', 'Reclamation works design'],
  ['road-subgrade-assessment-and-design', 'Road Subgrade Assessment and Design'],
  ['temporary-works-design', 'Temporary Works Design'],
  ['retention-systems', 'Retention Systems'],
  ['earthworks-design', 'Earthworks Design'],
  ['pipelines', 'Pipelines'],
  ['ground-settlement-static-and-seismic', 'Ground Settlement (Static and Seismic)'],
  ['ground-improvement-design', 'Ground Improvement design'],
  ['seismic-hazard-analyses-and-earthquake-geotechnical-design', 'Seismic hazard analyses and earthquake geotechnical design'],
  ['site-investigation-planning-and-reporting', 'Site Investigation Planning and Reporting'],
  ['forensic-geotechnical-engineering-including-investigations-of-geotechnical-failures', 'Forensic Geotechnical Engineering and investigating failures'],
  ['numerical-modelling', 'Numerical Modelling'],
  ['pavement-profile-design', 'Pavement Profile Design'],
  ['desktop-studies-and-geohazard-geotechnical-assessment', 'Desktop Studies and Geohazard Geotechnical Assessment'],
];

// `null` slug marks the Geotechnical Engineering entry, which links to the home page services section.
export const SERVICES = [
  ['civil-engineering', 'Civil Engineering'],
  ['design-and-drafting', 'Design and Drafting'],
  [null, 'Geotechnical Engineering'],
  ['structural-engineering', 'Structural Engineering'],
  ['stormwater-and-flood-modelling', 'Stormwater and Flood Modelling'],
  ['project-control-services', 'Project Control Services'],
  ['advisory-services', 'Advisory Services'],
  ['telecom-services', 'Telecom Services'],
];

export const ABOUT = [
  ['about-us', 'About Us'],
  ['leadership', 'Leadership'],
];

export const LEGAL = [
  ['privacy-policy', 'Privacy Policy'],
  ['terms-of-use', 'Terms of Use'],
  ['cookie-policy', 'Cookie Policy'],
  ['disclaimer', 'Disclaimer'],
];

// Which website this build is: 'au' (geoporte.com.au), 'nz' (geoporte.co.nz) or 'global' (geoporte.com).
// Set NEXT_PUBLIC_SITE per deployment; it picks the country shown in the office map, office lists and contact details.
export const SITE = ['au', 'nz', 'global'].includes(process.env.NEXT_PUBLIC_SITE) ? process.env.NEXT_PUBLIC_SITE : 'au';
const SITE_COUNTRY = { au: 'Australia', nz: 'New Zealand' }[SITE];

// Every Geoporte office worldwide: [city, country, address, lat, lng]. The footer's "Other locations" world map shows all of them.
export const ALL_OFFICES = [
  ['Melbourne', 'Australia', 'Tower 5, Collins Square, 727 Collins Street, Melbourne, VIC, 3008, Australia', -37.8183, 144.9531],
  ['Sydney', 'Australia', 'Three International Towers, 300 Barangaroo Ave, Barangaroo NSW, Australia 2000', -33.8636, 151.2017],
  ['Perth', 'Australia', '108 St Georges Terrace, Perth, WA, Australia 6000', -31.9539, 115.8572],
  ['Auckland', 'New Zealand', '110 Carlton Gore Road, Newmarket, Auckland, New Zealand 1023', -36.8706, 174.7783],
];

const ALL_PHONES = [
  ['+61431554626', '+61 (0) 431 55 4626', 'Australia'],
  ['+61388217758', '+61 (0) 388 21 7758', 'Australia'],
  ['+64212870714', '+64 (0) 21 287 0714', 'New Zealand'],
];

const inSite = ([, country]) => !SITE_COUNTRY || country === SITE_COUNTRY;
export const OFFICES = ALL_OFFICES.filter(inSite);
export const PHONES = ALL_PHONES.filter((p) => !SITE_COUNTRY || p[2] === SITE_COUNTRY);
export const EMAIL = { au: 'enquiries@geoporte.com.au', nz: 'enquiries@geoporte.co.nz', global: 'enquiries@geoporte.com' }[SITE];

// Links to home-page sections stay in-page on the home page (smooth scroll) and absolute elsewhere.
export const homeLink = (home, hash = '') => (home ? hash || '#home' : '/' + hash);
