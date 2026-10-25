import Header from './Header';
import Footer from './Footer';

// Page chrome in the same DOM order as the original static pages; the page scripts rely on these ids.
// Home passes extra overlays (loader, search, lightbox) through the slot props.
export default function Site({ home = false, section, current, beforeChrome, beforeHeader, afterHeader, after, children }) {
  const top = home ? '#home' : '#top';
  return (
    <>
      {beforeChrome}
      <div className="progress" id="progress"></div>
      <div className="cursor" id="cursor"></div><div className="cursor-dot" id="cursorDot"></div>
      {beforeHeader}
      <Header home={home} section={section} current={current} />
      {afterHeader}
      <main>{children}</main>
      <Footer home={home} />
      <a href={top} className="totop" id="totop" aria-label="Back to top">
        <svg className="r" viewBox="0 0 50 50"><circle id="topRing" cx="25" cy="25" r="23" /></svg>
        <svg className="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
      </a>
      {after}
    </>
  );
}
