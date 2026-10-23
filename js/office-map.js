/* Office map: renders Geoporte's Australia + New Zealand offices into #officeMap.
   Needs Leaflet (loaded before this file). Office cards whose <b> text matches a city fly the map to that office. */
(function(){
  const el=document.getElementById('officeMap');
  if(!el)return;
  if(typeof L==='undefined'){el.hidden=true;return}

  const OFFICES=[
    {city:'Melbourne',country:'Australia',addr:'Tower 5, Collins Square, 727 Collins Street, Melbourne, VIC, 3008, Australia',ll:[-37.8203,144.9496]},
    {city:'Sydney',country:'Australia',addr:'Three International Towers, 300 Barangaroo Ave, Barangaroo NSW, Australia 2000',ll:[-33.8634,151.2019]},
    {city:'Perth',country:'Australia',addr:'108 St Georges Terrace, Perth, WA, Australia 6000',ll:[-31.9545,115.8566]},
    {city:'Auckland',country:'New Zealand',addr:'110 Carlton Gore Road, New Market, Auckland, New Zealand 1023',ll:[-36.8668,174.7795]}
  ];
// data
  const css=`
.c-map{position:relative;margin-top:2px;background:var(--card);border:1px solid var(--line);overflow:hidden}
.c-map .map{height:clamp(340px,48vw,500px);background:#0d0e12}
.c-map .leaflet-container{font-family:var(--f-body);background:#0d0e12}
.c-map .map-head{position:absolute;z-index:500;top:16px;left:16px;right:16px;display:flex;justify-content:space-between;align-items:flex-start;gap:12px;pointer-events:none}
.c-map .map-tag{pointer-events:auto;padding:10px 14px;background:rgba(10,10,12,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid var(--line-2);font-size:.56rem;font-weight:700;letter-spacing:.24em;text-transform:uppercase;color:var(--fg)}
.c-map .map-tag b{color:var(--amber);font-weight:700}
.c-map .map-chips{pointer-events:auto;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px}
.c-map .map-chips button{padding:7px 13px;border-radius:999px;background:rgba(10,10,12,.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid var(--line-2);font-size:.72rem;color:rgba(242,240,236,.85);transition:background .3s,color .3s,border-color .3s}
.c-map .map-chips button:hover{border-color:var(--amber);color:var(--amber)}
.c-map .map-chips button.on{background:var(--amber);border-color:var(--amber);color:#111}
.gp-pin{position:relative;width:18px;height:18px}
.gp-pin i{position:absolute;inset:0;border-radius:50%;background:var(--amber);border:3px solid #0a0a0c;box-shadow:0 0 0 1.5px var(--amber),0 0 18px var(--amber)}
.gp-pin::before{content:"";position:absolute;inset:-10px;border-radius:50%;border:1.5px solid var(--amber);opacity:0;animation:gpPulse 2.2s ease-out infinite}
.gp-pin span{position:absolute;left:24px;top:50%;translate:0 -50%;white-space:nowrap;padding:4px 9px;background:rgba(10,10,12,.85);border:1px solid var(--line-2);font:500 .72rem/1.2 var(--f-display);letter-spacing:.06em;color:var(--fg)}
.gp-pin.on i{background:#fff}
@keyframes gpPulse{0%{opacity:.9;scale:.4}100%{opacity:0;scale:1.4}}
.c-map .leaflet-popup-content-wrapper{background:var(--bg-3);color:var(--fg);border:1px solid rgba(90,163,232,.5);border-radius:0;box-shadow:0 20px 50px rgba(0,0,0,.6)}
.c-map .leaflet-popup-tip{background:var(--bg-3)}
.c-map .leaflet-popup-content{margin:16px 18px;font-size:.8rem;line-height:1.5;min-width:200px}
.c-map .leaflet-popup-content b{display:block;font:300 1.15rem var(--f-display)}
.c-map .leaflet-popup-content small{display:block;font-size:.54rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--amber);margin:2px 0 8px}
.c-map .leaflet-popup-content p{margin:0 0 10px;color:var(--muted)}
.c-map .leaflet-popup-content a{font-size:.58rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--amber)}
.c-map a.leaflet-popup-close-button{color:var(--muted)}
.c-map .leaflet-bar{border:1px solid var(--line-2)!important;border-radius:0}
.c-map .leaflet-bar a{background:rgba(10,10,12,.85);color:var(--fg);border-color:var(--line-2)}
.c-map .leaflet-bar a:hover{background:var(--amber);color:#111}
.c-map .leaflet-control-attribution{background:rgba(10,10,12,.7);color:var(--dim);font-size:.6rem}
.c-map .leaflet-control-attribution a{color:var(--muted)}
.office[role=button]{cursor:pointer}
.office.map-on{border-color:var(--amber)}
@media (max-width:560px){.c-map .map-head{flex-direction:column}.c-map .map-chips{justify-content:flex-start}}
@media (prefers-reduced-motion:reduce){.gp-pin::before{animation:none}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  el.innerHTML=`<div class="map-head"><div class="map-tag"><b>${OFFICES.length}</b> offices · Australia &amp; New Zealand</div><div class="map-chips" role="group" aria-label="Show office on map"><button type="button" class="on" data-k="-1">All</button>${OFFICES.map((o,i)=>`<button type="button" data-k="${i}">${o.city}</button>`).join('')}</div></div><div class="map" role="region" aria-label="Map of Geoporte office locations"></div>`;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const map=L.map(el.querySelector('.map'),{scrollWheelZoom:false,zoomSnap:1,zoomControl:false,attributionControl:true,worldCopyJump:false});
  L.control.zoom({position:'bottomright'}).addTo(map);
  // Esri dark grey canvas: no API key needed; labels come from a separate reference layer
  const ESRI='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/';
  L.tileLayer(ESRI+'World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',{maxZoom:16,attribution:'Tiles &copy; <a href="https://www.esri.com">Esri</a> &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors'}).addTo(map);
  L.tileLayer(ESRI+'World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',{maxZoom:16,pane:'shadowPane'}).addTo(map);

  const bounds=L.latLngBounds(OFFICES.map(o=>o.ll));
  const fitAll=()=>map.fitBounds(bounds,{padding:[70,70],animate:!reduce});
  const markers=OFFICES.map((o,i)=>{
    const icon=L.divIcon({className:'',html:`<div class="gp-pin"><i></i><span>${o.city}</span></div>`,iconSize:[18,18],iconAnchor:[9,9],popupAnchor:[0,-12]});
    const dir='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(o.addr);
    return L.marker(o.ll,{icon,title:`${o.city}, ${o.country}`,keyboard:true}).addTo(map)
      .bindPopup(`<b>${o.city}</b><small>${o.country}</small><p>${o.addr}</p><a href="${dir}" target="_blank" rel="noopener">Get directions →</a>`)
      .on('click',()=>select(i,false));
  });

  const chips=[...el.querySelectorAll('.map-chips button')];
  const cards=[...document.querySelectorAll('.office')].map(c=>{const b=c.querySelector('b');const k=b?OFFICES.findIndex(o=>b.textContent.trim().startsWith(o.city)):-1;return{c,k}}).filter(x=>x.k>-1);
  function select(k,fly){
    chips.forEach(b=>b.classList.toggle('on',+b.dataset.k===k));
    cards.forEach(({c,k:j})=>c.classList.toggle('map-on',j===k));
    markers.forEach((m,j)=>{const p=m.getElement()&&m.getElement().querySelector('.gp-pin');if(p)p.classList.toggle('on',j===k)});
    if(k<0){map.closePopup();fitAll();return}
    if(fly){map.flyTo(OFFICES[k].ll,14,{duration:reduce?0:1.4});markers[k].openPopup()}
  }
  chips.forEach(b=>b.addEventListener('click',()=>select(+b.dataset.k,true)));
  cards.forEach(({c,k})=>{c.setAttribute('role','button');c.tabIndex=0;c.setAttribute('aria-label',`Show ${OFFICES[k].city} office on map`);
    const go=()=>{select(k,true);el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'})};
    c.addEventListener('click',e=>{if(e.target.closest('a'))return;go()});
    c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}})});

  fitAll();
  new ResizeObserver(()=>map.invalidateSize()).observe(el);
})();
