export function Header({
  savedCount,
  onOpenCompare,
  activeTab,
  onChangeTab,
}: {
  savedCount: number;
  onOpenCompare: () => void;
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-parchment/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:px-8 md:py-4">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 text-ink"
          aria-label="Thyroid Compass — home"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-terracotta-500 text-white shadow-sm md:size-10"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="12" cy="12" r="8" />
              <line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round" />
              <line x1="12" y1="12" x2="12" y2="13.5" strokeLinecap="round" />
            </svg>
          </span>
          <div className="leading-tight">
            <p
              className="font-display text-xl text-ink md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thyroid Compass
            </p>
            <p className="text-xs text-ink-muted md:text-sm">
              A calm guide to your options. Educational only.
            </p>
          </div>
        </a>

        <nav className="flex items-center gap-2 self-end md:self-auto">
          <button
            type="button"
            onClick={() => window.print()}
            aria-label="Print this section"
            title="Print this section to bring to your appointment"
            className="relative inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink ring-1 ring-line hover:bg-parchment-2 md:px-4 no-print"
          >
            <span aria-hidden="true">🖨️</span>
            <span className="hidden sm:inline">Print</span>
          </button>
          <button
            type="button"
            onClick={onOpenCompare}
            className="relative inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink ring-1 ring-line hover:bg-parchment-2 md:px-4 no-print"
          >
            <span aria-hidden="true">⚖️</span>
            <span className="hidden sm:inline">Compare</span>
            {savedCount > 0 && (
              <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-semibold text-white">
                {savedCount}
              </span>
            )}
          </button>
        </nav>
      </div>

      <TabBar active={activeTab} onChange={onChangeTab} />
    </header>
  );
}

export type TabKey = "treatments" | "lifestyle" | "risks" | "library" | "resources";

const TABS: { key: TabKey; label: string; icon: string; desc: string }[] = [
  { key: "treatments", label: "Treatments", icon: "💊", desc: "Every option, oldest to newest" },
  { key: "lifestyle", label: "Daily Care", icon: "🌿", desc: "Food, sleep, movement, stress" },
  { key: "risks", label: "Risks & Reality", icon: "⚖️", desc: "What's true if you do nothing — or only this" },
  { key: "library", label: "Research Library", icon: "📚", desc: "Peer-reviewed papers, in plain words" },
  { key: "resources", label: "Pocket Reference", icon: "📖", desc: "Glossary, FAQ, labs, walk-in lists" },
];

function TabBar({ active, onChange }: { active: TabKey; onChange: (t: TabKey) => void }) {
  return (
    <div className="border-t border-line/40">
      <div className="mx-auto max-w-6xl px-2 md:px-6">
        <div
          role="tablist"
          aria-label="Sections"
          className="flex gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(t.key)}
                className={`group inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-terracotta-500 text-white shadow-sm"
                    : "text-ink-soft hover:bg-parchment-2"
                }`}
              >
                <span aria-hidden="true">{t.icon}</span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const TAB_META = TABS;
