import { Check } from "lucide-react";
import { SectionHeading } from "./common";

export function ColorSection() {
  return (
    <section className="overflow-hidden surface-ivory py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Color their world"
          title="A Rainbow of Creative Choices"
          text="With 13 colored sand bottles, children aren’t limited to just a few basic shades."
          centered
        />
        <div
          className="mt-14 flex snap-x gap-4 overflow-x-auto pb-5 sm:justify-center sm:gap-5"
          aria-label="Thirteen colorful sand shades"
        >
          {Array.from({ length: 13 }, (_, i) => (
            <div
              key={i}
              className="flex shrink-0 snap-center flex-col items-center gap-3"
              aria-label={`Color ${i + 1}`}
            >
              <div className="flex h-28 w-12 flex-col overflow-hidden rounded-b-xl rounded-t-md border-2 border-border/70 bg-card shadow-sm sm:h-36 sm:w-14">
                <div className="h-5 border-b border-border bg-muted" />
                <div className={`sand-tone-${i + 1} mt-auto h-[72%] rounded-t-md`} />
              </div>
              <span className="text-xs font-bold text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-sm font-semibold sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Choose their favorite colors",
            "Experiment with different combinations",
            "Create colorful patterns",
            "Add glitter for extra sparkle",
            "Make each artwork their own",
          ].map((text) => (
            <span key={text} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-primary" />
              {text}
            </span>
          ))}
        </div>
        <p className="mt-14 border-t border-border pt-9 text-center font-display text-3xl font-black sm:text-5xl">
          13 COLORS. <span className="text-primary">COUNTLESS CREATIONS.</span>
        </p>
      </div>
    </section>
  );
}
