/**
 * Calm safety net — "when to call your doctor."
 *
 * Persistent, low-key block that appears at the bottom of each tab.
 * Not alarmist. Not a floating modal. Just a quiet reference so she
 * never has to wonder "is this serious?" mid-anxiety.
 */

const RED_FLAGS = [
  {
    icon: "🫀",
    text: "Sudden palpitations, racing heart, or new irregular pulse — especially if also short of breath",
  },
  {
    icon: "🧠",
    text: "New confusion, severe slowed thinking, or stroke-like symptoms — extreme cases of long-untreated hypothyroidism (myxedema) and Hashimoto's encephalopathy are both real emergencies",
  },
  {
    icon: "🌡️",
    text: "Hypothermia, extreme cold intolerance, or progressive sleepiness in winter — myxedema warning sign in older women",
  },
  {
    icon: "🦴",
    text: "New severe muscle weakness or unexplained falls",
  },
  {
    icon: "💊",
    text: "Symptoms of over-replacement: sweating, tremor, anxiety, weight loss, insomnia, palpitations — discuss reducing your dose",
  },
];

export function SafetyNet() {
  return (
    <section
      aria-labelledby="safety-net"
      className="rounded-[var(--radius-card)] border border-amber-300/40 bg-amber-50/40 p-6 shadow-[var(--shadow-card)] md:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
        Safety net
      </p>
      <h3
        id="safety-net"
        className="mt-1 font-display text-xl text-ink md:text-2xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Call your doctor if any of these happen.
      </h3>
      <p className="mt-2 max-w-2xl text-sm text-ink-soft">
        Hashimoto's unfolds over years — these are the rare moments where the timing matters.
        Keep this list calm in the back of your mind.
      </p>
      <ul className="mt-4 grid gap-2 md:grid-cols-2">
        {RED_FLAGS.map((r, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-xl bg-white/70 px-4 py-3 ring-1 ring-line"
          >
            <span aria-hidden="true" className="text-xl leading-6">
              {r.icon}
            </span>
            <p className="text-[14.5px] leading-snug text-ink">{r.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-ink-muted">
        For chest pain, severe shortness of breath, fainting, or confusion that's getting worse —
        call 911 or go to an emergency room rather than waiting for an appointment.
      </p>
    </section>
  );
}
