import { Check, Palette, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sand-kit-hero.jpg";
import { Eyebrow } from "./common";
import type { OpenNotice } from "./types";

export function FinalCTA({ notice }: { notice: OpenNotice }) {
  return (
    <section id="purchase" className="surface-hero py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={heroImage}
            width={1504}
            height={1200}
            alt="Complete sticky sand art kit with colored sand, art sheets, glitter, brush and tray"
            className="aspect-[1.15] w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>Make something wonderful</Eyebrow>
          <h2 className="font-display text-4xl font-black leading-[1.12] sm:text-5xl lg:text-6xl">
            Ready to Turn Sand Into Art?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Everything they need to create colorful, screen-free masterpieces is right inside the
            kit.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="brand" size="brand" onClick={() => notice("Shop the Sand Art Kit")}>
              <ShoppingBag /> Shop the Sand Art Kit
            </Button>
            <Button asChild variant="brandOutline" size="brand">
              <a href="#how-it-works">
                <Palette /> Start Creating
              </a>
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink-soft">
            <Check className="size-4 text-primary" /> Creative fun for kids ages 4+
          </p>
        </div>
      </div>
    </section>
  );
}
