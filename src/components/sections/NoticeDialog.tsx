import { useEffect } from "react";
import { CircleHelp, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NoticeDialog({ topic, close }: { topic: string | null; close: () => void }) {
  useEffect(() => {
    if (!topic) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [topic, close]);

  if (!topic) return null;
  const shopping = topic === "Cart" || topic === "Shop the Sand Art Kit";

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/55 p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-title"
        className="w-full max-w-md rounded-lg bg-card p-7 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-5">
          <span className="grid size-12 place-items-center rounded-full bg-secondary/50 text-primary">
            {shopping ? <ShoppingBag /> : <CircleHelp />}
          </span>
          <Button variant="ghost" size="icon" aria-label="Close" onClick={close}>
            <X />
          </Button>
        </div>
        <h2 id="notice-title" className="mt-5 font-display text-2xl font-black">
          {shopping ? "Shopping isn't available yet" : topic}
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {shopping
            ? "The kit is shown here, but checkout and cart have not been connected yet. No order has been placed."
            : "Details for this page have not been provided yet. Please check back when they're available."}
        </p>
        <Button variant="brand" size="brand" className="mt-7 w-full" onClick={close}>
          Got it
        </Button>
      </div>
    </div>
  );
}
