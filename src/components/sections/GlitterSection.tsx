import { Sparkles } from "lucide-react";
import heroImage from "@/assets/sand-kit-hero.jpg";
import { SectionHeading } from "./common";

export function GlitterSection() {
  return (
    <section className="surface-cream py-20 sm:py-24">
      <div className="section-wrap grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="A finishing touch"
            title="Because Every Masterpiece Deserves a Little Magic"
          />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            The included glitter bottle gives children another way to personalize their artwork.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Add sparkle to selected areas and transform an already colorful creation into something
            extra special.
          </p>
          <p className="mt-8 font-display text-xl font-black text-primary sm:text-2xl">
            Create it. Customize it. Make it sparkle. ✨
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={heroImage}
            width={1504}
            height={1200}
            alt="Finished colorful butterfly artwork beside a glitter bottle and colorful sand"
            className="image-zoom aspect-[1.28] w-full object-cover object-[65%_57%]"
          />
          <Sparkles
            className="particle absolute right-7 top-7 size-9 text-gold"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
