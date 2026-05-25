/**
 * "I'm overwhelmed" — appears at the bottom of every tab.
 *
 * One tap scrolls back to the calm anchor on the Treatments tab.
 * For when she's read too much and needs to reset.
 */

export function OverwhelmedAnchor({ onReset }: { onReset: () => void }) {
  return (
    <section
      aria-label="Reset to the calm anchor"
      className="rounded-[var(--radius-card)] border border-sage-500/30 bg-sage-50/40 p-5 text-center shadow-[var(--shadow-card)] md:p-6 no-print"
    >
      <p className="text-sm text-ink-soft">Feeling like a lot?</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-sage-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sage-700"
      >
        <span aria-hidden="true">🌿</span>
        Take me to the three things that are enough
      </button>
    </section>
  );
}
