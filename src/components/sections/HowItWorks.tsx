import { Brush, Droplets, Hand, Heart, Layers3, Sparkles, Image as ImageIcon } from "lucide-react";
import { SectionHeading, ShopLink } from "./common";

export const steps = [
  ["Pick Your Design", "Choose one of the colorful sand-art designs.", ImageIcon],
  ["Peel the Sticker", "Peel away a selected section to reveal the adhesive surface.", Hand],
  ["Pour Colored Sand", "Choose a color and carefully pour it over the exposed area.", Droplets],
  ["Shake & Brush", "Gently shake off excess sand and use the cleaning brush where needed.", Brush],
  ["Collect the Extra Sand", "Use the mess-free tray to help collect loose sand.", Layers3],
  ["Add Glitter", "Give your masterpiece an extra sparkle with the included glitter.", Sparkles],
  ["Display Your Artwork", "Admire your finished creation and proudly show it off!", Heart],
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="surface-cream py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="How it works"
          title="7 Simple Steps From Blank Sheet to Beautiful Art"
          text="Peel. Pour. Shake. Create. ✨"
          centered
        />
        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-6 top-8 bottom-8 w-px bg-border md:hidden"
            aria-hidden="true"
          />
          {steps.map(([title, detail, Icon], i) => (
            <article
              key={title}
              className="reveal relative flex gap-5 pl-0 md:block md:border-t-2 md:border-border md:pt-9"
            >
              <span className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-black text-primary-foreground md:absolute md:-top-6 md:left-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pb-5 md:pb-0">
                <Icon className="mb-5 hidden size-8 text-primary md:block" strokeWidth={1.6} />
                <h3 className="font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ShopLink>Peel. Pour. Shake. Create. ✨</ShopLink>
        </div>
      </div>
    </section>
  );
}
