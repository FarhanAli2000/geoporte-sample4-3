'use client';

import { useEffect, useRef, useState } from 'react';

// Every Australian suburb and town by state, built from the Australia Post locality list.
// Fetched once, the first time someone types into the field.
let auPlaces;
const loadAuPlaces = () => {
  auPlaces ||= fetch('/data/au-localities.json')
    .then((r) => r.json())
    .then((byState) => Object.entries(byState).flatMap(([state, list]) => list.map((name) => ({ name, state, key: name.toLowerCase() }))))
    .catch(() => ((auPlaces = undefined), []));
  return auPlaces;
};
const STATE_ABBR = {
  'Australian Capital Territory': 'ACT', 'New South Wales': 'NSW', 'Northern Territory': 'NT', Queensland: 'QLD',
  'South Australia': 'SA', Tasmania: 'TAS', Victoria: 'VIC', 'Western Australia': 'WA',
};

// Project location input. For Australia it suggests suburbs and cities from every state (the chosen state's first);
// picking one sets State / Territory to match. Other countries get plain free text.
export default function LocationField({ value, onChange, country, region, onRegion }) {
  const [places, setPlaces] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const list = useRef(null);
  const suggest = country === 'AU';

  const q = value.trim().toLowerCase();
  // All of Australia is always searchable; places in the chosen state are listed first.
  const rank = (p) => (p.key.startsWith(q) ? 0 : 2) + (p.state === region ? 0 : 1);
  const items = suggest && q.length >= 2
    ? places.filter((p) => p.key.includes(q)).sort((a, b) => rank(a) - rank(b)).slice(0, 8)
    : [];
  const show = open && items.length > 0;

  useEffect(() => {
    if (!suggest || !open) return;
    loadAuPlaces().then(setPlaces);
    const away = (e) => !root.current?.contains(e.target) && setOpen(false);
    document.addEventListener('pointerdown', away);
    return () => document.removeEventListener('pointerdown', away);
  }, [suggest, open]);

  useEffect(() => {
    list.current?.children[active]?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  function pick(p) {
    onChange(p.name);
    onRegion(p.state);
    setOpen(false);
  }

  function onKey(e) {
    if (!show) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, items.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); pick(items[active]); }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
  }

  return (
    <div className="field loc" ref={root}>
      <input
        id="f-location" name="location" placeholder=" " autoComplete={suggest ? 'off' : 'address-level2'}
        role={suggest ? 'combobox' : undefined} aria-autocomplete={suggest ? 'list' : undefined} aria-expanded={suggest ? show : undefined} aria-controls={suggest ? 'f-location-list' : undefined}
        value={value} onChange={(e) => { onChange(e.target.value); setActive(0); setOpen(true); }} onFocus={() => setOpen(true)} onKeyDown={onKey}
      />
      <label htmlFor="f-location">Project location (suburb or city)</label><span className="ul"></span>
      {show && (
        <div className="dial-pop loc-pop">
          <ul className="dial-list" id="f-location-list" role="listbox" ref={list} data-lenis-prevent aria-label="Suburb or city suggestions">
            {items.map((p, i) => (
              <li key={p.state + p.name} role="option" aria-selected={i === active} className={i === active ? 'on' : undefined} onMouseEnter={() => setActive(i)} onPointerDown={(e) => e.preventDefault()} onClick={() => pick(p)}>
                <span className="dial-name">{p.name}</span><span className="dial-code">{STATE_ABBR[p.state]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
