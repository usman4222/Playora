import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./common";
import { nav } from "./data";
import type { OpenNotice } from "./types";

export function Footer({ notice }: { notice: OpenNotice }) {
  return (
    <footer className="bg-ink-soft pb-28 pt-16 text-background sm:pb-12">
      <div className="section-wrap grid gap-12 border-b border-background/20 pb-14 md:grid-cols-[1.6fr_1fr_1fr] lg:gap-24">
        <div>
          <Brand inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/70">
            Making creativity easier, mess-free and more fun for little hands.
          </p>
          <div className="mt-6 flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="border border-background/30 text-background hover:bg-background/10 hover:text-background"
              aria-label="Instagram information"
              title="Instagram"
              onClick={() => notice("Instagram")}
            >
              <Instagram />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="border border-background/30 text-background hover:bg-background/10 hover:text-background"
              aria-label="Facebook information"
              title="Facebook"
              onClick={() => notice("Facebook")}
            >
              <Facebook />
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold !text-background">Explore</h3>
          <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-background/70 transition-colors hover:text-background"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold !text-background">Customer</h3>
          <div className="mt-5 flex flex-col items-start gap-3">
            {["Contact", "Shipping", "Returns", "Privacy Policy", "Terms"].map((item) => (
              <Button
                key={item}
                variant="link"
                className="h-auto p-0 text-sm font-normal text-background/70 hover:text-background"
                onClick={() => notice(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="section-wrap pt-6 text-xs text-background/55">
        © {new Date().getFullYear()} Playora. All rights reserved.
      </div>
    </footer>
  );
}
