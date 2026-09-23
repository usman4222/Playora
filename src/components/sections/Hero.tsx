import { Check, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sand-kit-hero.jpg";
import { ShopLink } from "./common";
import { TrustPoints } from "./TrustPoints";

export function Hero() {
  return (
    <section id="home" className="overflow-hidden surface-hero">
      <div className="section-wrap grid items-center gap-10 pb-12 pt-12 lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-16">
        <div className="hero-copy relative z-10 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/40 px-4 py-2 text-xs font-bold text-primary sm:text-sm">
            <Sparkles size={15} /> Create. Peel. Pour. Shake. Sparkle.
          </div>
          <h1 className="font-display text-[2.4rem] font-black leading-[1.08] sm:text-6xl lg:text-[4.5rem]">
            Turn Every Picture Into a <span className="text-primary">Colorful Sand Art</span>{" "}
            Masterpiece!
          </h1>
          <img
            src={heroImage}
            width={1504}
            height={1200}
            fetchPriority="high"
            alt="Sticky sand art kit with colored sand, art sheets, glitter, brush and finished butterfly artwork"
            className="mt-7 aspect-[1.7] w-full rounded-2xl object-cover lg:hidden"
          />
          <p className="mt-6 text-base leading-[1.8] text-ink-soft sm:text-lg">
            Let little hands explore color, creativity, and confidence with our Sticky Sand Art Kit
            for Kids. With pre-cut adhesive designs, 13 vibrant colored sand bottles, glitter, a
            reusable mess-free tray, and a cleaning brush, kids can create beautiful artwork with
            simple, step-by-step fun.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm font-bold">
            <Check className="size-4 text-primary" /> Perfect for kids ages 4+{" "}
            <span className="text-primary">|</span> Screen-Free Creative Play
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ShopLink>Shop the Sand Art Kit</ShopLink>
            <Button asChild variant="brandOutline" size="brand">
              <a href="#how-it-works">
                Start Creating <ChevronRight />
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-visual relative hidden lg:block">
          <div
            className="absolute -left-5 -top-5 size-24 rounded-full border border-primary/30 sm:-left-10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-5 -right-5 size-36 rounded-full bg-gold/30 blur-2xl"
            aria-hidden="true"
          />
          <img
            src={heroImage}
            width={1504}
            height={1200}
            fetchPriority="high"
            alt="Sticky sand art kit with colorful sand bottles, art sheets, glitter, brush and tray holding a finished butterfly artwork"
            className="relative aspect-[1.18] w-full rounded-[2rem] object-cover shadow-[0_30px_70px_-30px_var(--button-shadow)] lg:aspect-[1.03]"
          />
        </div>
      </div>
      <TrustPoints />
    </section>
  );
}
