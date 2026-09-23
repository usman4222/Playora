import { ArrowRight } from "lucide-react";
import makingImage from "@/assets/sand-making.jpg";
import { SectionHeading } from "./common";

export function WhatIsSandArt() {
  return (
    <section className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={makingImage}
            width={1200}
            height={1008}
            alt="A child pours colored sand onto butterfly artwork inside a craft tray"
            className="image-zoom aspect-[1.12] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="The joy of making"
            title="A Creative Activity They Can Actually Finish!"
          />
          <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>Sticky Sand Art combines the fun of coloring with the tactile experience of sand.</p>
            <p>
              Each activity starts with a pre-designed adhesive sheet. Kids peel selected sections,
              pour their chosen colored sand, gently shake away the excess, and reveal their artwork
              piece by piece.
            </p>
            <p className="font-bold text-foreground">
              The result? A colorful creation they can proudly display.
            </p>
            <p>
              This makes the activity especially engaging because children aren’t simply playing
              with sand — they’re following a process and watching their artwork come to life.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 font-display text-xl font-black text-primary sm:text-2xl">
            {["Peel", "Pour", "Shake", "Reveal"].map((item, i) => (
              <span className="reveal inline-flex items-center gap-2" key={item}>
                {i > 0 && <ArrowRight className="size-5 text-sage" />}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
