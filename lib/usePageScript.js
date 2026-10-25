'use client';

import { useEffect } from 'react';

const loadScript = (src) =>
  new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = s.onerror = resolve;
    document.body.appendChild(s);
  });

// Runs a page's DOM/animation setup once after hydration, then the Leaflet office map.
// Internal links are plain <a> tags, so every page is a full load and nothing needs tearing down.
export default function usePageScript(init) {
  useEffect(() => {
    if (window.__gpInit) return; // React strict mode runs effects twice in development
    window.__gpInit = true;
    // A failing animation must not unmount the page the way an uncaught effect error would.
    try {
      init();
    } catch (err) {
      console.error('Page script failed:', err);
    }
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js').then(() => loadScript('/js/office-map.js'));
  }, [init]);
}

// Window `load` may already have fired by the time React hydrates.
export const onLoad = (fn) => (document.readyState === 'complete' ? fn() : window.addEventListener('load', fn));
