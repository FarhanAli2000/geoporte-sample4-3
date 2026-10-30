import { Arrow } from '@/components/icons';
import { PUBLICATIONS, pad } from '@/lib/home-data';

export default function Publications() {
  return (
    <section className="hpubs" id="publications">
      <div className="wrap">
        <div className="ph">
          <div className="lft">
            <div className="sec-head">
              <div className="cap">Publications</div>
              <h2 className="split">Sharing what we learn on the ground.</h2>
            </div>
          </div>
          <a href="/publications" className="tlink rv">
            View all publications <Arrow />
          </a>
        </div>
        <div className="hpub-grid">
          {PUBLICATIONS.map((p, i) => (
            <a key={p.id} href={'/publications#' + p.id} className="hpub rv">
              <div className="img" style={{ '--cover': `url(${p.img})` }}>
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="body">
                <div className="meta">
                  <span className="n">{pad(i + 1)}</span>
                  <span>{p.type}</span>
                  <span className="d">{p.date}</span>
                </div>
                <small>{p.event}</small>
                <h3>{p.title}</h3>
                <p>{p.authors}</p>
              </div>
              <span className="ring">
                <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
