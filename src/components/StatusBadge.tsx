import type { StatusBadge as Badge, EvidenceStrength } from "../types";

const STATUS_LABEL: Record<Badge, string> = {
  standard: "Standard, first-line",
  common_alt: "Common alternative",
  less_common: "Less common",
  experimental: "Experimental — not prescribable today",
};

const STATUS_CLASS: Record<Badge, string> = {
  standard: "bg-sage-50 text-sage-700 ring-sage-500/30",
  common_alt: "bg-sky-50 text-sky-700 ring-sky-500/30",
  less_common: "bg-amber-50 text-amber-700 ring-amber-500/30",
  experimental: "bg-terracotta-50 text-terracotta-700 ring-terracotta-500/30",
};

export function StatusBadgePill({ status }: { status: Badge }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-inset ${STATUS_CLASS[status]}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current opacity-70" />
      {STATUS_LABEL[status]}
    </span>
  );
}

const EVIDENCE_LABEL: Record<EvidenceStrength, string> = {
  strong: "Strong evidence",
  some: "Some evidence",
  limited: "Limited evidence",
  experimental: "In research",
};

export function EvidenceMeter({ level }: { level: EvidenceStrength }) {
  const dots = level === "strong" ? 4 : level === "some" ? 3 : level === "limited" ? 2 : 1;
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-medium text-ink-soft"
      aria-label={EVIDENCE_LABEL[level]}
      title={EVIDENCE_LABEL[level]}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`size-1.5 rounded-full ${
              i < dots ? "bg-terracotta-500" : "bg-line"
            }`}
          />
        ))}
      </span>
      {EVIDENCE_LABEL[level]}
    </span>
  );
}
