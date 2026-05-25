/**
 * The "if this overwhelms you" calm anchor.
 *
 * Appears once on the Treatments hero. The point: this dashboard is dense by
 * design, and that's fine. If she ever feels overwhelmed, she can do three
 * things and skip everything else. That should always be enough.
 */

const THREE_THINGS = [
  {
    n: 1,
    text:
      "Take your medication consistently — empty stomach, 30–60 min before food or coffee, 4 hours from calcium / iron.",
  },
  {
    n: 2,
    text: "Walk every day. Lift weights twice a week. Sleep 7–8 hours.",
  },
  {
    n: 3,
    text:
      "Keep your TSH check appointments. Bring one question from this dashboard each time.",
  },
];

export function CalmAnchor() {
  return (
    <section
      id="calm-anchor"
      aria-labelledby="calm-anchor-heading"
      className="scroll-mt-32 rounded-[var(--radius-card)] border border-sage-500/30 bg-sage-50/50 p-6 shadow-[var(--shadow-card)] md:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
        If this dashboard overwhelms you
      </p>
      <h3
        id="calm-anchor-heading"
        className="mt-1 font-display text-xl text-ink md:text-2xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Three things are enough. Everything else is optional.
      </h3>
      <ol className="mt-4 grid gap-3 md:grid-cols-3">
        {THREE_THINGS.map((t) => (
          <li
            key={t.n}
            className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-line"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sage-500 font-display text-sm font-bold text-white">
              {t.n}
            </span>
            <p className="text-[14.5px] leading-snug text-ink">{t.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
