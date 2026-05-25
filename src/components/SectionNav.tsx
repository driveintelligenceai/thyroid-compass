/**
 * Quick in-tab navigation strip — small chips that jump to a section anchor.
 * Makes long tabs (Daily Care, Risks, Library) scannable.
 */

export interface NavLink {
  id: string;
  label: string;
}

export function SectionNav({ items, kicker }: { items: NavLink[]; kicker?: string }) {
  if (items.length < 2) return null;
  return (
    <nav
      aria-label={kicker || "Section navigation"}
      className="rounded-2xl border border-line bg-white/70 px-4 py-3 text-sm"
    >
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {kicker}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-parchment-2/60 px-3 py-1 text-ink-soft ring-1 ring-line hover:bg-terracotta-50 hover:text-ink hover:ring-terracotta-500/30"
          >
            <span aria-hidden="true">↓</span>
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
