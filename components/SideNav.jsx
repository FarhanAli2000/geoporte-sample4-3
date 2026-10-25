import { GEOTECHNICAL, LEGAL } from '@/lib/nav';

const GROUPS = {
  geotechnical: { className: 'a-side rv', label: 'Geotechnical services', title: 'Geotechnical Engineering', links: GEOTECHNICAL },
  legal: { className: 'a-side', label: 'Legal', title: 'Legal', links: LEGAL },
};

// Sticky sidebar listing sibling pages, with the current one highlighted.
export default function SideNav({ group, current }) {
  const { className, label, title, links } = GROUPS[group];
  return (
    <aside className={className} aria-label={label}>
      <h3>{title}</h3>
      <ul>
        {links.map(([slug, text]) => (
          <li key={slug}>
            <a href={'/' + slug} {...(slug === current ? { className: 'cur', 'aria-current': 'page' } : {})}>{text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
