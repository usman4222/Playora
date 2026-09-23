import { Brush, Droplets, Heart, Layers3, Palette, Sparkles } from "lucide-react";

export const trust = [
  [Palette, "10 A4 Sand Art Designs"],
  [Droplets, "13 Vibrant Sand Colors"],
  [Sparkles, "Glitter Included"],
  [Brush, "Cleaning Brush Included"],
  [Layers3, "Mess-Free Sand Tray"],
  [Heart, "Ages 4+"],
] as const;

export function TrustPoints() {
  return (
    <div className="border-y border-border bg-card/80">
      <div className="section-wrap grid grid-cols-2 gap-x-3 gap-y-5 py-6 sm:grid-cols-3 xl:grid-cols-6">
        {trust.map(([Icon, label]) => (
          <div key={label} className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary/40 text-primary">
              <Icon size={18} />
            </span>
            <span className="text-xs font-bold leading-snug sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
