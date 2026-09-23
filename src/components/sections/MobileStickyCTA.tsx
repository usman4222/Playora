import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur-xl sm:hidden">
      <div className="min-w-0">
        <p className="truncate font-display text-sm font-black">Sticky Sand Art Kit</p>
        <p className="text-xs text-muted-foreground">Creative fun for ages 4+</p>
      </div>
      <Button asChild variant="brand" size="brand" className="h-11 shrink-0 px-5">
        <a href="#purchase">
          Shop Now <ArrowRight />
        </a>
      </Button>
    </div>
  );
}
