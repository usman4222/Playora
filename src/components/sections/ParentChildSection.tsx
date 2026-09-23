import familyImage from "@/assets/sand-family.jpg";
import { SectionHeading } from "./common";

export function ParentChildSection() {
  return (
    <section className="surface-blue py-20 sm:py-28">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Better together" title="A Creative Activity to Enjoy Together" />
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">
            Parents can join children during the activity, help with the steps, talk about colors,
            and celebrate their finished creations.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            It’s a simple way to turn crafting into quality creative time together.
          </p>
          <p className="mt-8 font-display text-2xl font-black text-primary">
            Create Memories, One Sand Art Picture at a Time. ❤️
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            loading="lazy"
            src={familyImage}
            width={1200}
            height={1056}
            alt="Parent and child making colorful sand artwork together at home"
            className="image-zoom aspect-[1.13] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
