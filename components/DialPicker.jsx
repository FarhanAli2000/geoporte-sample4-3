'use client';

import { useEffect, useRef, useState } from 'react';
import { COUNTRIES, countryByCode } from '@/lib/countries';

// Flag images rather than emoji: Windows browsers show flag emoji as plain letters.
const flagSrc = (code) => `https://flagcdn.com/${code.toLowerCase()}.svg`;
const Flag = ({ code }) => <img className="flag" src={flagSrc(code)} alt="" width="20" height="15" loading="lazy" />;

// Phone country code dropdown with flags and type-to-search.
export default function DialPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const search = useRef(null);
  const list = useRef(null);

  const q = query.trim().toLowerCase().replace(/^\+/, '');
  const items = q
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase() === q || c.dial.slice(1).startsWith(q))
    : COUNTRIES;
  const current = countryByCode(value);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(Math.max(0, COUNTRIES.findIndex((c) => c.code === value)));
    search.current?.focus();
    const away = (e) => !root.current?.contains(e.target) && setOpen(false);
    document.addEventListener('pointerdown', away);
    return () => document.removeEventListener('pointerdown', away);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    list.current?.children[active]?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  function pick(code) {
    onChange(code);
    setOpen(false);
    root.current?.querySelector('button')?.focus();
  }

  function onKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, items.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); if (items[active]) pick(items[active].code); }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false); root.current?.querySelector('button')?.focus(); }
  }

  return (
    <div className="dial" ref={root}>
      <button type="button" className="dial-btn" aria-label={`Phone country code: ${current.name} ${current.dial}`} aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <Flag code={current.code} /><span>{current.dial}</span>
      </button>
      {open && (
        <div className="dial-pop" onKeyDown={onKey}>
          <input ref={search} className="dial-search" type="text" placeholder="Search country or code" aria-label="Search country or code" value={query} onChange={(e) => { setQuery(e.target.value); setActive(0); }} />
          <ul className="dial-list" role="listbox" ref={list} data-lenis-prevent aria-label="Country codes">
            {items.map((c, i) => (
              <li key={c.code} role="option" aria-selected={c.code === value} className={i === active ? 'on' : undefined} onMouseEnter={() => setActive(i)} onClick={() => pick(c.code)}>
                <Flag code={c.code} /><span className="dial-name">{c.name}</span><span className="dial-code">{c.dial}</span>
              </li>
            ))}
            {!items.length && <li className="dial-none">No matches</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
