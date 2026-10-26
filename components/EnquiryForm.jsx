'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { Arrow } from './icons';

const SECTOR_CHIPS = ['Transportation', 'Building', 'Water', 'Ports & Marine', 'Energy'];
const RECIPIENT = 'enquiries@geoporte.com';

// Submissions are emailed to RECIPIENT through FormSubmit; the first one sends an activation email to that inbox.
export default function EnquiryForm() {
  const [sector, setSector] = useState(SECTOR_CHIPS[0]);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const field = (name) => String(new FormData(form).get(name) || '').trim();
    const name = field('name'), email = field('email'), message = field('message');

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      setStatus({ type: 'err', text: 'Please add your name, a valid email and a few project details.' });
      gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.5, ease: 'elastic.out(1,.3)' });
      return;
    }

    setSending(true);
    setStatus({ type: '', text: 'Sending…' });
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name, email, organisation: field('organisation'), sector, message,
          _subject: `New website enquiry from ${name}`, _replyto: email, _template: 'table', _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (!(data.success === true || data.success === 'true')) throw new Error('not sent');
      setStatus({ type: 'ok', text: `Thank you, ${name.split(' ')[0]}. The right engineer will reply within one business day.` });
      form.reset();
    } catch {
      setStatus({ type: 'err', text: `Sorry, your enquiry could not be sent. Please email ${RECIPIENT} directly.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form rv" id="form" noValidate onSubmit={onSubmit}>
      <h3>Start a conversation</h3>
      <div className="field"><input id="f-name" name="name" placeholder=" " autoComplete="name" /><label htmlFor="f-name">Full name</label><span className="ul"></span></div>
      <div className="field"><input id="f-email" name="email" type="email" placeholder=" " autoComplete="email" /><label htmlFor="f-email">Email</label><span className="ul"></span></div>
      <div className="field full"><input id="f-org" name="organisation" placeholder=" " autoComplete="organization" /><label htmlFor="f-org">Organisation</label><span className="ul"></span></div>
      <div className="chips" role="group" aria-label="Sector">
        {SECTOR_CHIPS.map((s) => (
          <button key={s} type="button" className={s === sector ? 'chip on' : 'chip'} onClick={() => setSector(s)}>{s}</button>
        ))}
      </div>
      <div className="field full"><textarea id="f-msg" name="message" placeholder=" "></textarea><label htmlFor="f-msg">Project details</label><span className="ul"></span></div>
      {/* Label pre-wrapped in .roll so the page script's text-roll effect leaves this React-managed button alone */}
      <button className="pill pill-a" type="submit" disabled={sending}><span className="roll"><span data-t="Send enquiry">Send enquiry</span></span> <Arrow /></button>
      <p className={status.type ? `fmsg ${status.type}` : 'fmsg'} id="fmsg" role="status">{status.text}</p>
    </form>
  );
}
