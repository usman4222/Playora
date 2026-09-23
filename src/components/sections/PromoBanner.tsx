import { ArrowRight } from "lucide-react";

export function PromoBanner({
  type,
  title,
  detail,
}: {
  type: "peach" | "sage" | "dark";
  title: string;
  detail: string;
}) {
  return (
    <aside
      className={`${type === "peach" ? "banner-blue" : type === "sage" ? "banner-cream" : "banner-deep text-card"} py-10 sm:py-12`}
    >
      <div className="section-wrap flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl font-black sm:text-3xl">{title}</p>
          <p className="mt-2 text-sm sm:text-base">{detail}</p>
        </div>
        <ArrowRight className="hidden size-9 shrink-0 sm:block" strokeWidth={1.5} />
      </div>
    </aside>
  );
}
