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
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (s) => s.replace(/&/g, '&amp;');

  /* ---------- data: geoporte.com.au/stormwater-and-flood-modelling ---------- */
  const IC = {
    model:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c3-3 5-3 8 0s5 3 8 0 5-3 8 0"/><path d="M4 19c3-3 5-3 8 0s5 3 8 0 5-3 8 0"/><path d="M4 26c3-3 5-3 8 0s5 3 8 0 5-3 8 0"/></svg>',
    risk: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4L3 27h26z"/><path d="M16 13v6M16 23v.5"/></svg>',
    custom:
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 26l4-1 14-14-3-3L7 22z"/><path d="M19 10l3 3M6 8h8M6 12h5"/></svg>',
    qa: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4l11 4v7c0 7-5 11-11 13C10 26 5 22 5 15V8z"/><path d="M11 16l3.5 3.5L21 13"/></svg>',
    data: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5v22h22"/><path d="M10 21v-5M15 21v-9M20 21v-6M25 21V9"/></svg>',
  };
  const COMP = [
    [
      'Advanced Modelling Techniques',
      'model',
      'Our team utilizes state-of-the-art modelling techniques and software to simulate stormwater runoff, flood inundation, and drainage systems. We employ a range of models, including hydrological, hydraulic, and GIS-based models, to accurately predict water flow and identify potential flood risks.',
    ],
    [
      'Risk Assessment and Mitigation',
      'risk',
      'We conduct comprehensive risk assessments to evaluate the potential impact of flooding on infrastructure, communities, and the environment. By identifying vulnerabilities & implementing appropriate mitigation measures, we help clients minimize risk & enhance resilience to extreme weather events.',
    ],
    [
      'Customized Solutions',
      'custom',
      'We understand that each project is unique, requiring a tailored approach to address specific challenges. Our experts work closely with clients to develop customized solutions that align with project objectives, regulatory requirements, and budget constraints.',
    ],
    [
      'Regulatory Compliance',
      'qa',
      'Our team has extensive experience navigating regulatory frameworks governing stormwater & flood management. We assist clients in achieving compliance with local, state, & federal regulations, ensuring that projects meet all necessary permits & approvals.',
    ],
    [
      'Data Analysis and Visualization',
      'data',
      'We employ advanced data analysis techniques to interpret complex datasets and derive actionable insights. Through the use of sophisticated visualization tools, we communicate results effectively to stakeholders, enabling informed decision-making.',
    ],
  ];
  const OFFERED = [
    [
      'Flood Hazard Mapping',
      'We develop accurate flood hazard maps to delineate areas prone to flooding and assess potential impacts on infrastructure and communities.',
      '/images/civil-detailed.jpg',
    ],
    [
      'Stormwater Management Plans',
      'We design comprehensive stormwater management plans to mitigate flood risk, improve water quality, and enhance overall drainage infrastructure.',
      '/images/storm-field.jpg',
    ],
    [
      'Hydraulic Modelling',
      'Using advanced hydraulic modelling techniques, we simulate flow patterns in rivers, streams, and urban drainage systems to assess flood risk and evaluate infrastructure performance.',
      '/images/civil-site.jpg',
    ],
    [
      'Climate Change Adaptation',
      'We help clients anticipate the impacts of climate change on stormwater and flood management, developing adaptive strategies to enhance resilience and minimize vulnerability.',
      '/images/storm-plans.jpg',
    ],
    [
      'Emergency Response Planning',
      'We assist clients in developing emergency response plans to effectively manage flood events and minimize damage to property and infrastructure.',
      '/images/storm-emergency.jpg',
    ],
  ];
  $('#compGrid').insertAdjacentHTML(
    'beforeend',
    COMP.map(
      (c, i) =>
        `<article class="ccard"><div class="top"><span class="ic">${IC[c[1]]}</span><span class="n">${pad(i + 1)}</span></div><h3>${c[0]}</h3><p>${esc(c[2])}</p><span class="edge"></span></article>`,
    ).join(''),
  );
  $('#oList').innerHTML = OFFERED.map(
    (o, i) =>
      `<li class="o-item${i ? '' : ' on'}" data-i="${i}"><span class="n">${pad(i + 1)}</span><div><h3>${o[0]}</h3><p>${o[1]}</p><div class="m-img"><img src="${o[2]}" alt="${o[0]}" loading="lazy"></div></div></li>`,
  ).join('');
  $('#oFrame').innerHTML = OFFERED.map((o, i) => `<img src="${o[2]}" alt="${o[0]}" class="${i ? '' : 'on'}" loading="lazy">`).join('');
  $('#oTot').textContent = pad(OFFERED.length);
  const items = $$('.o-item'),
    frames = $$('#oFrame img');
  const showO = (k) => {
    items.forEach((it, j) => it.classList.toggle('on', j === k));
    frames.forEach((im, j) => im.classList.toggle('on', j === k));
    $('#oCur').textContent = pad(k + 1);
    $('#oName').textContent = OFFERED[k][0];
    $('#oBar').style.width = ((k + 1) / OFFERED.length) * 100 + '%';
  };
  showO(0);
  const oio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) showO(+e.target.dataset.i);
      }),
    { rootMargin: '-45% 0px -45% 0px' },
  );
  items.forEach((it) => {
    oio.observe(it);
    it.addEventListener('mouseenter', () => showO(+it.dataset.i));
  });

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
    nav.classList.toggle('hide', y > lastY && y > 600 && !document.body.classList.contains('menu-open'));
    lastY = y;
    prog.style.transform = `scaleX(${p})`;
    tt.classList.toggle('show', y > 700);
    ring.style.strokeDashoffset = 144.5 * (1 - p);
  }
  addEventListener('scroll', onS, { passive: true });
  onS();
  const links = $$('#menu > li > a'),
    ink = $('#ink'),
    here = $('#menu > li > a.active');
  const mv = (a) => {
    if (!a) return;
    ink.style.left = a.parentElement.offsetLeft + 13 + 'px';
    ink.style.width = a.offsetWidth - 26 + 'px';
  };
  links.forEach((a) => a.addEventListener('mouseenter', () => mv(a)));
  $('#menu').addEventListener('mouseleave', () => mv(here));
  setTimeout(() => mv(here), 300);
  document.fonts.ready.then(() => mv(here)); // re-measure once the web font has replaced the fallback
  addEventListener('resize', () => mv(here));
  $('#burger').addEventListener('click', () => document.body.classList.toggle('menu-open'));
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.body.classList.remove('menu-open');
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
    document.addEventListener('mouseover', (e) => cur.classList.toggle('hov', !!e.target.closest('a,button')));
    $$('.ccard').forEach((c) =>
      c.addEventListener('mousemove', (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', e.clientX - r.left + 'px');
        c.style.setProperty('--my', e.clientY - r.top + 'px');
      }),
    );
    $$('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.22}px ${(e.clientY - r.top - r.height / 2) * 0.32}px`;
      });
      el.addEventListener('mouseleave', () => (el.style.translate = ''));
    });
  }

  /* ---------- video ---------- */
  const bv = $('#bandVideo');
  new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        e.isIntersecting ? bv.play().catch(() => {}) : bv.pause();
      }),
    { threshold: 0.05 },
  ).observe(bv);

  /* ---------- animations ---------- */
  if (G && !reduce) {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({ defaults: { ease: 'power4.out' } })
      .from('.nav-in > *', { y: -26, opacity: 0, duration: 0.8, stagger: 0.08, clearProps: 'transform,opacity' })
      .from('#pheroMedia img', { scale: 1.25, duration: 2.4, ease: 'power3.out' }, 0)
      .from('#crumb', { x: -20, opacity: 0, duration: 0.8 }, 0.2)
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
    gsap.from('#iMedia', {
      clipPath: 'inset(100% 0 0 0)',
      duration: 1.4,
      ease: 'power4.inOut',
      scrollTrigger: { trigger: '#iMedia', start: 'top 80%' },
    });
    gsap.fromTo(
      '#iMedia img',
      { scale: 1.2 },
      { scale: 1, ease: 'none', scrollTrigger: { trigger: '#iMedia', start: 'top bottom', end: 'bottom top', scrub: true } },
    );
    gsap.from('.ccard', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: '#compGrid', start: 'top 82%' },
    });
    gsap.from('#oFrame', {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.3,
      ease: 'power4.inOut',
      scrollTrigger: { trigger: '#oFrame', start: 'top 85%' },
    });
    gsap.fromTo(
      '#bandMedia',
      { yPercent: -8 },
      { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: true } },
    );
    gsap.from('#bandTitle .line > span', {
      yPercent: 110,
      skewY: 5,
      duration: 1.2,
      stagger: 0.14,
      ease: 'power4.out',
      scrollTrigger: { trigger: '.band', start: 'top 70%' },
    });
    gsap.from('.office', {
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
    onLoad(() => ScrollTrigger.refresh());
  }
}

export default function PageScript() {
  usePageScript(init);
  return null;
}
