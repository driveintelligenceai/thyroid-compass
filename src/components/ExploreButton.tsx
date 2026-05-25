import { useState } from "react";
import type { PromptTemplate } from "../types";

/**
 * "❓ Not sure? Explore this" affordance — the §8.1 mechanism.
 *
 * Reveals the tailored prompt on screen AND copies it to the clipboard,
 * then offers an "Open ChatGPT" link. The clipboard path is the required
 * default per PRD §8.1; the deep link is a best-effort convenience.
 */
export function ExploreButton({
  prompt,
  actionLabel,
}: {
  prompt: PromptTemplate;
  actionLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<"idle" | "ok" | "err">("idle");

  const text = prompt.build();
  const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(text)}`;

  async function reveal() {
    const next = !open;
    setOpen(next);
    if (next) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied("ok");
      } catch {
        setCopied("err");
      }
    }
  }

  async function copyAgain() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied("ok");
    } catch {
      setCopied("err");
    }
  }

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={reveal}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-ink-soft underline decoration-line decoration-2 underline-offset-4 transition hover:text-terracotta-700 hover:decoration-terracotta-500"
      >
        <span aria-hidden="true">❓</span>
        Not sure? Explore this in ChatGPT
      </button>

      {open && (
        <div className="mt-3 overflow-hidden rounded-2xl border border-line bg-white/70 shadow-sm">
          <div className="flex items-center justify-between gap-2 border-b border-line/70 bg-parchment-2/70 px-4 py-2.5 text-xs uppercase tracking-wide text-ink-muted">
            <span>Prompt for: {actionLabel}</span>
            <span
              role="status"
              aria-live="polite"
              className={
                copied === "ok"
                  ? "font-semibold text-sage-700"
                  : copied === "err"
                  ? "font-semibold text-terracotta-700"
                  : ""
              }
            >
              {copied === "ok" && "Copied! ✅"}
              {copied === "err" && "Couldn't copy — select the text instead"}
            </span>
          </div>
          <pre className="whitespace-pre-wrap px-4 py-3 font-sans text-[15px] leading-relaxed text-ink">
            {text}
          </pre>
          <div className="flex flex-wrap items-center gap-2 border-t border-line/70 bg-parchment-2/40 px-4 py-3">
            <button
              type="button"
              onClick={copyAgain}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-parchment shadow-sm transition hover:bg-ink-soft"
            >
              📋 Copy again
            </button>
            <a
              href={chatGptUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-terracotta-600"
            >
              Open ChatGPT →
            </a>
            <span className="text-xs text-ink-muted">
              Paste it in — then hit send.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
