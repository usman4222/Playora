import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import playoraLogo from "@/assets/playora-logo.png";

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center ${inverted ? "rounded-md bg-background px-3 py-1.5" : ""}`}
      aria-label="Playora, back to top"
    >
      <img
        src={playoraLogo}
        alt="Playora"
        width={755}
        height={220}
        className="h-9 w-auto object-contain sm:h-11"
      />
    </a>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`reveal ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-4xl font-black leading-[1.12] sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{text}</p>}
    </div>
  );
}

export function ShopLink({
  children,
  outline = false,
}: {
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <Button asChild variant={outline ? "brandOutline" : "brand"} size="brand">
      <a href="#purchase">
        {children}
        {!outline && <ArrowRight />}
      </a>
    </Button>
  );
}
