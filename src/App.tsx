import { useCallback, useEffect, useMemo, useState } from "react";
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
import { treatments } from "./content/treatments";

const STORAGE_KEY_SAVED = "tc.savedForCompare.v1";
const STORAGE_KEY_TAB = "tc.activeTab.v1";

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

export default function App() {
  const [savedIds, toggleSaved] = useLocalSet(STORAGE_KEY_SAVED);
  const [compareOpen, setCompareOpen] = useState(false);
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
        className="mt-4 font-display text-[2.4rem] leading-[1.05] text-ink md:text-[3.2rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Understand your options.
        <br />
        Walk into your appointment ready.
      </h1>
      <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-ink-soft md:text-[1.2rem]">
        One simple loop, on every card:{" "}
        <span className="font-semibold text-ink">an insight</span> →{" "}
        <span className="font-semibold text-ink">an action you can take</span> → (when you
        have a question) <span className="font-semibold text-ink">a prompt to copy into ChatGPT</span>.
        No accounts to set up. No AI inside the app. Just a calm starting point you can read
        in ten seconds and tap into when you want more.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-line">
          <span aria-hidden="true">👵</span> 60s lens on every card
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-line">
          <span aria-hidden="true">⚖️</span> Side-by-side compare
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-line">
          <span aria-hidden="true">📚</span> Peer-reviewed sources on every card
        </span>
      </div>
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
