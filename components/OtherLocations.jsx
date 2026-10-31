'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ALL_OFFICES } from '@/lib/nav';
import { Arrow, Close, Pin } from './icons';
import 'leaflet/dist/leaflet.css';
import '@/styles/world-map.css';

const COUNTRIES = [...new Set(ALL_OFFICES.map((o) => o[1]))];
// Label side per office so the close-together Melbourne / Sydney / Auckland labels don't overlap at world zoom.
const SIDES = { Perth: ['left', -12, 0], Melbourne: ['bottom', 0, 12], Sydney: ['top', 0, -12] };
const side = (city) => {
  const [direction, x, y] = SIDES[city] || ['right', 12, 0];
  return { direction, offset: [x, y] };
};
const directions = (addr) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(addr);

// Footer "Other locations" button on the AU and NZ sites: opens a world map of every Geoporte office.
// Leaflet loads on first open so it costs nothing on pages where nobody uses it.
export default function OtherLocations() {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(-1);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const mapEl = useRef(null);
  const map = useRef(null);
  const pins = useRef([]);
  const trigger = useRef(null);
  const closeBtn = useRef(null);

  const fitAll = () => map.current.fitBounds(ALL_OFFICES.map((o) => [o[3], o[4]]), { padding: [60, 60], maxZoom: 4 });

  useEffect(() => {
    if (!open) return;
    closeBtn.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', onKey);
    if (map.current) {
      map.current.invalidateSize();
      fitAll();
    } else {
      import('leaflet').then(({ default: L }) => {
        if (map.current || !mapEl.current) return;
        const m = L.map(mapEl.current, { minZoom: 2, maxZoom: 19, worldCopyJump: true, zoomControl: true, attributionControl: true });
        // Esri street map (default) and satellite imagery: free with attribution, no API key.
        const esri = (svc) => `https://server.arcgisonline.com/ArcGIS/rest/services/${svc}/MapServer/tile/{z}/{y}/{x}`;
        const street = L.tileLayer(esri('World_Street_Map'), { maxZoom: 19, attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors' }).addTo(m);
        const satellite = L.layerGroup([
          L.tileLayer(esri('World_Imagery'), { maxZoom: 19, attribution: 'Tiles &copy; Esri &mdash; Maxar, Earthstar Geographics' }),
          L.tileLayer(esri('Reference/World_Boundaries_and_Places'), { maxZoom: 19 }),
        ]);
        L.control.layers({ Map: street, Satellite: satellite }, null, { position: 'topright', collapsed: false }).addTo(m);
        const icon = L.divIcon({ className: 'wpin', html: '<i></i>', iconSize: [18, 18], iconAnchor: [9, 9] });
        pins.current = ALL_OFFICES.map(([city, country], k) =>
          L.marker([ALL_OFFICES[k][3], ALL_OFFICES[k][4]], { icon, title: `${city}, ${country}`, keyboard: true })
            .bindTooltip(`<b>${city}</b><small>${country}</small>`, { permanent: true, ...side(city), className: 'wlabel' })
            .on('click', () => setSel(k))
            .addTo(m),
        );
        map.current = m;
        fitAll();
      });
    }
    return () => removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!map.current) return;
    pins.current.forEach((p, k) => p.getElement()?.classList.toggle('on', k === sel));
    if (sel > -1) map.current.flyTo([ALL_OFFICES[sel][3], ALL_OFFICES[sel][4]], 14, { duration: 1.2 });
  }, [sel]);

  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  const showAll = () => {
    setSel(-1);
    if (map.current) fitAll();
  };

  return (
    <>
      <button type="button" className="floc" ref={trigger} onClick={() => setOpen(true)} aria-haspopup="dialog">
        <span className="fpin"><Pin /></span>
        <span><b>Other locations</b><small>Geoporte offices worldwide</small></span>
        <Arrow />
      </button>
      {mounted && createPortal(
      <div className={'wmap' + (open ? ' open' : '')} role="dialog" aria-modal="true" aria-labelledby="wmapTitle" aria-hidden={!open} data-lenis-prevent onClick={(e) => e.target === e.currentTarget && close()}>
        <div className="wmap-box">
          <div className="wmap-head">
            <div>
              <span className="wcap">Geoporte worldwide</span>
              <h3 id="wmapTitle">Our Offices Around The World</h3>
            </div>
            <button type="button" className="wx" ref={closeBtn} onClick={close} aria-label="Close world map"><Close /></button>
          </div>
          <div className="wmap-body">
            <div className="wmap-map" ref={mapEl} />
            <div className="wmap-side">
              <button type="button" className={'wall' + (sel < 0 ? ' on' : '')} onClick={showAll}>
                Show all {ALL_OFFICES.length} offices
              </button>
              {COUNTRIES.map((c) => (
                <div key={c} className="wgroup">
                  <h4>{c}<small>{ALL_OFFICES.filter((o) => o[1] === c).length}</small></h4>
                  <ul>
                    {ALL_OFFICES.map((o, k) => o[1] !== c ? null : (
                      <li key={o[0]} className={k === sel ? 'on' : undefined}>
                        <button type="button" onClick={() => setSel(k)}><b>{o[0]}</b><span>{o[2]}</span></button>
                        <a href={directions(o[2])} target="_blank" rel="noopener noreferrer">Directions <Arrow /></a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>,
      document.body, // outside the footer, whose animated (transformed) columns would trap a fixed overlay
      )}
    </>
  );
}
