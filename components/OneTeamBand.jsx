import { Arrow } from './icons';

export default function OneTeamBand() {
  return (
    <section className="band" id="oneteam">
      <div className="band-media" id="bandMedia"><video id="bandVideo" src="/videos/hero-bridge.mp4" poster="/images/hero-video-poster.jpg" muted playsInline loop preload="metadata" aria-hidden="true"></video></div>
      <div className="wrap band-in">
        <h2 id="bandTitle"><span className="line"><span>Working Together</span></span><span className="line"><span>As <span className="a">One Team!</span></span></span></h2>
        <div className="band-side rv">
          <p>We believe in a One Team approach and work closely with our clients to understand their needs by putting ourselves in their shoes. Our vast experience of working with a range of clients and on diverse set of projects across the globe provide us with the unique skills and experience to help develop out of the box solutions as part of our client’s team.</p>
          <a href="/contact-us" className="pill pill-o magnetic">Contact us <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
