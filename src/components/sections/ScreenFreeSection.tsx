import { Check } from "lucide-react";
import makingImage from "@/assets/sand-making.jpg";
import { SectionHeading } from "./common";

export function ScreenFreeSection() {
  return (
    <section className="surface-ivory py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1 overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={makingImage}
            width={1200}
            height={1008}
            alt="Child creating hands-on sand artwork at a table without a screen"
            className="image-zoom aspect-[1.08] w-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Hands-on moments"
            title="Put the Screen Down. Pick the Colors Up."
            text="Give kids an activity that encourages hands-on creativity away from digital screens."
          />
          <p className="mt-6 text-ink-soft">
            Our Sticky Sand Art Kit creates an opportunity for children to:
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Create with their hands",
              "Explore colors",
              "Follow a project",
              "Practice concentration",
              "Complete something they can display",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent">
                  <Check size={15} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
