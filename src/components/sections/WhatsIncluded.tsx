import { Brush, Droplets, Layers3, ListChecks, Sparkles, Image as ImageIcon } from "lucide-react";
import { SectionHeading, ShopLink } from "./common";

export const items = [
  [
    ImageIcon,
    "10 × A4 Sticky Sand Art Sheets",
    "Large activity sheets with pre-designed adhesive sections.",
  ],
  [
    Droplets,
    "13 × Colored Sand Bottles",
    "A vibrant selection of colors gives children plenty of creative combinations.",
  ],
  [Sparkles, "1 × Glitter Bottle", "Add an extra sparkle to finished artwork."],
  [Brush, "1 × Cleaning Brush", "Helps tidy away loose sand and keep the workspace cleaner."],
  [
    Layers3,
    "1 × Mess-Free Sand Tray",
    "Designed to help contain and collect excess sand during the activity.",
  ],
  [ListChecks, "1 × Instruction Sheet", "Simple guidance to help children understand the process."],
] as const;

export function WhatsIncluded() {
  return (
    <section id="included" className="surface-blue py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="The complete kit"
          title="More Than Just Colored Sand"
          text="We designed this kit to make sand art easier, cleaner, and more exciting."
          centered
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, name, detail], i) => (
            <article
              key={name}
              className="reveal group rounded-lg border border-border/80 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`mb-8 grid size-14 place-items-center rounded-2xl ${i % 3 === 0 ? "bg-secondary/50" : i % 3 === 1 ? "bg-accent/60" : "bg-gold/35"} text-foreground`}
              >
                <Icon size={27} strokeWidth={1.7} />
              </span>
              <h3 className="font-display text-xl font-extrabold">{name}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="font-display text-2xl font-black sm:text-3xl">
            Everything They Need. One Creative Kit.
          </p>
          <ShopLink>Shop the Complete Kit</ShopLink>
        </div>
      </div>
    </section>
  );
}
