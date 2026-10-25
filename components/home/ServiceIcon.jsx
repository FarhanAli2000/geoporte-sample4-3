const PATHS = {
  civil: <><rect x="5" y="5" width="22" height="22" rx="2" /><path d="M9 21h14M11 21v-6M16 21v-9M21 21v-4" /></>,
  design: <><circle cx="14" cy="14" r="8" /><path d="M20 20l7 7M10 14h8M14 10v8" /></>,
  geo: <><path d="M4 26l8-14 5 8 4-5 7 11z" /><path d="M14 6l4 4M18 6l-4 4" /></>,
  struct: <><path d="M4 26h24M8 26V12l8-6 8 6v14" /><path d="M12 26v-8h8v8M8 12h16" /></>,
  storm: <><path d="M16 4c5 6 8 10 8 14a8 8 0 0 1-16 0c0-4 3-8 8-14z" /><path d="M12 19a4 4 0 0 0 4 4" /></>,
  pm: <><rect x="5" y="7" width="22" height="20" rx="2" /><path d="M5 13h22M11 4v6M21 4v6M10 19l3 3 6-6" /></>,
  adv: <><path d="M5 7h22v14H14l-6 5v-5H5z" /><path d="M10 12h12M10 16h8" /></>,
  tel: <><path d="M16 14v14M12 28l4-14 4 14" /><circle cx="16" cy="11" r="2" /><path d="M10 6a9 9 0 0 0 0 10M22 6a9 9 0 0 1 0 10" /></>,
};

export default function ServiceIcon({ name }) {
  return (
    // The storm icon has no round line joins in the original artwork.
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin={name === 'storm' ? undefined : 'round'}>
      {PATHS[name]}
    </svg>
  );
}
