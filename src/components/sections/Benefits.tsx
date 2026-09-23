import { Focus, Hand, ListChecks, Palette } from "lucide-react";
import { SectionHeading } from "./common";

export const benefits = [
  [
    Hand,
    "Fine Motor Skills",
    "Peeling, pouring, pinching, shaking, and brushing involve controlled hand movements.",
  ],
  [
    Focus,
    "Focus & Concentration",
    "Following the individual steps encourages children to slow down and concentrate on completing their artwork.",
  ],
  [
    Palette,
    "Creativity & Color Recognition",
    "Choosing colors and combining them encourages creative expression and helps children explore colors.",
  ],
  [
    ListChecks,
    "Following Instructions",
    "Step-by-step activities introduce children to sequencing and completing a project from beginning to end.",
  ],
] as const;

export function Benefits() {
  return (
    <section id="benefits" className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Play with purpose"
          title="Where Creativity Meets Learning"
          text="Sand art isn’t just entertaining — the process gives children opportunities to practice important skills while they play."
          centered
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([Icon, title, detail], i) => (
            <article
              key={title}
              className="reveal soft-lift rounded-lg border border-border bg-card/85 p-7"
            >
              <span
                className={`mb-7 grid size-14 place-items-center rounded-full ${i % 2 ? "bg-accent/70" : "bg-secondary/50"}`}
              >
                <Icon size={26} strokeWidth={1.7} />
              </span>
              <h3 className="font-display text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center font-display text-2xl font-black text-primary">
          Creative play can make learning feel like fun.
        </p>
      </div>
    </section>
  );
}
