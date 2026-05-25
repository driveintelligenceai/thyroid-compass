import type { InsightAction } from "../types";
import { ExploreButton } from "./ExploreButton";

const ICON: Record<InsightAction["type"], string> = {
  discuss: "💬",
  try_note: "💡",
  save_compare: "⭐",
};

const PREFIX: Record<InsightAction["type"], string> = {
  discuss: "Worth asking about",
  try_note: "Something to try",
  save_compare: "Save this one",
};

const TINT: Record<InsightAction["type"], string> = {
  discuss: "bg-sky-50/70 ring-sky-500/20",
  try_note: "bg-sage-50/70 ring-sage-500/20",
  save_compare: "bg-amber-50/70 ring-amber-500/20",
};

export function ActionChip({
  action,
  onSave,
  saved,
}: {
  action: InsightAction;
  onSave?: () => void;
  saved?: boolean;
}) {
  return (
    <li
      className={`rounded-2xl px-4 py-3.5 ring-1 ring-inset ${TINT[action.type]}`}
    >
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="text-lg leading-6">
          {ICON[action.type]}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] leading-snug">
            <span className="font-semibold text-ink-soft">{PREFIX[action.type]} </span>
            <span className="text-ink">{action.label}</span>
          </p>

          {action.type === "save_compare" && onSave && (
            <button
              type="button"
              onClick={onSave}
              aria-pressed={saved}
              className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                saved
                  ? "bg-amber-500 text-white"
                  : "bg-white text-ink ring-1 ring-line hover:bg-parchment-2"
              }`}
            >
              {saved ? "★ Saved for compare" : "☆ Save for compare"}
            </button>
          )}

          <ExploreButton prompt={action.prompt} actionLabel={action.label} />
        </div>
      </div>
    </li>
  );
}
