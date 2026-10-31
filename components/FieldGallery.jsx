'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Close } from './icons';

const PHOTOS = [
  ['/images/real/grove-of-honour-team.jpg', 'Robinvale site investigation team with the Geoporte sign'],
  ['/images/real/geoporte-vests-drilling.jpg', 'Geoporte engineers supervising drilling'],
  ['/images/real/directors-site-visit.jpg', 'Geoporte directors on a site visit'],
  ['/images/real/core-logging-team.jpg', 'Logging rock core with the drilling crew'],
  ['/images/real/office-team.jpg', 'Back at the Geoporte office'],
  ['/images/real/walking-geoporte-vests.jpg', 'Walking a site in Geoporte vests'],
  ['/images/real/team-yellow-rig.jpg', 'On site with the drilling rig'],
  ['/images/real/reviewing-drawings.jpg', 'Reviewing drawings on site'],
  ['/images/real/nz-site-visit.jpg', 'Site visit in New Zealand'],
  ['/images/real/award-ags.jpg', 'Accepting an award at an Australian Geomechanics Society event'],
  ['/images/real/drone-wave-car.jpg', 'Geoporte team waving to the drone'],
  ['/images/real/team-creek-site.jpg', 'Geoporte team at a creek bank remediation site'],
];
const ROWS = [PHOTOS.slice(0, 7).map((_, i) => i), PHOTOS.slice(7).map((_, i) => i + 7)];

// Two marquee rows of team photos (opposite directions, pause on hover) with a full-screen viewer.
export default function FieldGallery() {
  const [open, setOpen] = useState(-1);
  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback((d) => setOpen((k) => (k + d + PHOTOS.length) % PHOTOS.length), []);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = prev;
      removeEventListener('keydown', onKey);
    };
  }, [open, close, step]);

  return (
    <section className="gal" id="in-the-field">
      <div className="wrap gal-head">
        <div className="sec-head">
          <div className="cap">In the field</div>
          <h2 className="split">On Site, In The Room, On Stage</h2>
        </div>
        <p className="rv">Our engineers on site investigations, in the office and at industry events. Click any photo to view it full size.</p>
      </div>
      <div className="gal-rows rv">
        {ROWS.map((row, r) => (
          <div className={r ? 'gal-row rev' : 'gal-row'} key={r}>
            <div className="gal-track">
              {/* the row is rendered twice so the loop is seamless; the copy is hidden from keyboard and screen readers */}
              {[...row, ...row].map((k, i) => (
                <button type="button" className="gal-card" key={i} onClick={() => setOpen(k)} tabIndex={i < row.length ? 0 : -1} aria-hidden={i >= row.length || undefined}>
                  <img src={PHOTOS[k][0]} alt={PHOTOS[k][1]} loading="lazy" />
                  <span className="gal-cap">{PHOTOS[k][1]}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {open >= 0 && (
        <div className="gal-lb" role="dialog" aria-modal="true" aria-label="Photo viewer" data-lenis-prevent onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={PHOTOS[open][0]} alt={PHOTOS[open][1]} />
            <figcaption>
              <span>{PHOTOS[open][1]}</span>
              <b>
                {open + 1} / {PHOTOS.length}
              </b>
            </figcaption>
          </figure>
          <button type="button" className="gal-nav prev" aria-label="Previous photo" onClick={(e) => (e.stopPropagation(), step(-1))}><ChevronLeft /></button>
          <button type="button" className="gal-nav next" aria-label="Next photo" onClick={(e) => (e.stopPropagation(), step(1))}><ChevronRight /></button>
          <button type="button" className="gal-x" aria-label="Close" onClick={close}><Close /></button>
        </div>
      )}
    </section>
  );
}
