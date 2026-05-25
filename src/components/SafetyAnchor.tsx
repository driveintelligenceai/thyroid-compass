/**
 * PRD §3 inviolable safety anchor. Renders at the bottom of every treatment
 * card and at the foot of every page. Wording is verbatim from PRD §3.
 */

export function SafetyAnchor() {
  return (
    <div
      role="note"
      className="rounded-2xl border border-line/80 bg-parchment-2/60 px-5 py-4 text-sm leading-relaxed text-ink-soft"
    >
      <p className="font-semibold text-ink">A note from us:</p>
      <p className="mt-1">
        This is general information. Your doctor knows your labs, your heart,
        your bones, and your full medication list — bring these questions to
        them. If you feel very unwell, call your doctor — don't wait for an
        appointment.
      </p>
    </div>
  );
}
