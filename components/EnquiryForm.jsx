'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Arrow } from './icons';
import { EMAIL } from '@/lib/nav';
import { COUNTRIES, REGIONS, countryByCode, siteCountry } from '@/lib/countries';
import '@/styles/enquiry-form.css';

const SECTOR_CHIPS = ['Transport', 'Buildings', 'Water', 'Ports & Marine', 'Energy', 'Mining', 'Other'];
const ENQUIRY_TYPES = ['New project', 'Request a fee proposal', 'General enquiry', 'Careers'];
// Submissions go to /api/enquiry, which emails them to the admin inbox (see app/api/enquiry/route.js).
export default function EnquiryForm() {
  const [sectors, setSectors] = useState([]);
  const [country, setCountry] = useState('AU');
  const [dial, setDial] = useState('AU');
  const [dialTouched, setDialTouched] = useState(false);
  const [region, setRegion] = useState('');
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  // Country and phone code default to the domain the site is on (.com.au, .co.nz, .ae).
  useEffect(() => {
    const c = siteCountry(location.hostname);
    setCountry(c);
    setDial(c);
  }, []);

  const regions = REGIONS[country];
  const toggleSector = (s) => setSectors((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  function changeCountry(c) {
    setCountry(c);
    setRegion('');
    if (!dialTouched) setDial(c);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const field = (name) => String(new FormData(form).get(name) || '').trim();
    const name = field('name'), email = field('email'), phone = field('phone'), message = field('message');
    const shake = () => gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.5, ease: 'elastic.out(1,.3)' });

    // Name only what is missing, and put the cursor in the first one.
    const missing = [
      [!name, 'name', 'your name'],
      [!/^\S+@\S+\.\S+$/.test(email), 'email', 'a valid email'],
      [!/^[\d\s()+-]{6,20}$/.test(phone), 'phone', 'your phone number'],
      [!message, 'message', 'a few project details'],
    ].filter(([bad]) => bad);
    if (missing.length) {
      const list = missing.map((m) => m[2]);
      const text = list.length > 1 ? list.slice(0, -1).join(', ') + ' and ' + list.at(-1) : list[0];
      setStatus({ type: 'err', text: `Please add ${text}.` });
      form.elements[missing[0][1]]?.focus();
      shake();
      return;
    }
    if (!form.elements.consent.checked) {
      setStatus({ type: 'err', text: 'Please tick the privacy consent box so we can respond to your enquiry.' });
      shake();
      return;
    }

    setSending(true);
    setStatus({ type: '', text: 'Sending…' });
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: `${countryByCode(dial).dial} ${phone}`,
          organisation: field('organisation'),
          country: countryByCode(country).name,
          region,
          location: field('location'),
          enquiryType: field('enquiryType'),
          sectors,
          message,
          consent: true,
          website: field('website'),
          page: location.pathname,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error('not sent');
      setStatus({ type: 'ok', text: `Thank you, ${name.split(' ')[0]}. The right engineer will reply within one business day.` });
      form.reset();
      setSectors([]);
      setRegion('');
    } catch {
      setStatus({ type: 'err', text: `Sorry, your enquiry could not be sent. Please email ${EMAIL} directly.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form rv" id="form" noValidate onSubmit={onSubmit}>
      <h3>Start a conversation</h3>
      {/* Honeypot: hidden from people, bots that fill it are ignored by the server */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <div className="field"><input id="f-name" name="name" placeholder=" " autoComplete="name" required /><label htmlFor="f-name">Full name</label><span className="ul"></span></div>
      <div className="field"><input id="f-email" name="email" type="email" placeholder=" " autoComplete="email" required /><label htmlFor="f-email">Email</label><span className="ul"></span></div>
      <div className="field sel phone">
        <div className="phone-row">
          <select aria-label="Phone country code" value={dial} onChange={(e) => { setDial(e.target.value); setDialTouched(true); }}>
            {COUNTRIES.map((c) => <option key={c.code} value={c.code}>{c.code} {c.dial}</option>)}
          </select>
          <input id="f-phone" name="phone" type="tel" placeholder="Phone number" autoComplete="tel-national" required />
        </div>
        <label htmlFor="f-phone">Phone</label><span className="ul"></span>
      </div>
      <div className="field"><input id="f-org" name="organisation" placeholder=" " autoComplete="organization" /><label htmlFor="f-org">Organisation</label><span className="ul"></span></div>
      <div className="field sel">
        <select id="f-country" value={country} onChange={(e) => changeCountry(e.target.value)} autoComplete="country">
          {COUNTRIES.map((c) => <option key={c.code} value={c.code}>{c.name}</option>)}
        </select>
        <label htmlFor="f-country">Country</label><span className="ul"></span>
      </div>
      {regions ? (
        <div className="field sel">
          <select id="f-region" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="">Select…</option>
            {regions.list.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <label htmlFor="f-region">{regions.label}</label><span className="ul"></span>
        </div>
      ) : (
        <div className="field"><input id="f-region" value={region} onChange={(e) => setRegion(e.target.value)} placeholder=" " autoComplete="address-level1" /><label htmlFor="f-region">State / Province / Region</label><span className="ul"></span></div>
      )}
      <div className="field"><input id="f-location" name="location" placeholder=" " autoComplete="address-level2" /><label htmlFor="f-location">Project location (suburb or city)</label><span className="ul"></span></div>
      <div className="field sel">
        <select id="f-type" name="enquiryType" defaultValue="">
          <option value="">Select…</option>
          {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <label htmlFor="f-type">Enquiry type</label><span className="ul"></span>
      </div>
      <div className="chips" role="group" aria-label="Sector (choose any that apply)">
        {SECTOR_CHIPS.map((s) => (
          <button key={s} type="button" className={sectors.includes(s) ? 'chip on' : 'chip'} aria-pressed={sectors.includes(s)} onClick={() => toggleSector(s)}>{s}</button>
        ))}
      </div>
      <div className="field full"><textarea id="f-msg" name="message" placeholder=" " required></textarea><label htmlFor="f-msg">Project details</label><span className="ul"></span></div>
      <p className="fnote">Have site plans or reports? We’ll send you a secure link to upload them once we’ve been in touch.</p>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>I agree to Geoporte collecting and using my details to respond to this enquiry, in line with our <a href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>.</span>
      </label>
      {/* Label pre-wrapped in .roll so the page script's text-roll effect leaves this React-managed button alone */}
      <button className="pill pill-a" type="submit" disabled={sending}><span className="roll"><span data-t="Send enquiry">Send enquiry</span></span> <Arrow /></button>
      <p className={status.type ? `fmsg ${status.type}` : 'fmsg'} id="fmsg" role="status">{status.text}</p>
    </form>
  );
}
