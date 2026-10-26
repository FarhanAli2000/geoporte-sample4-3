'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import usePageScript, { onLoad } from '@/lib/usePageScript';

// Ported unchanged from the original static page: scroll, cursor, nav and GSAP animations.
function init() {
  const $ = (s, c = document) => c.querySelector(s),
    $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches,
    G = typeof gsap !== 'undefined',
    fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  $('#yr').textContent = new Date().getFullYear();

  /* ---------- helpers ---------- */
  function split(el) {
    const walk = (n) => {
      [...n.childNodes].forEach((c) => {
        if (c.nodeType === 3) {
          const f = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) {
              f.appendChild(document.createTextNode(' '));
              return;
            }
            const w = document.createElement('span');
            w.className = 'w';
            const i = document.createElement('span');
            i.className = 'wi';
            i.textContent = p;
            w.appendChild(i);
            f.appendChild(w);
          });
          c.replaceWith(f);
        } else if (c.nodeType === 1) walk(c);
      });
    };
    walk(el);
    return $$('.wi', el);
  }
  const splits = $$('.split').map((el) => ({ el, words: split(el) }));
  $$('.pill').forEach((b) => {
    const tn = [...b.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim());
    if (!tn) return;
    const t = tn.textContent.trim();
    const r = document.createElement('span');
    r.className = 'roll';
    const i = document.createElement('span');
    i.textContent = t;
    i.dataset.t = t;
    r.appendChild(i);
    tn.replaceWith(r);
    r.after(document.createTextNode(' '));
  });
  $$('.pill').forEach((p) =>
    p.addEventListener('mousemove', (e) => {
      const r = p.getBoundingClientRect();
      p.style.setProperty('--px', e.clientX - r.left + 'px');
      p.style.setProperty('--py', e.clientY - r.top + 'px');
    }),
  );

  /* ---------- lenis ---------- */
  let lenis = null;
  if (!reduce && typeof Lenis !== 'undefined') {
    try {
      lenis = new Lenis({ duration: 1.2 });
      if (G) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((t) => lenis.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);
      } else {
        const r = (t) => {
          lenis.raf(t);
          requestAnimationFrame(r);
        };
        requestAnimationFrame(r);
      }
    } catch (e) {
      lenis = null;
    }
  }
  const go = (id) => {
    const t = id === '#top' ? document.body : $(id);
    if (!t) return;
    lenis ? lenis.scrollTo(t, { offset: -60 }) : t.scrollIntoView({ behavior: 'smooth' });
  };
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id.length < 2 || !$(id)) return;
    e.preventDefault();
    document.body.classList.remove('menu-open');
    go(id);
  });

  /* ---------- nav ---------- */
  const nav = $('#nav'),
    prog = $('#progress'),
    tt = $('#totop'),
    ring = $('#topRing');
  let lastY = 0;
  function onS() {
    const y = scrollY,
      m = document.documentElement.scrollHeight - innerHeight,
      p = m > 0 ? y / m : 0;
    nav.classList.toggle('scrolled', y > 30);
    lastY = y;
    prog.style.transform = `scaleX(${p})`;
    tt.classList.toggle('show', y > 700);
    ring.style.strokeDashoffset = 144.5 * (1 - p);
  }
  addEventListener('scroll', onS, { passive: true });
  onS();
  const links = $$('#menu > li > a'),
    ink = $('#ink');
  const mv = (a) => {
    if (!a) {
      ink.style.width = '0px';
      return;
    }
    ink.style.left = a.parentElement.offsetLeft + 13 + 'px';
    ink.style.width = a.offsetWidth - 26 + 'px';
  };
  links.forEach((a) => a.addEventListener('mouseenter', () => mv(a)));
  $('#menu').addEventListener('mouseleave', () => mv(null));
  mv(null);
  $('#burger').addEventListener('click', () => document.body.classList.toggle('menu-open'));

  /* ---------- page viewer ---------- */
  const V = $('#viewer'),
    VI = $('#vImg'),
    VC = $('#vCap');
  let lastDoc = null;
  const openV = (b) => {
    lastDoc = b;
    VI.src = b.dataset.view;
    VI.alt = b.querySelector('img').alt;
    VC.textContent = b.dataset.cap;
    V.classList.add('open');
    V.setAttribute('aria-hidden', 'false');
    lenis && lenis.stop();
    setTimeout(() => $('#vx').focus(), 50);
  };
  const closeV = () => {
    if (!V.classList.contains('open')) return;
    V.classList.remove('open');
    V.setAttribute('aria-hidden', 'true');
    lenis && lenis.start();
    lastDoc && lastDoc.focus();
  };
  $$('.doc').forEach((b) => b.addEventListener('click', () => openV(b)));
  $('#vx').addEventListener('click', closeV);
  V.addEventListener('click', (e) => {
    if (e.target === V) closeV();
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeV();
      document.body.classList.remove('menu-open');
    }
  });

  /* ---------- cursor + magnetic ---------- */
  const cur = $('#cursor'),
    dot = $('#cursorDot');
  if (fine && !reduce) {
    let mx = -200,
      my = -200,
      cx = mx,
      cy = my;
    addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    });
    (function l() {
      cx += (mx - cx) * 0.16;
      cy += (my - cy) * 0.16;
      cur.style.transform = `translate(${cx}px,${cy}px)`;
      requestAnimationFrame(l);
    })();
    document.addEventListener('mouseover', (e) => cur.classList.toggle('hov', !!e.target.closest('a,button,summary')));
    $$('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.22}px ${(e.clientY - r.top - r.height / 2) * 0.32}px`;
      });
      el.addEventListener('mouseleave', () => (el.style.translate = ''));
    });
  }

  /* ---------- animations ---------- */
  if (G && !reduce) {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({ defaults: { ease: 'power4.out' } })
      .from('.nav-in > *', { y: -26, opacity: 0, duration: 0.8, stagger: 0.08, clearProps: 'transform,opacity' })
      .from('#pheroMedia img', { scale: 1.25, duration: 2.4, ease: 'power3.out' }, 0)
      .from('#pTitle .line > span', { yPercent: 110, duration: 1.2, stagger: 0.12 }, 0.3)
      .from('#pSide', { y: 30, opacity: 0, duration: 1 }, 0.7);
    gsap.to('#pheroMedia', {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: '.phero', start: 'top top', end: 'bottom top', scrub: true },
    });
    splits.forEach(({ el, words }) =>
      gsap.from(words, {
        yPercent: 115,
        rotate: 3,
        duration: 1.1,
        stagger: 0.05,
        ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      }),
    );
    $$('.rv').forEach((el) =>
      gsap.from(el, {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: { trigger: el, start: 'top 92%' },
      }),
    );
    $$('.sec-head .cap').forEach((c) =>
      gsap.from(c, { x: -20, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 92%' } }),
    );
    $$('.pub').forEach((p) => {
      gsap.from(p.querySelector('.doc'), {
        y: 80,
        rotate: p.classList.contains('rev') ? 3 : -3,
        opacity: 0,
        duration: 1.3,
        ease: 'power4.out',
        clearProps: 'transform,opacity,rotate',
        scrollTrigger: { trigger: p, start: 'top 80%' },
      });
      gsap.from(p.querySelectorAll('.pub-copy > *'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: p, start: 'top 80%' },
      });
    });
    gsap.from('#pfMedia .doc', {
      y: 80,
      rotate: 4,
      opacity: 0,
      duration: 1.3,
      ease: 'power4.out',
      clearProps: 'transform,opacity,rotate',
      scrollTrigger: { trigger: '#pfMedia', start: 'top 85%' },
    });
    if ($('#offices')) gsap.from('.office', {
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: '#offices', start: 'top 88%' },
    });
    gsap.from('#bigword span', {
      yPercent: 100,
      duration: 1.3,
      stagger: 0.06,
      ease: 'power4.out',
      scrollTrigger: { trigger: '#bigword', start: 'top 98%' },
    });
    $$('.abs').forEach((d) => d.addEventListener('toggle', () => ScrollTrigger.refresh()));
    onLoad(() => ScrollTrigger.refresh());
  }
}

export default function PageScript() {
  usePageScript(init);
  return null;
}
