import { useEffect, useRef, useState } from "react";

export function Header({
  savedCount,
  onOpenCompare,
  activeTab,
  onChangeTab,
  largerType,
  onToggleLargerType,
  calmMode,
  onToggleCalmMode,
}: {
  savedCount: number;
  onOpenCompare: () => void;
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
  largerType: boolean;
  onToggleLargerType: () => void;
  calmMode: boolean;
  onToggleCalmMode: () => void;
}) {
  const active = TABS.find((t) => t.key === activeTab);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click / Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-30 border-b border-line/70 bg-parchment/95 backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 md:px-8 md:py-4">
        <a
          href="#top"
          className="group inline-flex min-w-0 items-center gap-2.5 text-ink"
          aria-label="Thyroid Compass — home"
        >
          <span
            aria-hidden="true"
            className="grid size-8 shrink-0 place-items-center rounded-full bg-terracotta-500 text-white shadow-sm md:size-10"
          >
            <svg viewBox="0 0 24 24" className="size-4 md:size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="12" cy="12" r="8" />
              <line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round" />
              <line x1="12" y1="12" x2="12" y2="13.5" strokeLinecap="round" />
            </svg>
          </span>
          <div className="min-w-0 leading-tight">
            <p
              className="truncate font-display text-base text-ink md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thyroid Compass
            </p>
            <p className="hidden text-xs text-ink-muted md:block md:text-sm calm-hide">
              A calm guide. Educational only.
            </p>
          </div>
        </a>

        <nav className="flex shrink-0 items-center gap-1.5 self-center no-print md:gap-2">
          {/* Compare always visible — primary action */}
          <button
            type="button"
            onClick={onOpenCompare}
            className="relative inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink ring-1 ring-line hover:bg-parchment-2"
            aria-label="Open compare drawer"
          >
            <span aria-hidden="true">⚖️</span>
            <span className="hidden sm:inline">Compare</span>
            {savedCount > 0 && (
              <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-semibold text-white">
                {savedCount}
              </span>
            )}
          </button>

          {/* On md+ show all utility buttons inline */}
          <button
            type="button"
            onClick={onToggleLargerType}
            aria-pressed={largerType}
            aria-label={largerType ? "Switch to normal text size" : "Switch to larger text size"}
            title="Larger text"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink ring-1 ring-line hover:bg-parchment-2"
          >
            <span aria-hidden="true">{largerType ? "A−" : "A+"}</span>
            <span>{largerType ? "Normal" : "Larger"}</span>
          </button>
          <button
            type="button"
            onClick={onToggleCalmMode}
            aria-pressed={calmMode}
            title="Calm mode — hide extra chrome"
            className={`hidden md:inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold ring-1 ${calmMode ? "bg-sage-500 text-white ring-sage-500" : "bg-white text-ink ring-line hover:bg-parchment-2"}`}
          >
            <span aria-hidden="true">🌿</span>
            <span>{calmMode ? "Calm on" : "Calm"}</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            aria-label="Print this section"
            title="Print this section"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink ring-1 ring-line hover:bg-parchment-2"
          >
            <span aria-hidden="true">🖨️</span>
            <span>Print</span>
          </button>

          {/* On small: kebab menu containing Larger/Calm/Print */}
          <div ref={menuRef} className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-haspopup="menu"
              aria-label="More options"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink ring-1 ring-line hover:bg-parchment-2"
            >
              <span aria-hidden="true">⋯</span>
              <span className="sr-only">More</span>
            </button>
            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 z-40 mt-2 w-56 origin-top-right rounded-2xl border border-line bg-white p-2 shadow-[var(--shadow-card-hover)]"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onToggleLargerType();
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-base font-medium text-ink hover:bg-parchment-2"
                >
                  <span aria-hidden="true" className="text-lg">{largerType ? "A−" : "A+"}</span>
                  <span>{largerType ? "Normal text size" : "Larger text"}</span>
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    onToggleCalmMode();
                    setMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-base font-medium hover:bg-parchment-2 ${calmMode ? "text-sage-700" : "text-ink"}`}
                >
                  <span aria-hidden="true" className="text-lg">🌿</span>
                  <span>{calmMode ? "Calm mode on" : "Turn on calm mode"}</span>
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    window.print();
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-base font-medium text-ink hover:bg-parchment-2"
                >
                  <span aria-hidden="true" className="text-lg">🖨️</span>
                  <span>Print this section</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      <TabBar active={activeTab} onChange={onChangeTab} />

      {/* Tab descriptor — hidden on mobile (saves vertical space), shows md+ in calm-hide */}
      {active && (
        <div className="hidden border-t border-line/40 bg-parchment-2/30 calm-hide md:block">
          <p className="mx-auto max-w-6xl px-5 py-2 text-xs text-ink-muted md:px-8">
            <span className="font-semibold text-ink-soft">{active.label}: </span>
            {active.desc}
          </p>
        </div>
      )}
    </header>
  );
}

export type TabKey = "treatments" | "lifestyle" | "risks" | "library" | "resources";

const TABS: { key: TabKey; label: string; shortLabel: string; icon: string; desc: string }[] = [
  { key: "treatments", label: "Treatments", shortLabel: "Meds", icon: "💊", desc: "Every option, oldest to newest" },
  { key: "lifestyle", label: "Daily Care", shortLabel: "Daily", icon: "🌿", desc: "Food, sleep, movement, stress" },
  { key: "risks", label: "Risks & Reality", shortLabel: "Risks", icon: "⚖️", desc: "What's true if you do nothing — or only this" },
  { key: "library", label: "Research Library", shortLabel: "Research", icon: "📚", desc: "Peer-reviewed papers, in plain words" },
  { key: "resources", label: "Pocket Reference", shortLabel: "Reference", icon: "📖", desc: "Glossary, FAQ, labs, walk-in lists" },
];

function TabBar({ active, onChange }: { active: TabKey; onChange: (t: TabKey) => void }) {
  return (
    <div className="border-t border-line/40">
      <div className="mx-auto max-w-6xl px-2 md:px-6">
        <div
          role="tablist"
          aria-label="Sections"
          className="flex gap-1 overflow-x-auto py-1.5 md:py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(t.key)}
                className={`group inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition md:gap-2 md:px-4 md:py-2 ${
                  isActive
                    ? "bg-terracotta-500 text-white shadow-sm"
                    : "text-ink-soft hover:bg-parchment-2"
                }`}
                style={{ scrollSnapAlign: "start" }}
              >
                <span aria-hidden="true">{t.icon}</span>
                <span className="md:hidden">{t.shortLabel}</span>
                <span className="hidden md:inline">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const TAB_META = TABS;
