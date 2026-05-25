import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Header, type TabKey } from "./components/Header";
import { InsightCard } from "./components/InsightCard";
import { CompareDrawer } from "./components/CompareDrawer";
import { SafetyAnchor } from "./components/SafetyAnchor";
import { LifestyleTabContent } from "./components/LifestyleSection";
import { RisksTabContent } from "./components/RisksSection";
import { LibraryTabContent } from "./components/LibrarySection";
import { ResourcesTabContent } from "./components/ResourcesSection";
import { CalmAnchor } from "./components/CalmAnchor";
import { SafetyNet } from "./components/SafetyNet";
import { OverwhelmedAnchor } from "./components/OverwhelmedAnchor";
import { treatments } from "./content/treatments";

const STORAGE_KEY_SAVED = "tc.savedForCompare.v1";
const STORAGE_KEY_TAB = "tc.activeTab.v1";
const STORAGE_KEY_LARGER = "tc.largerType.v1";
const STORAGE_KEY_CALM = "tc.calmMode.v1";

function useLocalSet(key: string): [Set<string>, (id: string) => void] {
  const [set, setSet] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(Array.from(set)));
    } catch {
      // ignore — storage may be unavailable in private browsing
    }
  }, [key, set]);

  const toggle = useCallback((id: string) => {
    setSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return [set, toggle];
}

function useLocalBoolean(key: string): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(() => {
    try {
      return localStorage.getItem(key) === "1";
    } catch {
      return false;
    }
  });
  const toggle = useCallback(() => {
    setValue((v) => {
      const next = !v;
      try {
        localStorage.setItem(key, next ? "1" : "0");
      } catch {
        // ignore
      }
      return next;
    });
  }, [key]);
  return [value, toggle];
}

export default function App() {
  const [savedIds, toggleSaved] = useLocalSet(STORAGE_KEY_SAVED);
  const [compareOpen, setCompareOpen] = useState(false);
  const [largerType, toggleLargerType] = useLocalBoolean(STORAGE_KEY_LARGER);
  const [calmMode, toggleCalmMode] = useLocalBoolean(STORAGE_KEY_CALM);
  const [activeTab, setActiveTab] = useState<TabKey>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_TAB) as TabKey | null;
      if (raw === "treatments" || raw === "lifestyle" || raw === "risks" || raw === "library" || raw === "resources") return raw;
    } catch {
      // ignore
    }
    return "treatments";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TAB, activeTab);
    } catch {
      // ignore
    }
  }, [activeTab]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("text-larger", largerType);
    html.classList.toggle("calm-mode", calmMode);
  }, [largerType, calmMode]);

  // Scroll position memory per tab (Pass 25)
  const scrollMemory = useRef<Record<TabKey, number>>({} as Record<TabKey, number>);
  useEffect(() => {
    const onScroll = () => {
      scrollMemory.current[activeTab] = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeTab]);
  useEffect(() => {
    const saved = scrollMemory.current[activeTab] ?? 0;
    window.scrollTo({ top: saved, behavior: "instant" as ScrollBehavior });
  }, [activeTab]);

  const savedInsights = useMemo(
    () => treatments.filter((t) => savedIds.has(t.id)),
    [savedIds]
  );

  return (
    <div id="top" className="mx-auto flex min-h-dvh max-w-6xl flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header
        savedCount={savedIds.size}
        onOpenCompare={() => setCompareOpen(true)}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        largerType={largerType}
        onToggleLargerType={toggleLargerType}
        calmMode={calmMode}
        onToggleCalmMode={toggleCalmMode}
      />

      <main id="main-content" tabIndex={-1} className="flex-1 px-5 pb-24 pt-6 md:px-8 md:pt-10">
        {activeTab === "treatments" && (
          <TreatmentsTab
            saved={savedIds}
            onToggleSave={toggleSaved}
          />
        )}
        {activeTab === "lifestyle" && <LifestyleTab />}
        {activeTab === "risks" && <RisksTab />}
        {activeTab === "library" && <LibraryTab />}
        {activeTab === "resources" && <ResourcesTab />}

        <section className="mt-12 space-y-6">
          <OverwhelmedAnchor
            onReset={() => {
              setActiveTab("treatments");
              setTimeout(() => {
                document.getElementById("calm-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 50);
            }}
          />
          <SafetyNet />
          <SafetyAnchor />
        </section>
      </main>

      <SiteFooter />

      {compareOpen && (
        <CompareDrawer
          selected={savedInsights}
          onClose={() => setCompareOpen(false)}
          onRemove={(id) => toggleSaved(id)}
        />
      )}
    </div>
  );
}

function TreatmentsTab({
  saved,
  onToggleSave,
}: {
  saved: Set<string>;
  onToggleSave: (id: string) => void;
}) {
  return (
    <>
      <Hero />
      <section className="mt-10">
        <CalmAnchor />
      </section>
      <section aria-labelledby="explorer-heading" className="mt-10 md:mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-700">
              Treatment Options Explorer
            </p>
            <h2
              id="explorer-heading"
              className="mt-1 font-display text-3xl text-ink md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every option — oldest and most-trusted, to newest and experimental.
            </h2>
            <p className="mt-2 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
              Each card is one idea: an <strong>insight</strong> about a treatment, the{" "}
              <strong>actions</strong> you can take next, and — when you have a question — a
              ready-to-paste ChatGPT <strong>prompt</strong> so you can explore deeper in the
              tool you already use.
            </p>
          </div>
        </div>

        <ol className="mt-8 grid gap-6 md:gap-8">
          {treatments.map((t, idx) => (
            <li key={t.id} className="relative">
              <div className="absolute -left-2 -top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-terracotta-500 font-display text-base font-bold text-white shadow-md md:-left-4 md:size-10 md:text-lg">
                {idx + 1}
              </div>
              <InsightCard
                insight={t}
                saved={saved.has(t.id)}
                onToggleSave={() => onToggleSave(t.id)}
              />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

function LifestyleTab() {
  return <LifestyleTabContent />;
}

function RisksTab() {
  return <RisksTabContent />;
}

function LibraryTab() {
  return <LibraryTabContent />;
}

function ResourcesTab() {
  return <ResourcesTabContent />;
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-white/70 px-6 py-10 shadow-[var(--shadow-card)] md:px-12 md:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_90%_-20%,_var(--color-terracotta-50),_transparent_60%),radial-gradient(500px_300px_at_-10%_120%,_var(--color-amber-50),_transparent_60%)]"
      />
      <p className="inline-flex items-center gap-2 rounded-full bg-terracotta-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta-700">
        <span aria-hidden="true">🌿</span>
        For Hashimoto's and hypothyroidism
      </p>
      <h1
        className="mt-4 font-display leading-[1.08] text-ink"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4.5vw + 1rem, 3.2rem)",
        }}
      >
        Understand your options.
        <br />
        Walk in ready.
      </h1>
      <p className="prose-comfort mt-5 text-[1.1rem] leading-relaxed text-ink-soft md:text-[1.15rem]">
        A calm guide for Hashimoto's. Read what you want, skip what you don't.
        Print anything to bring to your doctor.
      </p>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line/60 bg-parchment-2/40 px-5 py-8 text-center text-xs text-ink-muted md:px-8">
      <p>
        Thyroid Compass · educational only · sources: Mayo Clinic, American Thyroid
        Association, NIH/Endotext, Endocrine Society, peer-reviewed journals, and
        clinicaltrials.gov (see "Sources" on each card).
      </p>
      <p className="mt-2">
        Built with care. Not a replacement for your doctor.
      </p>
    </footer>
  );
}
