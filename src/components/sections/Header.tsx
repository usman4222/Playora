import { useEffect, useState } from "react";
import { ArrowRight, Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./common";
import { nav } from "./data";
import type { OpenNotice } from "./types";

export function Header({ notice }: { notice: OpenNotice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/70 bg-card/95 backdrop-blur-xl transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}
    >
      <div
        className={`section-wrap flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-[66px]" : "h-[82px]"}`}
      >
        <Brand />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <a
              className="nav-link text-sm font-semibold text-ink-soft transition-colors hover:text-primary"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open cart"
            title="Cart"
            onClick={() => notice("Cart")}
          >
            <ShoppingBag className="!size-5" />
          </Button>
          <Button asChild variant="brand" size="brand" className="hidden lg:inline-flex">
            <a href="#purchase">
              Shop the Sand Art Kit <ArrowRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="!size-6" /> : <Menu className="!size-6" />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="absolute inset-x-0 top-full border-b border-border bg-card px-5 py-5 shadow-lg xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 font-semibold hover:bg-muted"
              >
                {label}
              </a>
            ))}
            <Button asChild variant="brand" size="brand" className="mt-3">
              <a href="#purchase" onClick={() => setMenuOpen(false)}>
                Shop the Sand Art Kit <ArrowRight />
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
