import { Brush, Droplets, Layers3, Sparkles } from "lucide-react";
import makingImage from "@/assets/sand-making.jpg";
import { SectionHeading } from "./common";

export function MessFreeSection() {
  return (
    <section className="relative overflow-hidden surface-mist py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="particle absolute left-[8%] top-[20%] size-2 rounded-full bg-gold" />
        <span className="particle absolute right-[13%] top-[15%] size-1.5 rounded-full bg-primary/50" />
        <span className="particle absolute bottom-[18%] left-[55%] size-2 rounded-full bg-secondary" />
      </div>
      <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="A little less to clean" title="Big Creativity. Less Cleanup." />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>Sand art is fun — but parents don’t always love finding sand everywhere.</p>
            <p>That’s why our kit includes a dedicated mess-free sand tray and a cleaning brush.</p>
            <p>
              The tray helps collect excess sand during the activity, while the brush helps tidy
              remaining loose sand from the artwork and workspace.
            </p>
          </div>
          <p className="mt-7 font-display text-xl font-black">
            Designed for a More Organized Sand-Art Experience
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-bold">
            {[
              [Layers3, "Sand Tray"],
              [Brush, "Cleaning Brush"],
              [Droplets, "Controlled Pouring"],
              [Sparkles, "Easy Cleanup"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as typeof Layers3;
              return (
                <span key={label as string} className="flex items-center gap-2">
                  <ItemIcon className="size-5 text-primary" />
                  {label as string}
                </span>
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={makingImage}
            width={1200}
            height={1008}
            alt="Sand tray containing loose sand while a child creates butterfly sand artwork"
            className="image-zoom aspect-[1.08] w-full object-cover"
          />
        </div>
      </div>
      <p className="section-wrap relative mt-14 border-t border-foreground/15 pt-8 text-center font-display text-2xl font-black sm:text-4xl">
        LET THEM CREATE. LET THE TRAY CATCH THE MESS.
      </p>
    </section>
  );
}
